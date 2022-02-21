<template>
  <div class="reward">
    <div class="title">
      <svg
        t="1605271108746"
        class="reward_icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4353"
        width="25"
        height="25"
      >
        <path
          d="M87.04 220.891429v710.948571C87.04 983.04 128 1024 180.662857 1024h662.674286c51.2 0 93.622857-40.96 93.622857-92.16V219.428571l-422.765714 137.508572L87.04 220.891429z m516.388571 236.982857c4.388571-5.851429 13.165714-11.702857 24.868572-16.091429 11.702857-4.388571 23.405714-1.462857 33.645714 10.24 11.702857 10.24 16.091429 21.942857 14.628572 33.645714-1.462857 11.702857-4.388571 21.942857-10.24 27.794286l-99.474286 121.417143h81.92c8.777143 0 17.554286 2.925714 24.868571 10.24 7.314286 7.314286 11.702857 14.628571 11.702857 26.331429s-4.388571 19.017143-11.702857 26.331428c-8.777143 7.314286-16.091429 11.702857-24.868571 11.702857h-92.16v27.794286h92.16c8.777143 0 17.554286 2.925714 24.868571 10.24 7.314286 7.314286 11.702857 14.628571 11.702857 27.794286 0 13.165714-2.925714 20.48-11.702857 27.794285-7.314286 7.314286-16.091429 11.702857-24.868571 11.702858h-92.16v38.034285c0 10.24-4.388571 20.48-11.702857 30.72-7.314286 10.24-19.017143 16.091429-35.108572 16.091429-16.091429 0-27.794286-4.388571-35.108571-14.628572s-11.702857-21.942857-11.702857-32.182857v-38.034285h-92.16c-8.777143 0-17.554286-4.388571-24.868572-11.702858s-11.702857-14.628571-11.702857-27.794285c0-11.702857 4.388571-19.017143 11.702857-26.331429s16.091429-11.702857 24.868572-11.702857h92.16v-27.794286h-92.16c-8.777143 0-17.554286-4.388571-24.868572-11.702857s-11.702857-14.628571-11.702857-27.794286c0-11.702857 4.388571-19.017143 11.702857-26.331428s16.091429-10.24 24.868572-10.24h84.845714l-98.011429-119.954286c-5.851429-7.314286-8.777143-16.091429-10.24-29.257143-1.462857-11.702857 4.388571-23.405714 14.628572-32.182857 11.702857-8.777143 21.942857-13.165714 33.645714-8.777143 11.702857 2.925714 20.48 8.777143 24.868572 14.628572l92.16 114.102857 90.697142-114.102857z"
          fill="#FF4949"
          p-id="4354"
        ></path>
        <path
          d="M841.874286 0H180.662857C128 0 87.04 39.497143 87.04 87.771429v76.068571L512.731429 292.571429 935.497143 162.377143V87.771429c0-48.274286-40.96-87.771429-93.622857-87.771429z"
          fill="#FF4949"
          p-id="4355"
        ></path></svg
      >打赏博主
    </div>
    <div class="sweat">请我吃糖吧~ ⁄(⁄⁄•⁄ω⁄•⁄⁄)⁄</div>
    <div class="tips">
      如果您喜欢这里，感觉对你有帮助，并且有多余的软妹币的话，不妨投喂一颗糖喔~
    </div>
    <img src="../../static/img/eat.gif" alt="" class="eat" />
    <div class="tips">(▰˘◡˘▰) 谢谢老板~</div>
    <div class="sweat">赞赏方式</div>
    <div class="reward_erweima">
      <div class="sq_erweima">
        <img src="../../static/img/zfb.png" alt="" />
        <div class="txt">支付宝扫码</div>
      </div>
      <div class="sq_erweima">
        <img src="../../static/img/wxsq.png" alt="" />
        <div class="txt">微信扫码</div>
      </div>
    </div>
    <div class="tips remark">
      赞赏的时候，记得备注"淡然-博客"哟~<br />并留下一句你觉得鼓励的话给我吧!ヾ(◍°∇°◍)ﾉﾞ
    </div>
  </div>
</template>

<script>
export default {
  layout: "defaults",
  data() {
    return {};
  },
};
</script>

<style scoped>
.reward {
  width: 100%;
  height: 100%;
  padding: 0 10px;
}
.reward_icon {
  vertical-align: middle;
  margin-right: 10px;
  margin-top: -3px;
}
.title {
  padding: 0 10px;
  padding-top: 10px;
  width: 100%;
  min-height: 100px;
  border-bottom: 1px dashed #9eabb3;
  text-align: center;
  font-size: 32px;
  color: #606975;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}
.sweat {
  margin: 20px 0;
  font-size: 16px;
  font-weight: 700;
  color: #7f8c93;
  text-align: center;
}
.tips {
  padding: 0 10px;
  text-align: center;
  color: #7f8c93;
  font-size: 16px;
  word-break: break-all;
}
.eat {
  display: block;
  width: 250px;
  margin: 30px auto;
}
.reward_erweima {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.sq_erweima {
  margin: 0 15px;
}
.sq_erweima img {
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
}
.sq_erweima .txt {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: #7f8c93;
}
.remark {
  padding: 0 10px;
  max-width: 460px;
  margin: 40px auto;
  word-break: break-all;
}
@media screen and (max-width: 500px) {
  .reward_icon {
    width: 0.533333rem !important;
    height: 0.533333rem !important;
    margin-right: 0.213333rem;
  }
  .title {
    font-size: 0.64rem;
    min-height: 1.866667rem;
  }
  .eat {
    width: 5.333333rem;
  }
  .tips {
    font-size: 0.373333rem;
  }
  .sweat {
    font-size: 0.373333rem;
  }
  .reward_erweima {
    margin-top: 0.8rem;
  }
  .sq_erweima img {
    width: 2.666667rem;
    height: 2.666667rem;
  }
  .sq_erweima .txt {
    font-size: 0.373333rem;
  }
}
</style>
