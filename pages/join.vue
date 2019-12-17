<template>
    <div class="join content_main">
      <div class="join-banner"></div>
      <div class="join-sec join-sec1">
        <div class="wrap">
          <div class="join-title">
            <h3>01</h3>
            <p>为什么选择{{this.$store.getters.allInfo.webName}}</p>
          </div>
          <div class="inner">
            <div class="txt">
              <h3>国内最权威的股票操盘平台</h3>
              <p>
                {{this.$store.getters.allInfo.webName}}提供专业的股票操盘服务，同时也是国内专业的操盘
                加盟提供商。企业在传统行业深耕多年，拥有一支专业的风控
                团队和操盘手团队，可以随时为您服务，现诚邀全国加盟代理，
                享受高额利润分成，有志加盟股票操盘行业者，欢迎详询合作！
              </p>
              <h3 style="padding-top: 20px">{{this.$store.getters.allInfo.webName}}加盟方式</h3>
              <p>
                以合作伙伴的方式加入{{this.$store.getters.allInfo.webName}}，{{this.$store.getters.allInfo.webName}}成为您强大的后盾，
                为您提供全方位的资金支持，技术支持，风控管理，以及客户
                的日常维护。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="join-sec join-sec3 clearfix">
        <div class="wrap">
          <div class="join-title">
            <h3>02</h3>
            <p>{{this.$store.getters.allInfo.webName}}十大优势</p>
          </div>
          <div class="inner">
            <img src="../assets/img/join/join2.png" alt="Alternate Text">
            <div class="txt fr">
              <p>1、公司实力雄厚，利率低</p>
              <p>2、高杠杆倍数，10倍杠杆，单票100%</p>
              <p>3、配资市场巨大；发展前景一片蓝海</p>
              <p>4、期限灵活，可按天、周、月随心配，还有免息操盘</p>
              <p>5、全行业最大最安全最稳定最快捷，正规操盘平台</p>
              <p>6、独立的代理商后台，管理客户一目了然；</p>
              <p>7、独立的代理商网站，公司名自主设置；</p>
              <p>8、0技术0经验0加盟费，总部全程一站式全程服务；</p>
              <p>9、强大的推广团队，技术团队，风控团队支持；</p>
              <p>10、丰厚佣金返还。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="join-sec join-sec5">
        <div class="wrap">
          <div class="join-title">
            <h3>03</h3>
            <p>加盟条件</p>
          </div>
          <div class="join-term clearfix">
            <ul>
              <li class="single">
                <div class="join-box">
                  <h4>个人加盟条件</h4>
                  <p>诚信守信，无不良记录等。</p>
                  <p>拥有丰富的人脉资源。</p>
                  <p>负责名下客户的股票操盘业务与维护工作。</p>
                  <p>并签订区域独立代理协议进行利润分成模式。</p>
                </div>
              </li>
              <li class="company fr">
                <div class="join-box">
                  <h4>公司加盟条件</h4>
                  <p><i>1、</i>具备与股票配资行业相关的市场资源、业务经验知识、办公条件管理团队和相对固定的经营场所。</p>
                  <p><i>2、</i>负责该地区的股票配资业务与维护工作。并签订区域独立代理协议进行利润分成模式。</p>
                  <p><i>3、</i>公司提供前面的业务培训和辅导，协助尽心市场宣传和形象宣传。</p>
                  <p><i>4、</i>在该地区拥有丰富的人脉资源。具备一定经济实力，依法诚信经营的自然法人和自然人。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="process">
        <div class="wrap">
          <div class="join-title">
            <h3>04</h3>
            <p>加盟流程</p>
          </div>
          <div class="inner">
            <ul>
              <li><a href="#">填写合作申请</a></li>
              <li class="line"></li>
              <li><a href="#">资格审核</a></li>
              <li class="line"></li>
              <li><a href="#">签订协议</a></li>
              <li class="line"></li>
              <li><a href="#">开发客户</a></li>
              <li class="line"></li>
              <li><a href="#">获得高额佣金</a></li>

            </ul>
          </div>
        </div>
      </div>
      <div class="welcome">
        <div class="join-title">
          <h3>05</h3>
          <p>欢迎加入{{this.$store.getters.allInfo.webName}}</p>
        </div>
        <div class="inner">
          <form id="proposal_form">
            <div class="wrap">
              <div class="fl">
                <ul>
                 <li>
                  <input type="text" name="username" placeholder="姓名："></li>
                  <li>
                    <input type="text" name="phone" placeholder="电话："></li>
                  <li>
                    <input type="text" style="width:calc(100% - 120px)" name="vcode" placeholder="验证码："><img style="float: right; height: 33px; line-height: 33px; margin-top: -34px;" src="/tools/verify_code_sub.aspx" onclick="ToggleCode(this, '/tools/verify_code_sub.aspx');return false;"></li>
                  <li class="beizhu">
                    <textarea placeholder="备注：" name="content"></textarea></li>
                  <li class="mit">
                    <button type="button" onclick="proposalSubmit()">提交</button>
                  </li>
                </ul>
              </div>
              <div class="fr txt">
                <p>{{this.$store.getters.allInfo.companyName}}</p>
                <p>商务合作QQ：{{this.$store.getters.allInfo.qq}}</p>
                <p>{{this.$store.getters.allInfo.tel}}</p>
                <p>{{this.$store.getters.allInfo.qq}}@qq.com</p>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "join"
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .join{
    .join-banner {background: url('../assets/img/join/join-banner.png') center no-repeat;height: 394px;width: 100%;}
    .join-title {text-align: center;padding: 100px 0 138px;height: 78px;
      h3 {font-size: 101px;color: #ddd;height: 78px;line-height: 78px;font-weight: bold;}
      p {font-size: 24px;color: #333;margin-top: -50px;font-weight: bold;}
    }
    .join-sec1{
      .inner {background: url('../assets/img/join/join1.png') no-repeat;color: #333;padding: 60px 0 80px 22px;background-size: 100% 100%;
        .txt {width: 504px;}
        h3 {font-size: 24px;line-height: 50px;text-align: center;}
        p {font-size: 18px;line-height: 28px;}
      }
    }
    .join-sec3{
      .inner {margin-top: 36px;
      img{width:528px;}
       p {font-size: 20px;line-height: 44px;color: #666;}
      }
    }
  .join-sec5{
    li {width: 580px;float: left;border: 1px solid #d4d4d4;box-shadow: 0 1px 1px 1px rgba(0,0,0,0.2);
      .join-box {height:238px;text-align: left;padding-left: 250px;background: url(../assets/img/join/join-single.png) 43px center no-repeat;
        h4 {font-size: 24px;color: #333;padding: 10px 0 10px;}
        p {font-size: 16px;line-height: 26px;}
      }
    }
    li.company{float:right;padding:0 40px;
      .join-box{padding:0;background:none;
      h4{text-align: center}
      }
    }
  }
    .process {
      .inner {padding: 0 80px;overflow: hidden;}
      li {float: left;width: 90px;padding-top: 106px;text-align: center;}
      li.line {float: left;width: 140px;height: 10px;background: url(../assets/img/join/line-pro.png) center no-repeat;padding: 0 50px;margin-top: 40px;}
      li:nth-child(1) {background: url(../assets/img/join/proce1.png) center top no-repeat;}
      li:nth-child(3) {background: url(../assets/img/join/proce2.png) center top no-repeat;}
      li:nth-child(5) {background: url(../assets/img/join/proce3.png) center top no-repeat;}
      li:nth-child(7) {background: url(../assets/img/join/proce4.png) center top no-repeat;}
      li:nth-child(9) {background: url(../assets/img/join/proce5.png) center top no-repeat;}
    }
    .welcome{
      .inner {background: url(../assets/img/join/welcome-bg.png) center no-repeat;padding: 34px 0 40px;
        .wrap {overflow: hidden;padding: 0 270px;
          p {font-size: 15px;color: #eee;height: 30px;line-height: 30px;margin-bottom: 15px;padding-left: 45px;}
          p:nth-child(1) {background: url(../assets/img/join/ico-contact1.png) no-repeat left center;}
          p:nth-child(2) {background: url(../assets/img/join/ico-contact2.png) no-repeat left center;}
          p:nth-child(3) {background: url(../assets/img/join/ico-contact3.png) no-repeat left center;}
          p:nth-child(4) {background: url(../assets/img/join/ico-contact4.png) no-repeat left center;}
        }
        li {width: 290px;height: 32px;border: 1px solid #F7B521;margin-bottom: 10px;}
        li.beizhu {height: 76px;}
        li.mit button {height: 32px;background: #F7B521;color: #fff;text-align: center;padding: 0;}
        .txt {padding-top: 65px;}
      }
      input,button,textarea{    width: 100%;height: 100%;background: none;border: 0;color: #eee;padding-left: 10px;}
    }

  }


</style>
