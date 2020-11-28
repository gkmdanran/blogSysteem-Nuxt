<template>
  <div class="detail_pic">
      <div class="title">{{title}}</div>
      <div class="pic_list">
          <div class="img" v-for="(pic) in picDetailList" :key="pic">
            <el-image
            style="width: 100%; height: 100%"
            :src="pic"
            :preview-src-list="picDetailList"
            fit="cover"
            
            >
            </el-image>
        </div>
      </div>
  </div>
</template>

<script>
import {request} from '~/plugins/axios'
export default {
    async middleware({store,redirect,params}){
        console.log(store.state.picPassword)
        let res=await request({
            url:`/checkpicpassword`,
            method:'POST',
            data:{
                id:params.id,
                password:store.state.picPassword
            }
        })
        if(res.code!=200)
            redirect("/picture")
    },
    layout:'defaults',
    data(){
        return{
            picDetailList:[],
            title:''
        }
    },
    async asyncData(context){
        console.log(context.params.id)
        let res=await request({
          url:`/detailpicture?id=${context.params.id}`,
        })
        var picDetailList=[]
        var title=''
        if(res.code==200){
            title=res.data.title
            var list=res.data.picDetailList.split(',')
            for(let x of list)
                if(x!='')
                    picDetailList.push('http://localhost:3000/uploads/'+x)
        }
        console.log(picDetailList)
        return {
            picDetailList,
            title
        }    
        
    }
  
  
}
</script>

<style scoped>
    .detail_pic{
        padding: 0 10px;
    }
    .title{
        padding-left:10px;
        font-size: 24px;
        color: #2daebf;
    }
    .pic_list{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        
    }
    .img{
        border: 1px solid #f6f6f6;
        width: 150px;
        height: 150px;
        margin: 10px;
        background: #ffffff;
    }
    @media screen and (max-width: 500px) {
        .detail_pic{
            padding: 0 2vw;
        }
        .img{
            width: 44vw;
            height: 44vw;
            margin: 2vw;
        }
    }
</style>
<style>
    .detail_pic .el-icon-circle-close:before {
        color: red!important;
        
    }
    .detail_pic .el-image-viewer__wrapper{
         z-index: 999999999!important;
    }
</style>