<template>
    <div class="center-right">
      <div class="center-tit">账户余额：<span v-text="moneyTotal">¥  2,464.45</span></div>
      <div class="recharge-wrap center-right-cont" v-show="this.$store.getters.config.validRecharge==0">
        <div class="recharge-nav">
          <ul class="tab_public clearfix">
            <li :class="{active:typeNow==item.rechargeFrom}"  v-for="(item,index) in rechargeType" :key="index" v-text="item.name" @click="changeType(item.rechargeFrom)"></li>
          </ul>
        </div>
        <!-- 银行转账 -->
        <div class="transfer_box ul bank " v-show="typeNow==3">
          <h3>第一步：请先通过手机银行、网上银行、银行柜台或ATM等向{{this.$store.getters.allInfo.webName}}转账</h3>
          <div class="bank-info-box clearfix" v-for="(item,index) in bankInfo" :key="index">
            <div class="fl img"><img  :src="item.accountImg"/></div>
            <div class="fl info"  v-html="item.cardJson"></div>
          </div>
          <h3>第二步：已确认转账后，向平台提交您的转账信息</h3>
        <div class="bank-info">
          <ul>
            <li>
              <span>请选择您转入的银行：</span>
              <select name="bank" id="bank" v-model="bankNo">
               <!-- <option value=null>请选择您转入的银行</option>-->
                <option  v-for="(item,index) in bankInfo" :key="index" :value="item">{{item.accountBranch+item.accountNo}}</option>
              </select>
            </li>
            <li>
              <span>转账金额：</span><input type="text" v-model="bankMoney" placeholder="请输入转账金额"><strong class="xing">*</strong>
            </li>
            <li>
              <span>转账信息：</span><input name="" id="" v-model="bankRemark" placeholder="银行卡后6位；具体转账时间；其他备注信息"/><strong>*</strong>
              <p class="color-red center">（参考格式：688533,2018-08-08 16:18:12）</p>
            </li>
          </ul>
        </div>
         <div class="bank-commit">
           <p class="recharge-tip color-red">温馨提示：为了方便核对，请填写您的转账银行卡后6位，并填写准确的转账时间。</p>
           <button class="auto btn" @click="bankRecharge" :disabled="bankAbled">我已完成转账，确认提交</button>
         </div>
          <AccountTips :tip="wx_remark"></AccountTips>
        </div>
        <!-- 微信转账 -->
        <div  v-show="typeNow==1">
          <div class="clearfix" data-title="微信" >
            <form >
              <div class="wx_step_2" >
                <h2 class="cz_h2">第一步：通过微信向{{this.$store.getters.allInfo.companyName}}转账（微信转账0手续费）</h2>
                <table class="cz_four" cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td width="40%">收款人微信账户</td>
                    <td v-text="wxInfo.accountName">{{this.$store.getters.allInfo.webName}}</td>
                  </tr>
                  <tr>
                    <th colspan="2">手机微信扫一扫，快速转账，<span style="color: #E34343">0手续费</span><br>
                      <img :src="wxInfo.accountImg" width="300">
                      <p class="recharge-tip color-red" style="padding:0 100px">重要提示：在微信转账时，务必在下方转账说明处备注好您在本平台的注册账号，以保障财务准确审核您的资金。</p>
                    </th>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="wx_step_1" >
                <h2 class="cz_h2">第二步：已确认转账后，向平台提交您的转账信息</h2>
                <table class="cz_two" cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <th>付款金额</th>
                    <td>
                      <input type="text" class="txt" v-model="wxMoney" placeholder="请输入付款金额">元<strong>*</strong><br>
                    </td>
                  </tr>
                  <tr>
                    <th >转账信息</th>
                    <td>
                      <input  type="text" v-model="wxRemark" placeholder="订单号后6位；具体转账时间；其他备注信息"><strong>*</strong></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <p class="recharge-tip color-red">温馨提示：为了方便核对，请填写您的转账订单号后6位，并填写准确的转账时间（参考格式：688533,2018-08-08 16:18:12）</p>
                      <br>
                      <a class="auto btn" @click="wxRecharge"  :disabled="wxAbled">我已完成转账，确认提交</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <AccountTips :tip="wxInfo.remark"></AccountTips>
          </div>
        </div>
        <!-- 支付宝转账 -->
        <div class="zfb-box ul " v-show="typeNow==2">
          <div class="clearfix">
            <form id="form5" method="post" onsubmit="return false;" class="ng-pristine ng-valid">
              <div class="zfb_step_2" >
                <h2 class="cz_h2">第一步：通过支付宝向{{this.$store.getters.allInfo.companyName}}转账（支付宝转账0手续费）</h2>
                <table class="cz_four" cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr>
                    <td class="td" width="40%">收款人支付宝账户</td>
                    <td v-text="zfbInfo.accountNo"></td>
                  </tr>
                  <tr>
                    <td class="td">账户名称</td>
                    <td v-text="zfbInfo.accountName"></td>
                  </tr>
                  <tr>
                    <th colspan="2">手机支付宝扫一扫，快速转账，<span style="color: #E34343">0手续费</span><br>
                      <img :src="zfbInfo.accountImg" width="300" alt="支付宝二维码">
                      <p class="recharge-tip color-red" style="padding:0 100px">重要提示：在支付宝转账时，务必在下方转账说明处备注好您在本平台的注册账号，以保障财务准确审核您的资金。</p>
                    </th>
                  </tr>
                  </tbody>
                </table>
                <h2 class="cz_h2">第二步：已确认转账后，向平台提交您的转账信息</h2>
                <table>
                  <tr>
                    <th>付款金额</th>
                    <td>
                      <input placeholder="请输入付款金额" type="text" v-model="zfbMoney">元<strong>*</strong><br>
                    </td>
                  </tr>
                  <tr>
                    <th class="td" >转账信息</th>
                    <td >
                      <input  type="text" v-model="zfbRemark" placeholder="订单号后6位；具体转账时间；其他备注信息"><strong>*</strong></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <p class="recharge-tip color-red">温馨提示：为了方便核对，请填写您的转账订单号后6位，并填写准确的转账时间（参考格式：688533,2018-08-08 16:18:12）</p>
                      <button class="auto btn" @click="zfbRecharge" :disabled="zfbAbled">我已完成转账，确认提交</button>
                    </td>
                  </tr>
                </table>
              </div>
            </form>
            <AccountTips :tip="zfbInfo.remark"></AccountTips>
          </div>
        </div>
      </div>
      <Close :name="name" :isOpen="this.$store.getters.config.validRecharge"></Close>
     <!-- <RealNamePop></RealNamePop>-->
    </div>
