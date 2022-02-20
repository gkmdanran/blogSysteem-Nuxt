<template>
  <div class="nav">
        <div class="nav_list">
            <div class="nav_item">
                <nuxt-link :to="{name: 'index'}" class="name">首页</nuxt-link>
            </div>
            <div class="nav_item">
                <nuxt-link :to="{name: 'tag'}" class="name">标签</nuxt-link>
            </div>
            <div class="nav_item">
                <nuxt-link :to="{name: 'picture'}" class="name">相册</nuxt-link>
            </div>
            <div class="nav_item">
                <nuxt-link :to="{name: 'reward'}" class="name">打赏</nuxt-link>
            </div>
            <div class="nav_item">
                <nuxt-link :to="{name: 'chat'}" class="name">留言板</nuxt-link>
            </div>
            <div class="nav_item mobilemenu">
                <nuxt-link :to="{name: 'mobilemenu'}" class="name">菜单</nuxt-link>
            </div>
        </div>
        <Toast ref="toast"/>
  </div>
  
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
  .nav{
    width: 100%;
    box-shadow:0 0px 10px 4px rgba(0,0,0,0.2);
    background: #ffffff;
  }
  .nav_list {
    min-height: 50px;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .nav_item{
      height: 40px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 0 3px 6px rgba(0,0,0,0.3);
      font-size: 16px;
  }
  .nav_item a,
  .nav_item span{
    color: #2daebf;
    cursor: pointer;
  }
  .nav_item a:hover,
  .nav_item span:hover{
    color: #ff6600;
    text-decoration: none;
    font-weight: 600;
  }
  .mobilemenu{
    display: none;
  }
  @media screen and (max-width: 800px) {
    .mobilemenu{
      display: flex;
      
    }
    
  }
</style>>

