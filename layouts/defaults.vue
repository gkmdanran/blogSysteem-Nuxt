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
        <div class="menus" ref="menu" :class="isMenuFixed">
          <Menu />
        </div>
      </div>
    </el-scrollbar>
    <el-backtop target=".el-scrollbar__wrap"  :visibility-height="500" class="back"></el-backtop>
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      isNavFixed:'',
      isMenuFixed:'',
      navHeight:'0px'
    }
  },
  mounted() {
    this.handleScroll()
  },
  methods: {
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

        if(position>=this.$refs.top.$el.offsetHeight+this.$refs.poe.$el.offsetHeight){
         this.isMenuFixed='menufix'
        }
        else{
          this.isMenuFixed=''
        }
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
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 10px;
  }
  .main{
    flex: 7.8;
  }
  .menus {
    flex: 2.2;
    margin-left: 3%;
    height: 88vh;
    overflow: hidden;
  }
  .shici{
    width: 100px;
    height: 100px;
    background-color: pink;
  }
  @media screen and (max-width: 900px) {
    .menus {
      flex: 2.5;
    }
  }
  @media screen and (max-width: 800px) {
    .menus {
      display: none;
    }
  }
  .back{
    z-index: 99999;
  }
</style>
