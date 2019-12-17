<template>
  <div>
    <Head></Head>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>
<script type="text/ecmascript-6">
  //import {getAll} from '../plugins/api'
  import Footer from '../components/footer/footer.vue'
  import Head from '../components/header/header.vue'
  export default {
    components:{Footer,Head},
    /*methods:{
      getConfig(){
        let result = getAll()
        result.then((res)=>{
          this.$store.commit("getAllInfo",res)
        })
      },
    },
    mounted() {
      this.getConfig()
    }*/
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }


</style>

