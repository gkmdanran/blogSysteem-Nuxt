<template>
  <div class="header" :style="{backgroundImage: 'url(' + skinUrl + ')'}">
    <div class="title">
      <h1 >
        <nuxt-link :to="{name: 'index'}" class="name">淡然</nuxt-link>
      </h1>
      <div class="tips">
        越是漫长，越要淡然。
      </div>
    </div>
  </div>
  
</template>

<script>
import {request} from '~/plugins/axios'
export default {
  data(){
    return{
      skinUrl:''
    }
  },
  async created(){
    let res=await request({url:`/getskin`})
    console.log(res)
    if(res.code==200)
      this.skinUrl=res.data
    else
      this.skinUrl=require("../static/img/bg.jpg")
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 40vh;
    min-height: 150px;
    
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-color: #fafafa;
  }
  .title {
    width: 200px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -40px;
    text-align: center;
    font-family: 'Playball',cursive;
  }
  .title .name{
    color: #fff;
    font-weight: 700;
    font-size: 48px;
  }
  .title .tips {
    font-size: 16px;
    color: #fff;
    margin-top: 5px;
    
  }
  .navList{
    width: 100%;
    min-height: 50px;
    background: pink;
  }
</style>>

