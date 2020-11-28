<template >
    <div class="mobile_menu">
        <div class="back">
            <span @click="$router.back(-1)">&lt; 返回</span>
            菜单
        </div>
        <div class="menu_content">
             <Menu/>
        </div>
       
    </div>
</template>
<script>
export default {
    mounted(){
        if(window.innerWidth>800)
            this.$router.back(-1)
    }
}
</script>
<style scoped>
    .mobile_menu{
            width: 100%;
            height: 100%;
            overflow: hidden;
            
    }
    .back {
        z-index: 99;
        width: 100%;
        position: fixed;
        text-align: center;
        padding-left: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #e6e6e6;
        font-size: 18px;
        font-weight: 700;
        color: #7396a7;
    }
    .back span{
       position: absolute;
       left: 15px;
       font-size: 14px;
       color: #f78787;
    }
   
    .menu_content{
        background-color: #d7d7d7;
        margin-top: 40px;
        width: 100%;
        padding-left: 15px;
    }
</style>