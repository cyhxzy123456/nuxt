<template>
    <div class="protocol content_main">
        <div class="wrap">
          <div class="cont">
            <h3 class="tit" v-text="content.Title"></h3>
            <div v-html="content.Content"></div>
          </div>
        </div>
    </div>
</template>

<script>
  //import {getProtocol} from '../../plugins/global/api'
    export default {
      name: "protocol",
      data(){
        return{
          callindex:this.$route.params.callindex,
          benJin:this.$route.params.benJin,
          borrowMoney:this.$route.params.borrowMoney,
          days:this.$route.params.days,
          feemoney:this.$route.params.feemoney,
          warnMoney:this.$route.params.warnMoney,
          openLineMoney:this.$route.params.openLineMoney,
          type:this.$route.params.type,
          content:{}
        }
      },
      computed:{
      },
      methods:{
        showProtocol(){
          let result = getProtocol(this.callindex,this.benJin,this.borrowMoney,this.days,this.feemoney,this.warnMoney,this.openLineMoney,this.type)
          result.then((res)=>{
              this.content = res
          })
        }
      },
      created() {
        this.showProtocol()
      }
    }
</script>

<style scoped>
  h3.tit{    font-size: 24px;text-align: center;margin: 20px auto;padding-bottom: 20px;font-weight: 400;}
.cont{    margin: 50px auto 30px;border: 1px solid #ccc;padding: 20px 30px 40px;text-align: left;color: #333;line-height: 28px;font-size: 16px;}
</style>
