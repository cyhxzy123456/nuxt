<template>
  <div class="appdown content_main">
   <div class="wrap">
     <div class="appdown-left fl">
       <img src="../assets/img/download/phone.png" alt="">
     </div>
     <div class="appdown-cont">
       <h2>[{{this.$store.getters.allInfo.webName}}App下载]</h2>
       <h3>随时随地操盘 让您的股票飞起来</h3>
       <ul>
         <li><i class="circle"></i><span>用户无须开立证券账户，只需一个手机号码，10秒钟注册登录，1分 钟资金到账，即可实盘买卖交易股票。</span></li>
         <li><i class="circle"></i><span>通过强大的技术支持，从证券公司交易系统分离独立子账户，用户可 以挂单查询真实交易，拒绝虚拟盘交易。</span></li>
         <li><i class="circle"></i><span>对客户交易资金的管理完全按照"专户专款专用"的标准模式进行运作 采用第三方支付平台，资金第三方托管，保障资金安全。</span></li>
       </ul>
       <div class="down_box">
         <div>
           <div class="btn_app"><img src="../assets/img/download/applelogo.png" alt="Alternate Text" width="25">iPhone客户端</div>
           <div class="btn_app"><img src="../assets/img/download/pc_area1_3.png" alt="Alternate Text" width="25">Android客户端</div>
         </div>
         <div>
            <img :src="this.$store.getters.allInfo.appByAndroid" width="200" class="appdown_img"><br>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
    export default {
      name: "download"
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .appdown{color:#fff;background:url("../assets/img/download/appdown_bg.png")no-repeat top center;background-size:cover;
    overflow: hidden;}
  .appdown .appdown-left{margin-top:85px;
    img{max-height: 635px}
  }
  .appdown-cont{float:right;width:50%;margin:0 auto;margin-top:52px;}
  .appdown-cont h2{font-size:24px;}
  .appdown-cont h3{font-size:20px;line-height:45px;}
  .appdown-cont li{padding-top:10px;}
  .appdown-cont li span{display:inline-block;width:495px;line-height: 32px;font-size: 16px}
  .appdown-cont .btn_app{border:1px solid #fff;line-height:60px;width:230px;text-align:center;border-radius:10px;}
  .appdown-cont .btn_app+.btn_app{margin-top:30px;}
  .appdown-cont .btn_app img{vertical-align:middle;padding-right:10px;}
  .appdown-cont .down_box{padding-top:30px;}
  .appdown-cont .down_box>div:first-child{display:inline-block;width:250px;vertical-align:top;margin:20px 0 0 35px;}
  .appdown-cont .down_box>div:last-child{display:inline-block;text-align:center;}
  .appdown-cont .down_box .appdown_img{display:block;padding-bottom:20px;width:200px;height:200px}

</style>
