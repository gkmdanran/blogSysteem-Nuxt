<template>
  <div class="tag">
    <div class="title">
        <svg t="1605272000277" class="tag_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6370" width="25" height="25"><path d="M817.404 589.25c0-18.864-6.288-35.032-19.762-49.404l-385.347-384.45c-13.474-13.473-32.337-25.15-54.793-35.031-23.355-9.88-44.014-14.372-62.877-14.372H70.063c-18.863 0-35.031 7.186-48.505 20.66C8.084 140.126 0.898 156.295 0.898 175.158V398.82c0 18.863 4.491 40.421 14.372 62.877 9.88 23.355 20.66 41.32 35.032 54.793L435.649 901.84c13.474 13.473 29.642 19.761 48.505 19.761 18.864 0 35.032-6.288 49.404-19.761l264.084-264.085c12.576-13.473 19.762-29.642 19.762-48.505zM221.867 327.86c-13.474 13.473-29.642 19.761-48.506 19.761-18.863 0-35.031-6.288-48.505-19.761-13.474-13.474-19.761-29.642-19.761-48.506 0-18.863 6.287-35.031 19.761-48.505 13.474-13.474 29.642-19.761 48.505-19.761 18.864 0 35.032 6.287 48.506 19.761 13.473 13.474 19.761 29.642 19.761 48.505 0.898 18.864-6.288 35.032-19.761 48.506z m782.372 211.986L618.89 155.396c-13.473-13.473-32.337-25.15-54.793-35.031-23.354-9.88-44.014-14.372-62.877-14.372H379.958c18.863 0 40.42 4.491 62.877 14.372 23.354 9.88 41.32 20.66 54.793 35.031l385.347 384.45c13.474 14.372 19.762 30.54 19.762 49.403s-6.288 35.032-19.762 48.505L630.568 891.06c10.78 10.779 20.66 18.863 28.744 24.252 8.084 5.39 18.863 7.186 31.439 7.186 18.863 0 35.031-6.287 49.403-19.761l264.085-264.983c13.473-13.473 19.761-29.642 19.761-48.505 0-18.863-6.288-35.031-19.761-49.403z m0 0" fill="#1296DB" p-id="6371"></path></svg>标签列表
    </div>
    <div class="tips">目前共有以下标签~</div>
    <div class="taglist">
        <el-tag 
        v-for="tag in this.tagList"
            @click="toTag(tag._id)"
            v-show="tag.blogsStrs!=''"
            :key="tag._id" 
            :type="tag.type"  
            disable-transitions>{{tag.tagName}} ({{tag.blogsStrs==''?0:tag.blogsStrs.split(',').length}})
        </el-tag>
    </div>
  </div>
</template>

<script>
import {request} from '~/plugins/axios'
export default {
    layout:'defaults',
    head(){
        var list=[]
        for (let x of this.tagList){
            list.push(x.tagName)
        }
        return {
            meta:[
                {hid: 'keywords',name:"keywords",content:list.join(',')},
            ]
        }
    },
    data(){
        return{
        tagList:[]
        }
    },
    methods:{
        toTag(id){
            this.$router.push({ name: "tag-id",
                params:{
                    id,
                }
            })
        }
    },
    async asyncData(){
        const res=await request({url:`/mytags`})
        var tagList=[]
        if(res.code==200)
            tagList=res.data
        return {
            tagList
        }
    }
  
  
}
</script>

<style scoped>
.tag{
    width: 100%;
    height: 100%;
    padding: 0 10px;
}
.tag_icon{
     vertical-align: middle;
  margin-right: 10px;
  margin-top: -3px;
}
 .tips{
     margin-top: 20px;
     font-size: 20px;
     color: #7f8c93;
     letter-spacing: 3px;
     text-align: center;
     padding: 0 10px;
 }
 .title{
    padding: 0 10px;
    padding-top: 10px;
    width: 100%;
    min-height: 100px;
    border-bottom: 1px dashed #9eabb3;
    text-align: center;
    font-size: 32px;
    color: #606975;
    text-shadow: 0 3px 6px rgba(0,0,0,0.3);
  }
  .taglist{
      margin: 20px auto;
      max-width: 600px;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
  }
  .el-tag{
      opacity: 0.6;
      cursor: pointer;
      margin: 5px 5px;
      min-width: 80px;
      text-align: center;
      border-radius: 10px;
  }
  @media screen and (max-width: 500px) {
      .tag_icon{
      width: 0.533333rem!important;
      height: 0.533333rem!important;
      margin-right: 0.213333rem;
    }
    .title{
      font-size: 0.64rem;
      min-height: 1.866667rem;
    }
    .tips{
        font-size: 0.426667rem;
        letter-spacing: 0.026667rem;
    }
  }
</style>
