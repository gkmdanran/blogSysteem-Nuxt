<template>
  <div class="container">
    
      <div class="article">
        <div class="article_item" v-for="(article,index) in articleList" :key="article._id+index" @click="toDetail(article._id)">
          <div class="article_title">
            <span><span v-if="article.isTop==1" style="color:#ff6600">[置顶] </span>{{article.title}}</span>
          </div>
          <div class="article_abstract">
            摘要：{{article.contextText}} 
          </div>
          <div class="article_other">
            posted @{{article.createTime|dateFormat}} 淡然 点赞数 ({{article.star>=10000?article.star/10000+'w':article.star>=1000?article.star/1000+'k':article.star}}) <span class="read">阅读全文</span>
          </div>
          <div class="article_tags">
            <el-tag v-for="tag in article.tagList" 
              :key="tag._id" 
              :type="tag.type"  
              size="mini"
              effect="plain"
              disable-transitions>{{tag.tagName}}
            </el-tag>
          </div>
        </div>

      </div>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-size="10"
        :total="total"
        >
      </el-pagination>

  </div>
</template>

<script>
import {request} from '~/plugins/axios'
export default {
  layout:'defaults',
  data(){
    return{
      articleList:[],
      total:0,
      pageNum:1
    }
  },
  methods:{
    toDetail(id){
      this.$router.push({ name: "article-id",
					params:{
  						id,
					}
			})
    },
    async handleCurrentChange(val){
      this.pageNum=val
      let res=await request({
      url:`/articles?query=&tagquery=&pageNum=${this.pageNum}&pageSize=10`
      })
      if(res&&res.code==200)
        this.articleList=res.data.list
        this.total=res.data.total
    }
  },
  async asyncData(context){
    let res=await request({
      url:`/articles?query=&tagquery=&pageNum=1&pageSize=10`
    })
    if(res&&res.code==200){
      var articleList=res.data.list
      var total=res.data.total
    }
    
    // console.log(articleList)
    return {
      articleList,
      total
    }
  }
}
</script>

<style scoped>
  .container{
    overflow: hidden;
   
  }
  .el-tag{
    margin-right: 5px;
    opacity: 0.6;
  }
  .article_item {
    cursor: default;
    padding:0 20px;
    margin-bottom: 30px;
  }
  .article_title{
    min-height: 60px;
    border-bottom: 1px dashed #95a5a6;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #7396a7;
    word-break: break-all;
  }
  .article_title span {
    cursor: pointer;
  }
  .article_title span:hover{
    color: #ff6600;
  }
  .article_abstract{
    margin: 5px 0;
    padding: 0 10px;
    font-size: 14px;
    line-height: 25px;
    color: #7f8c93;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .article_tags{
    margin-top: 5px;
  }
  .article_other{
    font-size: 13px;
    color: #9eabb3;
   
  }
  .read{
    color: #2daebf;
    font-size: 14px;
    margin-left: 2px;
    cursor: pointer;
    white-space: nowrap;
  }
  .read:hover{
    color: #ff6600;
  }
 
  @media screen and (max-width: 500px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
      .el-tag{
        margin-right: 0.133333rem;
      }
      .article_item {
        margin-bottom: 0.533333rem;
      }
      .article_title {
          font-size: 0.48rem;
          min-height: 1.066667rem;
      }         
       .article_abstract{
         font-size: 0.346667rem;
         margin: 0.133333rem 0;
         padding:  0 0.133333rem;
         line-height: 20px;
        
      } 
      .article_tags{
        margin-top: 0;
        
      }
      .article_other{
        font-size: 0.32rem;
        
      }
      .read{
        font-size: 0.346667rem;
      }
  }
</style>
<style >
  .container .el-pagination{
    margin-top: -10px;
    margin-right: 30px;
    float: right;
    margin-bottom: 60px;
  }
 .container li.number,
 .container .btn-prev,
 .container .btn-next{
    background: transparent!important;
    padding: 0!important;
    min-width: 28px!important;
  }
</style>
