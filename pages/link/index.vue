<template>
  <div class="link">
    <div class="title">
      <svg
        t="1605272000277"
        class="tag_icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6370"
        width="25"
        height="25"
      >
        <path
          d="M817.404 589.25c0-18.864-6.288-35.032-19.762-49.404l-385.347-384.45c-13.474-13.473-32.337-25.15-54.793-35.031-23.355-9.88-44.014-14.372-62.877-14.372H70.063c-18.863 0-35.031 7.186-48.505 20.66C8.084 140.126 0.898 156.295 0.898 175.158V398.82c0 18.863 4.491 40.421 14.372 62.877 9.88 23.355 20.66 41.32 35.032 54.793L435.649 901.84c13.474 13.473 29.642 19.761 48.505 19.761 18.864 0 35.032-6.288 49.404-19.761l264.084-264.085c12.576-13.473 19.762-29.642 19.762-48.505zM221.867 327.86c-13.474 13.473-29.642 19.761-48.506 19.761-18.863 0-35.031-6.288-48.505-19.761-13.474-13.474-19.761-29.642-19.761-48.506 0-18.863 6.287-35.031 19.761-48.505 13.474-13.474 29.642-19.761 48.505-19.761 18.864 0 35.032 6.287 48.506 19.761 13.473 13.474 19.761 29.642 19.761 48.505 0.898 18.864-6.288 35.032-19.761 48.506z m782.372 211.986L618.89 155.396c-13.473-13.473-32.337-25.15-54.793-35.031-23.354-9.88-44.014-14.372-62.877-14.372H379.958c18.863 0 40.42 4.491 62.877 14.372 23.354 9.88 41.32 20.66 54.793 35.031l385.347 384.45c13.474 14.372 19.762 30.54 19.762 49.403s-6.288 35.032-19.762 48.505L630.568 891.06c10.78 10.779 20.66 18.863 28.744 24.252 8.084 5.39 18.863 7.186 31.439 7.186 18.863 0 35.031-6.287 49.403-19.761l264.085-264.983c13.473-13.473 19.761-29.642 19.761-48.505 0-18.863-6.288-35.031-19.761-49.403z m0 0"
          fill="#1296DB"
          p-id="6371"
        ></path></svg
      >友链列表
    </div>
    <div class="link-list">
      <div
        class="link-card"
        v-for="(link, index) in linkList"
        :key="index"
        @click="toLink(link.href)"
      >
        <div class="link-title">
          {{ link.title }}
        </div>
        <div class="link-desc">
          {{ link.description }}
        </div>
        <div class="btns">
          <el-button
            type="text"
            size="mini"
            @click.native.stop="openNewPage(link.href)"
            >新页面打开</el-button
          >
        </div>
      </div>
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
      linkList: [],
      total: 0,
      pageNum: 1,
    };
  },
  methods: {
    toLink(url) {
      location.href = url;
    },
    openNewPage(url) {
      window.open(url);
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getLinkList();
    },
    getLinkList() {
      request({ url: `/link/list?page=${this.pageNum}&size=10` }).then(
        (res) => {
          if (res.code == 200) {
            this.linkList = res.data.list;
            this.total = res.data.total;
          }
        }
      );
    },
  },
  mounted() {
    this.getLinkList();
  },
  async asyncData() {
    const res = await request({ url: `/link/list?page=1&size=10` });
    let linkList = [];
    let total = 0;
    if (res && res.code == 200) {
      linkList = res.data.list;
      total = res.data.total;
    }
    return {
      linkList,
      total,
    };
  },
};
</script>

<style scoped>
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
.link-list {
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
}
.link-card {
  width: 400px;
  height: 140px;
  box-shadow: 0px 0px 12px 2px rgba(67, 149, 213, 0.5);
  margin: 10px 15px;
  background: #f7f7f7;
  opacity: 0.8;
  border-radius: 10px;
  padding: 0 15px;
  cursor: pointer;
}
.link-title {
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 2px dashed #d4d4d4;
  line-height: 48px;
  font-size: 16px;
  padding: 0 5px;
  color: #7d227c;
  font-weight: 700;
}
.link-desc {
  height: 60px;
  padding: 10px 5px 0px;
  line-height: 25px;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #323941;
}
.btns {
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
@media screen and (max-width: 500px) {
  .link-card {
    width: calc(100% - 30px);
  }
}
</style>
<style >
.link .el-pagination {
  margin-top: 20px;
  margin-right: 30px;
  float: right;
  margin-bottom: 60px;
}
.link li.number,
.link .btn-prev,
.link .btn-next {
  background: transparent !important;
  padding: 0 !important;
  min-width: 28px !important;
}
</style>