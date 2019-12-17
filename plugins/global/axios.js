import axios from 'axios';
import Vue from 'vue'
import {FreshToken} from '../../plugins/loginApi/login'
export default function ({redirect,store}) {
  axios.interceptors.response.use(res => {
      if (res.data.Result ==1&&res.data.Message.indexOf("请输入正确的价格") == -1&&res.data.Message.indexOf("重新登录") == -1) {
        Vue.prototype.$alert(res.data.Message.replace(/<.*?>/ig,""),'消息提示')
        return Promise.reject(res.data);
      } else{
        return res
      }
    },
    error => { //响应错误处理
      var config = error.config;
      let err = JSON.parse(JSON.stringify(error)).response
      if (error.response.status == 401) {
        localStorage.clear()
        store.commit('logout')
          redirect({
          path: '/login/login'
        })
      }
      return Promise.reject(error)
    })
  axios.create({
    baseURL:process.env.BASE_URL
  })
}
