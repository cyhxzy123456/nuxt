<template>
 <div class="content_main">
   <div class="wrap">
     <div class="new-guide ">
       <div class="new-guide-banner"><img src="../assets/img/guid/guide-banner.jpg" alt="新手指引"></div>
       <div class="new-guide-sec sec-bg1 clearfix">
         <div class="fl w1">
           <div class="new-guide-steps">
             <i>01</i>
             <em>第一步</em>
           </div>
           <div class="tit">注册成为{{this.$store.getters.allInfo.webName}}新用户</div>
           <div class="des">迈出成功路上的第一步</div>
           <nuxt-link to="/login/register" class="btn">注&nbsp;册</nuxt-link>
         </div>
         <div class="fr">
           <img src="../assets/img/guid/guid-01.png" alt="注册">
         </div>
       </div>
       <div class="new-guide-sec sec-bg2 clearfix">
         <div class="fr w1">
           <div class="new-guide-steps">
             <i>02</i>
             <em>第二步</em>
           </div>
           <div class="tit">申请操盘</div>
           <div class="des">进入股票操盘-立即申请</div>
           <nuxt-link to="/trade/dayTrade" class="btn">申请操盘</nuxt-link>
         </div>
         <div class="fl">
           <img src="../assets/img/guid/guid-02.png" alt="申请操盘">
         </div>
       </div>
       <div class="new-guide-sec sec-bg1 clearfix">
         <div class="fl w1">
           <div class="new-guide-steps">
             <i>03</i>
             <em>第三步</em>
           </div>
           <div class="tit">通过第三方充值账户</div>
           <div class="des">银行监管，资金安全有保障</div>
           <nuxt-link to="/login/register" class="btn">账户充值</nuxt-link>
         </div>
         <div class="fr">
           <img src="../assets/img/guid/guid-03.png" alt="账户充值">
         </div>
       </div>
       <div class="new-guide-sec new-guide-sec-p2 sec-bg2 clearfix">
         <div class="fr w1">
           <div class="new-guide-steps">
             <i>04</i>
             <em>第四步</em>
           </div>
           <div class="tit">通过交易股票去交易</div>
           <div class="des">进入个人中心-交易股票</div>
           <nuxt-link to="/login/register" class="btn">交易股票</nuxt-link>
         </div>
         <div class="fl">
           <img src="../assets/img/guid/guid-04.png" alt="交易股票">
         </div>
       </div>
       <div class="new-guide-sec new-guide-sec-p2 sec-bg1 clearfix">
         <div class="fl w1">
           <div class="new-guide-steps">
             <i>05</i>
             <em>第五步</em>
           </div>
           <div class="tit">立即完善资料</div>
           <div class="des">进入个人中心-完善资料</div>
           <nuxt-link to="/login/register" class="btn">绑定银行卡</nuxt-link>
         </div>
         <div class="fr">
           <img src="../assets/img/guid/guid-05.png" alt="绑定银行卡">
         </div>
       </div>
       <div class="new-guide-sec new-guide-sec-p2 sec-bg2 clearfix">
         <div class="fr w1">
           <div class="new-guide-steps" style="margin-top: 100px;">
             <i>06</i>
             <em>第六步</em>
           </div>
           <div class="tit">申请结算提现资金</div>
           <div class="des">申请结算-进入账户充值提现</div>
           <nuxt-link to="/login/register" class="btn">结算提现</nuxt-link>
         </div>
         <div class="fl">
           <img src="../assets/img/guid/guid-06.png" alt="结算提现">
         </div>
       </div>
       <div class="new-guide-end">
         <nuxt-link to="/trade/dayTrade"><img src="../assets/img/guid/guid-07.png"></nuxt-link>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
    export default {
        name: "guid"
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .new-guide {width: 1180px;margin: 0 auto;padding-top: 7px;font-family: simhei !important;text-align: left;
    .new-guide-sec {padding: 100px 130px;
      .w1 {width: 285px;
        .new-guide-steps {background: url(../assets/img/guid/btn-group.png) no-repeat;width: 133px;height: 87px;position: relative;margin: 0 auto;margin-top: 40px;}
        .tit {font-size: 18pt;line-height: 20pt;background: url(../assets/img/guid/guid-dot.png) left center no-repeat;padding-left: 10px;margin-top: 30px;}
        .des {margin-top: 15px;font-size: 13.5pt;padding-left: 10px;color: #7c7c7c;}
        i {font-size: 30pt;position: absolute;top: 8px;left: 8px;font-style: normal;}
        em {font-size: 18pt;position: absolute;top: 28px;right: 5px;color: #fff;}
      }
      .btn {background: url(../assets/img/guid/guid-btn.png) no-repeat;height: 46px;line-height: 46px;width: 244px;text-align: center;display: block;margin-top: 15px;font-size: 24pt;color: #fff;text-shadow: -1px -2px 0 #dc901f;letter-spacing: 2px;}
    }
    .sec-bg2 {background: #f5f5f5;}
  }
</style>
