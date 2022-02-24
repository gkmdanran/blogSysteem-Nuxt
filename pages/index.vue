<template>
  <div class="container">
    <div class="article">
      <article-item
        v-for="article in articleList"
        :key="article.id"
        :article="article"
      >
      </article-item>
    </div>
    <el-pagination
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="10"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { request } from "~/plugins/axios";
export default {
  layout: "defaults",
  data() {
    return {
      articleList: [],
      total: 0,
      pageNum: 1,
    };
  },
  methods: {
    async handleCurrentChange(val) {
      this.pageNum = val;
      let res = await request({
        url: `/article/list/home?&page=${this.pageNum}&size=10`,
      });
      if (res && res.code == 200) this.articleList = res.data.list;
      this.total = res.data.total;
    },
  },
  async asyncData(context) {
    let articleList = [];
    var total = 0;
    let res = await request({
      url: `/article/list/home?&page=1&size=10`,
    });
    if (res && res.code == 200) {
      articleList = res.data.list;
      total = res.data.total;
    }
    return {
      articleList,
      total,
    };
  },
};
</script>

<style scoped>
.container {
  overflow: hidden;
}
</style>
<style >
.container .el-pagination {
  margin-top: -10px;
  margin-right: 30px;
  float: right;
  margin-bottom: 60px;
}
.container li.number,
.container .btn-prev,
.container .btn-next {
  background: transparent !important;
  padding: 0 !important;
  min-width: 28px !important;
}
</style>