</template>
<script>
  import {CommitRecharge} from '../../plugins/personCenterApi/personCenter'//提交信息的接口
  import {GetRechargeType} from '../../plugins/personCenterApi/personCenter'//获取可用的充值方式
  import AccountTips from '../../components/personCenter/recharge/accountTips'
  import Tips from '../../components/personCenter/recharge/tips'
  import RealNamePop from '../../components/pop/realNamePop'
  import Close from '../../components/pop/close'
    export default {
      name: "recharge",
      components:{RealNamePop,AccountTips,Tips,Close},
      layout:'left',
      data(){
        return{
          name:'充值',
          rechargeType:[],
          typeNow:'',//支付宝转账:2,微信转账:1，3银行
          zfbMoney:'',
          zfbRemark:'',
          zfbStep1:true,
          zfbStep2:false,
          wxMoney:'',
          wxRemark:'',
          wxStep1:true,
          wxStep2:false,
          zfbInfo:{},
          wxInfo:{},
          moneyTotal:this.$store.getters.userMoney.userBalance,
          showRealTip:false,
          bankRemark:'',
          bankInfo:[],
          bankMoney:'',
          param:0,
          numList:[{value:1,txt:'手机银行'},{value:2,txt:'网上银行'},{value:3,txt:'支付宝'},{value:4,txt:'ATM'},{value:5,txt:'柜台转账'},{value:6,txt:'其他'}],
          bankNo:'',
          wx_remark:'',
          bankAbled:false,
          zfbAbled:false,
          wxAbled:false,
          rechargeId:''
        }
      },
      methods:{
        getRechargeType(){
          let that = this
          let array=[]
          let result=GetRechargeType()
          result.then((res)=>{
            res.Data.forEach((val)=>{
              if(val.rechargeFrom==1){
                that.wxInfo=val
              }
              if(val.rechargeFrom==2){
                that.zfbInfo=val
              }
              if(val.rechargeFrom==3&&val.isLock==0){
                this.bankInfo.push(val)
                this.wx_remark =this.bankInfo[0].remark
                this.bankNo =this.bankInfo[0]
              }
              if(val.deviceType==2||val.deviceType==1&&val.isLock==0){
                array.push(val)
                this.typeNow= array[0].rechargeFrom
              }
            })
            for(let i=0;i<=array.length;i++){
              if(array[i].rechargeFromName == '银行转账'){
                let item = this.rechargeType.find(val => {
                  return val.rechargeFromName == '银行转账';
                });
                if(item==undefined){
                  this.rechargeType.push(array[i])
                }else{
                  this.rechargeType=this.rechargeType
                }
              }else{
                this.rechargeType.push(array[i])
              }
            }
            if(this.rechargeType.length==0){
              this.typeNow=0
            }
          })
        },
        //充值方式点击
        changeType(type){
          this.typeNow= type
        },
        changeType(type){
          this.typeNow = type
        },
        //支付宝充值
        zfbRecharge(){
          if(this.zfbMoney == ''){
            this.$alert('请输入充值金额')
            return;
          }
          if(this.zfbMoney<this.zfbInfo.payMin){
            this.$alert('至少充值'+this.zfbInfo.payMin+'元')
            return;
          }
          if(this.zfbMoney>this.zfbInfo.payMax){
            this.$alert('最多充值'+this.zfbInfo.payMax+'元')
            return;
          }
          if(this.zfbRemark == ''){
            this.$alert('请输入转账信息')
            return;
          }
          this.zfbAbled=true
          let result=CommitRecharge(this.zfbMoney,this.zfbInfo.rechargeFrom,this.zfbRemark)
          result.then((res)=>{
            this.$alert('您的转账信息已成功提交，请等待审核').then(()=>{
              this.$router.push('/personCenter/user')
              this.zfbAbled=false
            })
          }).catch((err)=>{
            this.zfbAbled=false
          })
        },
        //微信充值
        wxRecharge(){
          if(this.wxMoney == ''){
            this.$alert('请输入充值金额')
            return;
          }
          if(this.wxMoney<this.wxInfo.payMin){
            this.$alert('至少充值'+this.wxInfo.payMin+'元')
            return;
          }
          if(this.wxMoney>this.wxInfo.payMax){
            this.$alert('最多充值'+this.wxInfo.payMax+'元')
            return;
          }
          if(this.wxRemark == ''){
            this.$alert('请输入转账信息')
            return;
          }
          this.wxAbled=true
          let result=CommitRecharge(this.wxMoney,this.wxInfo.rechargeFrom,this.wxRemark)
          result.then((res)=>{
            this.$alert('您的转账信息已成功提交，请等待审核').then(()=>{
              this.$router.push('/personCenter/user')
              this.wxAbled=false
            })
          }).catch((err)=>{
            this.wxAbled=false
          })
        },
        //银行转账
        bankRecharge(){
          if(this.bankMoney==''){
            this.$alert('请输入充值金额')
            return;
          }
          if(this.bankNo==null){
            this.$alert('请选择转账银行')
            return;
          }
          if(this.bankRemark == ''){
            this.$alert('请输入转账信息')
            return;
          }
          let mark='转入银行：'+this.bankNo.accountBranch+this.bankNo.accountNo+';转账信息：'+this.bankRemark
          let result=CommitRecharge(this.bankMoney,3,mark,this.bankNo.id)
          this.bankAbled=true
          result.then((res)=>{
            this.$alert('您的转账信息已成功提交，请等待审核').then(()=>{
              this.$router.push('/personCenter/user')
              this.bankAbled=false
            })
          }).catch((err)=>{
            this.bankAbled=false
          })
        },
      },
      created() {
        this.getRechargeType()
      }
    }
