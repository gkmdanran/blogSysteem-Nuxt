<template>
  <div class="detail_tag">
    <div class="tag_title">
      当前标签：<span :style="{ color: tagColor }">{{ tag.tagName }}</span>
    </div>
    <div class="article"></div>
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
      tag: {},
      pageNum: 1,
      tagColor: "",
    };
  },
  methods: {
    async handleCurrentChange(val) {
      this.pageNum = val;
      let res = await request({
        url: `/tagarticles?query=&tagquery=${this.$route.params.id}&pageNum=${this.pageNum}&pageSize=10`,
      });
      if (res && res.code == 200) this.articleList = res.data.list;
      this.total = res.data.total;
    },
  },
  async asyncData(context) {
    let res = await request({
      url: `/tagarticles?query=&tagquery=${context.params.id}&pageNum=1&pageSize=10`,
    });
    var articleList = [];
    var total = 0;
    var tag = {};
    if (res && res.code == 200) {
      articleList = res.data.list;
      total = res.data.total;
      tag = res.tag;
    } else {
      context.redirect("/tag");
    }
    var color = "";
    switch (tag.type) {
      case "success":
        color = "#67c23a";
        break;
      case "info":
        color = "#9c9399";
        break;
      case "warning":
        color = "#e7a23c";
        break;
      case "danger":
        color = "#f56c6c";
        break;
      default:
        color = "#409eff";
    }
    return {
      articleList,
      total,
      tag,
      tagColor: color,
    };
  },
};
</script>

<style scoped>
.tag_title {
  font-size: 25px;
  text-align: center;
  color: #7f8c93;

  margin-bottom: 20px;
}
.tag_title span {
  font-weight: 700;
}
</style>
<style >
.detail_tag .el-pagination {
  margin-top: -10px;
  margin-right: 30px;
  float: right;
  margin-bottom: 60px;
}
.detail_tag li.number,
.detail_tag .btn-prev,
.detail_tag .btn-next {
  background: transparent !important;
  padding: 0 !important;
  min-width: 28px !important;
}
</style>