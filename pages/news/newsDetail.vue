<template>
  <div class="detail content_main">
    <div class="banner">
      <img src="../../assets/img/news/news-banner.png" alt="">
    </div>
    <div class="wrap">
     <div class="news-cont">
       <div class="detailLft">
         <div class="detailTit">
           <h3 v-text="noticeDetail.title"></h3>
          <!-- <p>作者：<span>{{noticeDetail.Author}}</span>时间：<span>{{noticeDetail.AddTime}}</span></p>-->
         </div>
         <!--<div class="tit-bar">
           <span>{{noticeDetail.timeAdd | dateString('YYYY年MM月DD日')}}</span>
           <span>所属栏目：<span>{{noticeDetail.categoryName}}</span></span>
           <span>来源：{{noticeDetail.author}}</span>
         </div>-->
         <div class="content" v-html="noticeDetail.content">
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HotList from '../../components/hot-list.vue'
  import axios from 'axios'
  import qs from 'qs'
  import {getNoticeDetail} from '../../plugins/newApi/news'
  export default {
    components:{HotList},
    data(){
      return{
        noticeDetail:{},
        id:this.$route.params.id,
        keyWords:'',
        description:'',
        title:'',
        linkList:[]
      }
    },
   /* head () {
      return {
        title: this.title,
        meta: [
          { hid: 'keyWords',name:'keyWords', content:this.keyWords},
          { hid: 'description',name:'description', content:this.description}
        ]
      }
    },*/
      //服务器端渲染获取详情页内容
   /* async asyncData ({ params }) {
      let { data } = await axios.get('http://47.100.235.158:8006api/ArticleShows/GetArticleById/'+params.id)
      return { noticeDetail: data.Data}
    },*/
    methods:{
      //获取详情
      getDetail(){
        let result = getNoticeDetail(this.id);
        result.then(res => {
          this.noticeDetail = res.Data
        })
      },
    seo(){
        this.title=this.noticeDetail.SeoTitle
        this.description=this.noticeDetail.SeoDescription
        this.keyWords=this.noticeDetail.SeoKeywords
    }
    },
  created() {
    this.getDetail()
    //this.seo()
  }

  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  p{line-height: 40px;}
.detail{overflow: hidden;
  .wrap{overflow: hidden;}
  .breadcrumb {padding-bottom: 20px;list-style: none;border-bottom:1px solid #ddd;margin-bottom:10px;}
  .breadcrumb>li {float: left;}
  .breadcrumb>li+li::before {padding-right: .5rem;padding-left: .5rem;color: #818a91;content: ">";}
  .breadcrumb>li a {color: #444;text-decoration: none;}
  .breadcrumb>li a:hover,.breadcrumb>li a:focus {color: #014c8c;text-decoration: underline;}
  .breadcrumb>.active {color: #818a91;} .breadcrumb::after,.article-body,.article-group__title,.article__row,.article__list {clear: both;display: table;content: "";}
.news-cont{overflow: hidden;padding:76px 0 60px;
  .detailLft{
    .detailTit{
      h3{overflow: visible;color: #333;text-align: center;font-weight: normal;font-size: 24px;font-family: "微软雅黑";padding-bottom: 70px;}
      p{text-align: right;font-size: 12px;color: #b4aeb0;}
    }
    .tit-bar {position: relative;padding: 15px 0 20px 0;border-bottom: solid 1px #ededed;color: #666;text-align: center;
      span {padding-right: 20px;height: 30px;color: #999;font-family: "微软雅黑";line-height: 30px;}
    }
    .content{margin: 20px 0px 30px 25px;}
  }
  .detailRight{    float: right;margin-bottom: 20px;padding: 1px;width: 250px;border: 1px solid #e6e6e6;background: #fff;
    .r-tit{height: 40px;line-height: 40px;background-color: #be0000;color: white;text-align: center;border-radius: 5px 5px 0 0;}
  }
}
}
</style>
