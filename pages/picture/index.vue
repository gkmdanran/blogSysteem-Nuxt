<template>
    <div class="picture">
        <div class="title">
            <svg t="1605329814430" class="pic_icon" viewBox="0 0 1251 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3061" width="25" height="25"><path d="M593.396622 1022.008889c-154.453333 0-308.906667-2.275556-463.303111 0.910222-94.264889 1.991111-131.584-39.196444-129.991111-137.671111C3.857067 651.946667 3.345067 418.360889 0.329956 184.888889-0.807822 89.827556 40.0384 55.580444 127.0784 56.092444c312.547556 1.820444 625.095111 2.275556 937.699556-0.227555 94.208-0.739556 131.470222 39.139556 129.877333 137.557333a25438.378667 25438.378667 0 0 0-0.341333 700.472889c1.137778 94.208-38.798222 130.503111-126.634667 128.910222-158.037333-2.844444-316.131556-0.796444-474.282667-0.796444z" fill="#5ED9CD" p-id="3062"></path><path d="M170.712178 852.081778c80.952889-87.04 139.377778-151.552 199.793778-214.072889 50.858667-52.679111 93.696-13.312 136.817777 15.246222 130.389333 86.300444 130.901333 86.698667 228.579556-28.273778 71.68-84.309333 141.312-170.154667 212.935111-254.407111 11.207111-13.198222 28.501333-30.606222 42.609778-30.264889 27.192889 0.682667 28.558222 29.866667 31.630222 49.948445 19.342222 126.862222 35.953778 254.293333 55.978667 381.155555 9.272889 58.936889-15.530667 81.009778-72.248889 80.896-266.808889-0.568889-533.560889-0.227556-836.096-0.227555z" fill="#FDFEFE" p-id="3063"></path><path d="M512.045511 396.629333C507.4944 471.608889 464.713956 514.389333 398.267733 510.748444c-62.691556-3.413333-117.020444-44.032-113.550222-115.768888 3.185778-65.934222 42.666667-113.664 115.484445-111.502223C471.085511 285.696 506.072178 328.590222 512.045511 396.629333z" fill="#F7FDFC" p-id="3064"></path></svg>我的相册
        </div>
        <div class="picture_list">
            <div class="photo_cmp" v-for="pic in pictureList" :key="pic._id" @click="beforeTodetail(pic)">
                <img class="cover" :src="pic.password!=''?require('../../static/img/clock.jpg'):pic.cover==''?require('../../static/img/timg.jpg'):pic.cover" :title="pic.createTime|dateFormat"/>
                <div class="pic_title">
                    {{pic.title}} <span v-if="pic.password!=''" :style="{'color':'#ccc'}">(已加密)</span>
                </div>
                <div class="count">{{pic.count}}</div>
                <div class="tag" :style="{'borderColor':pic.tagColor}" v-if="pic.tag!=''"><span class="tagtxt">{{pic.tag}}</span></div>
            </div>
        </div>
        <el-dialog
          title="相册密码"
          :visible.sync="dialogVisible"
          width="300px"
          :before-close="handleClose">
          <el-input type="password" v-model="password" @keyup.enter.native="checkPassword()"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="checkPassword()">确 定</el-button>
          </span>
        </el-dialog>
        <Toast ref="toast"/>
    </div>
</template>
<script>
import {request} from '~/plugins/axios'
export default {
    layout:'defaults',
    data(){
        return{
            dialogVisible:false,
            pictureList:[],
            password:'',
            sure:0,
            clickPic:{}
        }
    },
    methods:{
        handleClose(){
            this.dialogVisible=false
            this.password=''
        },
        beforeTodetail(pic){
            this.clickPic=pic
            if(this.clickPic.password=='')
                this.toDetailPic()
            else{
                this.dialogVisible=true
                this.password=''
            }
        },
        toDetailPic(){
            this.$router.push({ name: "picture-id",
                params:{
                    id:this.clickPic._id
                },
            })
        },
        async checkPassword(){
            if(this.password.trim()!=''){
                this.$store.commit('updatePicPassword',{password:this.password})
                let res=await request({
                    url:`/checkpicpassword`,
                    method:'POST',
                    data:{
                        id:this.clickPic._id,
                        password:this.password
                    }
                })
                if(res.code!=200){
                    this.dialogVisible=false
                    return this.$refs.toast.shows('密码错误,无法访问~')
                }
                this.dialogVisible=false
                this.toDetailPic()
            }
               
        }
    },
    async asyncData(context){
        let res=await request({
            url:`/pictures`
        })
        console.log(res)
        var pictureList=[]
        if(res.code==200){
            pictureList=res.data
        }
        console.log(pictureList)
        return {
            pictureList,
        }
    }
}
</script>
<style scoped>
    .picture {
        width: 100%;
        height: 100%;
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
    .pic_icon{
        vertical-align: middle;
        margin-right: 10px;
        margin-top: -3px;
    }
    .picture_list{
        padding-top: 15px;
        display: flex;
        flex-wrap: wrap;
    }
    .photo_cmp{
        cursor: pointer;
        margin: 15px;
        position: relative;
        width: 180px;
        padding: 6px;
        height: 210px;
        background-color: #fefff7;
        box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
    }
    .photo_cmp .cover{
        width: 168px;
        height: 168px;
        object-fit: cover;
        /* border-radius: 10px; */
    }
    .photo_cmp .pic_title{
        margin-top: 2px;
        padding: 0 1px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #2daebf;
        font-size: 14px;
        text-align: center;
    }
    .photo_cmp .count{
        height: 30px;
        line-height: 30px;
        text-align: right;
        font-size: 24px;
        
        color: pink;
        position: absolute;
        right: 15px;
        top: 140px;
    }
    .tag{
        position: absolute;
        top: 0;
        left: 0;
        width: 0px;
        height: 0px;
        border: 20px;
        border-top: 30px;
        /* border-color: #89b41e; */
        border-bottom-color: transparent!important;
        border-style: solid;
    }
    .tagtxt{
        width: 40px;
        position: absolute;
        left: 50%;
        transform:translateX(-50%) ;
        top: -25px;
        text-align: center;
        font-size: 14px;
        color: #ffffff;
    }
    @media screen and (max-width: 500px) {
        .pic_icon{
            width: 0.533333rem!important;
            height: 0.533333rem!important;
            margin-right: 0.213333rem;
        }
        .title{
            font-size: 0.64rem;
            min-height: 1.866667rem;
        }
        .photo_cmp{
            margin: 0.266667rem;
            width: 4rem;
            height: 4.666667rem;
            padding: 0.106667rem;
        }
        .photo_cmp .cover{
            width: 3.786667rem;
            height: 3.786667rem;
        }
        .photo_cmp .pic_title{
            margin-top: 1px;
            font-size: 0.32rem;
        }
        .photo_cmp .count{
            font-size: 0.533333rem;
            right: 0.266667rem;
            top: 2.933333rem;
        }
        .tag{
            border: 15px;
            border-top: 25px;
            border-bottom-color: transparent!important;
            border-style: solid;
        }
        .tagtxt{
            font-size: 0.32rem;
            top: -0.533333rem;
        }
    }
</style>>
