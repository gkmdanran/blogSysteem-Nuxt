<template>
  <div class="chat">
      <div class="welcome">欢迎来到我的留言板~</div>
      <div class="tips">如果您发现我的文章内容有误，或者此网站有bug，欢迎在留言区留下您宝贵的建议，方便的话留下您的联系方式哦~</div>
      <div class="commment_area">
        <el-form ref="form" :model="form" label-width="80px">
            <el-row>
                <el-col :span="8" :xs="24">
                    <el-form-item label="您的昵称" >
                        <el-input v-model="form.chatName" placeholder="一定要填哦" maxlength="10"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-form-item label="联系方式">
                        <el-select v-model="form.chatWay" placeholder="方便博主联系您" clearable>
                            <el-option label="微信" value="wechat"></el-option>
                            <el-option label="QQ号" value="qq"></el-option>
                            <el-option label="邮箱" value="email"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-form-item label="具体号码" >
                        <el-input v-model="form.chatNumber" placeholder="QQ/wechat/email"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-input
                type="textarea"
                :autosize="{ minRows: 6,maxRows:6}"
                placeholder="留下您的吐槽吧~"
                resize="none"
                v-model="form.chatContent"  maxlength="100" show-word-limit>
                </el-input>
            </el-row>
            <el-row>
            <span class="sendchat" @click="sendComment()">留言</span>
             </el-row>
        </el-form>
      </div>
      <Toast ref="toast"/>
      <div class="commnet_list">
           <div class="title">
               评论列表
               </div>
            <div class="comment_item" v-for="(chat,index) in chatList" :key="chat._id">
                <div class="commnet_info">
                    <span class="floor">#{{(pageNum-1)*10+index+1}}楼</span>
                    <span class="time">{{chat.createTime|dateFormat}}</span>
                    <span class="nickname">{{chat.chatName}}</span>
                </div>
                <div class="comment_content">{{chat.chatContent}}</div>
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
        chatList:[],
        total:0,
        pageNum:1,
        form:{
            chatName:'',
            chatWay:'',
            chatNumber:'',
            chatContent:''
        }
    }
  },
  methods:{
      async handleCurrentChange(val){
        this.pageNum=val
        let res=await request({
            url:`/chats?pageNum=${this.pageNum}&pageSize=10`
        })
        if(res.code==200){
            this.chatList=res.data.list
            this.total=res.data.total
            this.pageNum=res.data.pageNum
        }
      },
      async sendComment(){
            if(this.form.chatContent.trim()!=''){
                if(this.form.chatName.trim()=='')
                return  this.$refs.toast.shows('大侠留下您的姓名~')
                if(this.form.chatNumber.trim()!=''&&this.form.chatWay=='')
                return  this.$refs.toast.shows('QQ,微信还是邮箱呢~')
                if(this.form.chatNumber.length>30){
                    this.form.chatNumber=''
                    return  this.$refs.toast.shows('具体号码不合法哦~')
                }
                if(this.form.chatName.length>10){
                    this.form.chatName=''
                    localStorage.removeItem('danran_nickname')
                    return this.$refs.toast.shows('昵称不合法哦~')
                }
                if(this.form.chatContent.length>100)
                return  this.$refs.toast.shows('内容太多啦~')
                let res=await request({
                    url:`/liuyan`,
                    method:'POST',
                    data:this.form
                })
                if(res.code&&res.code!=200)
                    return this.$refs.toast.shows('评论失败,一会儿再试试~')
                localStorage.setItem('danran_nickname',this.form.chatName)
                let res2=await request({
                    url:`/chats?pageNum=1&pageSize=10`
                })
                if(res2.code==200){
                    this.chatList=res2.data.list
                    this.total=res2.data.total
                    this.pageNum=res2.data.pageNum
                }
                this.form.chatContent=''
                this.form.chatWay=''
                this.form.chatNumber=''
                this.$refs.toast.shows('评论成功,谢谢您~')
            }
      }
  },
   async asyncData(context){
     let res=await request({
      url:`/chats?pageNum=1&pageSize=10`
    })
   
    var chatList=[]
    var total=0
    var pageNum=1
    console.log(res)
    if(res.code==200){
        chatList=res.data.list
        total=res.data.total
        pageNum=res.data.pageNum
    }
    return {
        chatList,total,pageNum
    }
  },
  mounted(){
      this.form.chatName=localStorage.getItem('danran_nickname')||''
  }
  
}
</script>

<style scoped>
    .chat{
        padding: 0 10px;
    }
    .welcome{
        font-size: 20px;
        text-align: center;
        margin: 10px auto;
        margin-bottom: 20px;
        color: #7f8c93;
        font-weight: 700;
    }
    .tips{
        color: #7f8c93;
        max-width: 400px;
        font-size: 14px;
        text-align: center;
        margin: 10px auto;
        margin-bottom: 40px;
    }
    .commment_area{
        padding: 10px;
        width: 100%;
        border-radius: 10px;
       
        border: 1px dashed #2daebf;
    }
    .sendchat{
        float: right;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        color: #fff;
        background-color: #1bc3fb;
        font-weight: 400;
        cursor: pointer;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 15px;
    }
    .sendchat:hover{
        opacity: 0.8;
    }
    .commnet_list{
        margin-top: 30px;
    }
    .comment_item{
        margin-top: 20px;
        border-bottom: 1px dashed #cccccc;
    }
    .title{
        font-weight: 700;
        font-size: 18px;
        color: #7f8c93;
        margin-bottom: 30px;
    }
    .commnet_info{
        font-size: 13px;
        padding: 0 5px;
    }
    .commnet_info .floor{
        color: #777777;
    }
    .commnet_info .time{
        color: #a8a8a8;
        margin: 0 3px;
    }
    .commnet_info .nickname{
        color: #ff6600;
        font-size: 15px;
        font-weight: 700;
    }
    .comment_content{
        max-width: 600px;
        word-break: break-all;
        padding:  10px 25px;
        font-size: 14px;
        line-height: 20px;
        color: #7f8c93;
    }
</style>
<style >
    .chat .el-input__count{
        opacity: 0.6!important;
    }
    .chat .el-input__inner{
        opacity: 0.6!important;
    }
    .chat .el-textarea__inner{
        color: #7f8c93!important;
        opacity: 0.8;
        border: none!important;
    }
    
    .chat .el-pagination{
        margin-top: 20px;
        margin-right: 30px;
        float: right;
        margin-bottom: 60px;
    }
    .chat li.number,
    .chat .btn-prev,
    .chat .btn-next{
        background: transparent!important;
        padding: 0!important;
        min-width: 28px!important;
    }

</style>