</script>
<style  rel="stylesheet/less" lang="less" scoped>
  strong {color: #FF3F13;font-size: 16px;font-weight: 700;padding-left:5px;line-height: 45px}
  .recharge-wrap {background-color: #fff;
    .recharge-nav {position: relative;margin:28px 0;
      .tab_public {font-size: 0;clear: both;
        li {border-radius: 5px;cursor: pointer;margin-left: 12px;float: left;font-size: 16px;width: 150px;color: #333;text-align: center;line-height: 40px;border: 1px solid #d2d2d2;background-color: #fff;}
        li.active{    color: #fff;background-color: #9c221f;}
      }
    }
    .cz_h2 {float: left;width: 100%;height: 70px;line-height: 70px;color: #333;font-size: 16px;}
    table{float: left;border: 1px solid #EEE;margin-bottom: 20px;
      th {    border: 1px solid #EEE;width: 141px;padding-right: 35px;text-align: right;color: #333;font-size: 14px;}
      td {text-align: left;border: 1px solid #EEE;padding: 10px 20px;color: #333;font-size: 14px;vertical-align: middle;
        input{width: 350px;height: 45px;line-height: 45px;border-radius: 4px;padding-left: 10px;}
        input[type=button]{width:100px}

        i {color: #FF3F13;font-size: 12px;}
      }
    }
    .cz_four {float: left;width: 100%;border: 1px solid #EEE;
      td {line-height: 50px;border: 1px dotted #CECBBC;height: 50px;font-size: 14px;color: #333;font-weight: 700;border-left: 0;
      span{color: #E34343;font-size: 18px;}
        input.commit{border:0;display: block;margin: 10px auto;width: 308px;height: 44px;background: #9c221f;font-size: 30px;}
      }
      th {text-align: center;padding: 20px 0;color: #333;font-size: 14px;line-height: 35px;font-weight: 400;vertical-align: top;}
    }
  }
.bank{overflow: hidden;
  .img{border:1px solid #ddd;margin-right: 30px;padding:22px;
    img{height:40px;width:130px;}
  }
  .info{line-height: 30px}
  h3{font-size: 20px;color:#333;line-height: 80px}
  .type{display: inline-block;margin-right: 40px}
  .bank-info{margin-top:24px;
    li{margin-bottom: 15px;overflow: hidden;
      span{float:left;width:195px;text-align: right;line-height: 40px}
    }
    input,select,textarea{float:left;line-height: 40px;height:40px;border:1px solid #ddd;border-radius: 5px;padding:0 20px;width:425px;}
  }
  .bank-commit{margin-bottom: 30px}
}
</style>
