<template>
  <div class="left">
    <div class="content_main">
      <Head></Head>
      <div class="wrap cont">
        <div class="left">
          <ul class="list">
           <!-- <li><span>个人中心</span></li>-->
            <nuxt-link tag="li"  to="/personCenter/user" active-class="active"><span>个人中心</span></nuxt-link>
            <nuxt-link tag="li"  to="/trade/trade" active-class="active"><span>创建策略</span></nuxt-link>
            <nuxt-link tag="li"  to="/myTrade/myTrade" active-class="active"><span>我的策略</span></nuxt-link>
            <nuxt-link tag="li"  to="/personCenter/flowing" active-class="active"><span>资金明细</span></nuxt-link>
            <nuxt-link tag="li"  to="/personCenter/setting" active-class="active"><span>我的资料</span></nuxt-link>
            <nuxt-link tag="li" v-show="this.$store.getters.config.isOpenUserContract==0"   to="/personCenter/protocol" active-class="active"><span>用户协议</span></nuxt-link>
            <nuxt-link tag="li" v-show="this.$store.getters.config.isOpenQa==0"  to="/personCenter/goView" active-class="active"><span>风险评测</span></nuxt-link>
           <!-- <nuxt-link @click="chargeBtn" tag="li"  to="" active-class="active"><span >账户充值</span></nuxt-link>-->
            <nuxt-link tag="li"  to="/personCenter/message" active-class="active"><span>消息中心</span></nuxt-link>
            <nuxt-link tag="li" v-show="WorkOrderIsLock==0"  to="/personCenter/feedback" active-class="active"><span>意见反馈</span><span v-show="showDian" class="dian"></span></nuxt-link>
          </ul>
        </div>
        <div class="right">
          <div class="right-content">
            <nuxt/>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Footer from '../components/footer/footer.vue'
  import Head from '../components/header/header.vue'
  import personCenterHeader from '../components/personCenter/personCenterHeader'
  import {GetFeedBackNo} from '../plugins/personCenterApi/personCenter'
  export default {
    components:{Footer,Head,personCenterHeader},
    data(){
      return{
        info:this.$store.getters.userInfo,
        userList:[
          {name:'个人中心',url:'/personCenter/user'},
          {name:'账户充值',url:'/personCenter/recharge'},
          {name:'申请策略',url:'/personCenter/apply'},
          {name:'策略建议',url:'/myTrade/myTrade'},
          {name:'资金明细',url:'/personCenter/flowing'},
          {name:'我的资料',url:'/personCenter/setting'},
          {name:'用户协议',url:'/personCenter/protocol'},
         /* {name:'交割单查询',url:'/personCenter/delivery'},
          {name:'消息中心',url:'/personCenter/message'},*/
          {name:'意见反馈',url:'/personCenter/feedback'},
        ],
        WorkOrderIsLock:this.$store.getters.config.isOpenWorkOrder,
        currentPage:1,
        pageSize:10,
        showDian:false
      }
    },
    methods:{
      getList(){
        let result = GetFeedBackNo(this.pageSize,this.currentPage)
        result.then((res)=>{
          if(res.Data.Data.length>0){
            this.showDian=true
          }else{
            this.showDian=false
          }

        })
      },
      chargeBtn(){
        if(this.$store.getters.userInfo.nameTrue==0){
          this.$confirm('未实名认证，请前往认证','实名认证',{confirmButtonText: '立即认证', cancelButtonText: '取消'}).then(()=>{
            this.$router.push('/personCenter/setting')
          })
          return
        }else{
          if(this.$store.getters.config.isOpenUserContract==0){
            if(this.$store.getters.userInfo.contractStatus==0){
              this.$confirm(' 您未签署《用户注册协议》','协议签署',{confirmButtonText: '立即签署', cancelButtonText: '取消'}).then(()=>{
                this.$router.push('/personCenter/setting')
              })
              return;
            }else{
              this.$router.push('/personCenter/recharge')
            }
          }else{
            return;
          }
        }
      }
    },
    created() {
      this.getList()
      if(this.WorkOrderIsLock==1){
        this.userList = this.userList.splice(0,7)
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .dian{width:10px;height:10px;background: red;border-radius: 50%;display: inline-block;margin-left:5px;}
 .left{
   .content_main{background: #E2E2E2}
   .cont{overflow: hidden;margin: 60px auto 60px!important;background: #fff;border:1px solid #eee;border-top:5px solid #9c221f;padding:40px;}
   .left{width:220px;float:left;}
   .right{width:854px;float:right;background:#fff}
   .list{width:220px;background-color: #fff;border: 1px solid #DDD;}
   .list li{width:220px;box-sizing: border-box;font-size: 16px;line-height: 60px;cursor: pointer;color:#666;text-align: center; border-bottom: 1px solid #DDD;
      i{display: inline-block;width: 28px;height: 28px;background: url(../assets/img/personCenter/assets-icon.png) center no-repeat;background-size: 510px 44px;vertical-align: middle;margin-right: 10px}
   }
   /*li:first-child{    background-color: #fa7e41!important;color:#fff;}
   li:nth-child(2) i{background-position: -6px -8px;}
   li:nth-child(3) i{background-position: -55px -8px;}
   li:nth-child(4) i{background-position: -115px -8px;}
   li:nth-child(5) i{background-position: -165px -8px;}
   li:nth-child(6) i{background-position: -220px -8px;}
   li:nth-child(7) i{background-position: -220px -8px;margin:0}
   li:nth-child(8) i{background-position: -316px -8px;}
   li:nth-child(9) i{background-position: -316px -8px;}*/
   .list li.active{    background-color: #9c221f;color:#fff}
   .list li a{color:#333}
 }
  .right{background: #fff!important;}
</style>
