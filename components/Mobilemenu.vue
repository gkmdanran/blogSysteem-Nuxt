<template >
  <div class="mobile_menu">
    <div class="back">
      <span @click="$emit('hidemenu', false)">&lt; 返回</span>
      菜单
    </div>
    <div class="menu_content">
      <Menu />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mobile_menu {
  width: 100%;
  height: 100%;
  z-index: 99999999999999999999999;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}
.back {
  z-index: 99;
  width: 100%;
  position: fixed;
  text-align: center;
  padding-left: 15px;
  height: 1.066667rem;
  line-height: 1.066667rem;
  background-color: #e6e6e6;
  font-size: 0.48rem;
  font-weight: 700;
  color: #7396a7;
}
.back span {
  position: absolute;
  left: 15px;
  font-size: 0.373333rem;
  color: #ff6600;
}

.menu_content {
  margin-top: 1.066667rem;
  width: 100%;
  height: calc(100% - 1.066667rem);
  overflow: auto;
  padding-left: 15px;
}
</style>