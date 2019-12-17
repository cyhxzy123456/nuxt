//封装请求
import axios from 'axios'
import {FreshToken} from '../../plugins/loginApi/login'
import Vue from 'vue'
let refreshSubscribers = [];
// 是否正在刷新的标志
let isRefreshing = false;
/*将所有的请求都push到数组中*/
function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}
// 数组中的请求得到新的token之后自执行，用新的token去请求数据
function onRrefreshed(token) {
  refreshSubscribers.map(cb => cb(token));
}

export default function({store,redirect}) {
// http request 拦截器
  axios.interceptors.request.use(
    config => {
      config.headers.apiVersion=1
      let access_token=localStorage.getItem('access_token')
      let overTime=localStorage.getItem('overTime')
      let refresh_token=localStorage.getItem('refresh_token')
      if (access_token) {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization =`Bearer ${access_token}`;
        if (overTime && overTime<= new Date().getTime()) {
          if (!isRefreshing) {
            /*判断是否正在刷新*/
            isRefreshing = true;
            /*发起刷新token的请求*/
            let result = FreshToken(refresh_token)
            result.then((res)=>{
              isRefreshing = false;
              if(res.Result ==0){
                localStorage.setItem("access_token", res.Data.access_token);
                localStorage.setItem("refresh_token", res.Data.refresh_token);
                let overTime = new Date().getTime() + res.Data.expires_in * 600;
                localStorage.setItem("overTime", overTime);

                /*执行数组里的函数,重新发起被挂起的请求*/
                config.headers.Authorization = "Bearer " + res.Data.access_token;
                onRrefreshed(res.Data.access_token)
                /*执行onRefreshed函数后清空数组中保存的请求*/
                refreshSubscribers = []
              }else{
                store.commit('logout')
                localStorage.clear()
                redirect({
                  path: '/login/login'
                })
                return
              }
            })
            /*把请求(token)=>{....}都push到一个数组中*/
            let retry = new Promise((resolve, reject) => {
              /*(token) => {...}这个函数就是回调函数*/
              subscribeTokenRefresh((token) => {
                config.headers.Authorization = 'Bearer ' + token;
                /*将请求挂起*/
                resolve(config)
              })
            });
            return retry
          }
          return config
        } else {
          return config
        }
      } else {
        return config
      }
    },
    err => {
      return Promise.reject(err);
    }
  )
}
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
    },).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
//返回header层
export function getPages(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
    },).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
export function putParam(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method:'PUT',
      url:url,
      params:params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
export function put(url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url,data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url,data
    ).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
//返回header层
export function postPage(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url,data
    ).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
export function postParam(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method:'POST',
      url:url,
      params:params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}


