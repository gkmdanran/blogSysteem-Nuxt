<template>
  <div class="detail_pic">
    <div class="title">{{ title }}</div>
    <div class="pic_list">
      <div class="img" v-for="(item, index) in picDetailList" :key="index">
        <el-image
          style="width: 100%; height: 100%"
          :src="item.previewUrl"
          :preview-src-list="previewList"
          fit="cover"
        >
        </el-image>
      </div>
    </div>
    <el-pagination
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="15"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { request } from "~/plugins/axios";
export default {
  async middleware({ store, redirect, params }) {
    console.log(store.state.picPassword);
    let res = await request({
      url: `/photo/check`,
      method: "POST",
      data: {
        id: params.id,
        password: store.state.picPassword,
      },
    });
    if (!res || res.code != 200) redirect("/picture");
  },
  layout: "defaults",
  data() {
    return {
      previewList: [],
      picDetailList: [],
      title: "",
      pageNum: 1,
      total: 0,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.pageNum = val;
      request({
        url: `/photo/detail?id=${this.$route.params.id}&page=${this.pageNum}&size=15`,
      }).then((res) => {
        if (res.code == 200) {
          this.total = res.data.pictures.total;
          this.picDetailList = res.data.pictures.list;
          this.previewList = res.data.pictures.list.map((item) => item.url);
        }
      });
    },
  },
  async asyncData(context) {
    let res = await request({
      url: `/photo/detail?id=${context.params.id}&page=1&size=15`,
    });
    let picDetailList = [];
    let previewList = [];
    let title = "";
    let total = 0;
    if (res && res.code == 200) {
      title = res.data.title;
      total = res.data.pictures.total;
      picDetailList = res.data.pictures.list;
      previewList = res.data.pictures.list.map((item) => item.url);
    }
    return {
      previewList,
      picDetailList,
      title,
      total,
    };
  },
};
</script>

<style scoped>
.detail_pic {
  padding: 0 10px;
}
.title {
  padding-left: 10px;
  font-size: 24px;
  color: #2daebf;
}
.pic_list {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.img {
  border: 1px solid #f6f6f6;
  width: 150px;
  height: 150px;
  margin: 10px;
  background: #ffffff;
}
@media screen and (max-width: 500px) {
  .detail_pic {
    padding: 0 2vw;
  }
  .img {
    width: 44vw;
    height: 44vw;
    margin: 2vw;
  }
}
</style>
<style>
.detail_pic .el-icon-circle-close:before {
  color: red !important;
}
.detail_pic .el-image-viewer__wrapper {
  z-index: 999999999 !important;
}
.detail_pic .el-pagination {
  margin-top: 20px;
  margin-right: 30px;
  float: right;
  margin-bottom: 60px;
}
.detail_pic li.number,
.detail_pic .btn-prev,
.detail_pic .btn-next {
  background: transparent !important;
  padding: 0 !important;
  min-width: 28px !important;
}
</style>