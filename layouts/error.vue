<template>
  <div class="error" style="color: #797979">
    <div class="error_content">
      <h1 style="font-size: 150px; line-height: 150px; font-weight: bold">
        404
      </h1>
      <h2 style="margin-top: 20px; font-size: 30px">Not Found</h2>
      <p>The resource requested could not be found on this server!</p>
      <div class="button">
        <h2>
          <a href="/" title="返回" style="color: #444"> 返回首页 </a>
        </h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
.error {
  width: 100%;
  height: 100%;
  position: relative;
}
.error_content {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
}
</style>