<template>
  <div  class="main_body" style="height:100vh">
    <div class="bgc"></div>
    <el-scrollbar style="height:100vh"  ref="scrollbar">
      <Header ref="top" :style="{marginBottom:navHeight}"/>
      <Nav ref="tabcontrol" :class="isNavFixed"/>
      <Poetry ref="poe"/>
      <div class="content">
        <div class="main">
          <Nuxt />
        </div>
        
        <div class="menus" ref="menu" :class="isMenuFixed" :style="{'display':showMenu==true?'block':'none'}">
          <Menu :menuscroll="menuscroll"/>
        </div>
      </div>
      <div class="footer">
        Copyright © 2020 淡然
      </div>
    </el-scrollbar>
    <el-backtop target=".el-scrollbar__wrap"  :visibility-height="500" class="back"></el-backtop>
    <div class="icon menu_icon" @click="clickMenu()">
      <i class="el-icon-menu"></i>
    </div>
    <!-- <div class="player">
      <Player ref="music"/>
    </div> -->
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      showMenu:true,
      isNavFixed:'',
      isMenuFixed:'',
      navHeight:'0px',
      menuscroll:false,
      livepath:'live2d-widget-model-tororo/assets/',
      jsonpath:'/live2dw/live2d-widget-model-tororo/assets/tororo.model.json'
    }
  },
  mounted() {
    this.handleScroll()
    if(window.innerWidth>=1500)
      this.drawEpsilon()
  },
  methods: {
    drawEpsilon(){
      window.L2Dwidget.init({
        pluginRootPath: '/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: this.livepath,
        tagMode: false,
        debug: false,
        model: { jsonPath:  this.jsonpath},
        display: { position: 'left',  "hOffset": 20,width: 150, height: 200 },
        mobile: { show: true },
        log: false
      })
    },
    clickMenu(){
      if(this.showMenu==true)
        this.showMenu=false
      else
        this.showMenu=true
    },
    handleScroll() {
      let scrollbarEl = this.$refs.scrollbar.wrap
      scrollbarEl.onscroll = () => {
        var position=scrollbarEl.scrollTop
        if(position>=this.$refs.top.$el.offsetHeight){
          this.isNavFixed='navfix'
          this.navHeight=this.$refs.tabcontrol.$el.offsetHeight+40+'px'
        }else{
          this.isNavFixed=''
          this.navHeight='0px'
        }

        if(position>=(this.$refs.top.$el.offsetHeight+this.$refs.poe.$el.offsetHeight+60)){
         this.isMenuFixed='menufix'
         this.menuscroll=true
        }
        else{
          this.isMenuFixed=''
          this.menuscroll=false
        }
      }
    }
  },
  watch:{
    $route(){
      if(this.$refs.scrollbar.wrap){
        this.$refs.scrollbar.wrap.scrollTop=0
      }
    }
  }
}
</script>
<style scoped>
  .navfix{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999;
  }
  .menufix{
    position: sticky;
    top: 60px;
  }
  .player{
    position: fixed;
    left: 2px;
    top: 2px;
    z-index: 999999999;
  }
  .bgc{
    background-image:url('../static/img/bg.jpg');
    content: "";
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    opacity: .2;
    filter: grayscale(100%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
    
  }
  .el-backtop{
    right: 2%!important;
    bottom: 90px!important;
    opacity: 0.6;
  }
  .icon{
    color: #409eff;
    background-color: #ffffff;
    opacity: 0.6;
    position: fixed;
    right: 2%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
  }
  .menu_icon{
    bottom: 40px;
  }
  
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
   
  }
  .main{
    flex: 7.8;
    min-height:calc(100vh - 115px);;
  }
  .menus {
    flex: 2.2;
    margin-left: 3%;
    height: calc(100vh - 115px);
    overflow: hidden;
    
  }
  .shici{
    width: 100px;
    height: 100px;
    /* background-color: pink; */
  }
  .footer{
    height: 55px;
    line-height: 55px;
    text-align: center;
    font-size: 12px;
    color: #abb3b7;
  }
  @media screen and (max-width: 900px) {
    .menus {
      flex: 2.5;
    }
  }
  @media screen and (max-width: 800px) {
    .menus {
      display: none!important;
    }
    .menu_icon{
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .el-backtop{
      right: 0.533333rem!important;
      bottom: 0.8rem!important;
    }
    
  }
  
  .back{
    z-index: 99999;
  }
</style>
<style >
.main_body .el-scrollbar__wrap{
    overflow-x: hidden!important;
    
}
</style>