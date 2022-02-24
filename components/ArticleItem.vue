<template>
  <div class="article_item" @click="toDetail(article.id)">
    <div class="article_title">
      <span
        ><span v-if="article.isTop == 1" style="color: #ff6600">[置顶] </span
        >{{ article.title }}</span
      >
    </div>
    <div class="article_abstract">摘要：{{ article.description }}</div>
    <div class="article_other">
      posted @{{ article.createAt | dateFormat }} 淡然 点赞数 ({{
        article.star >= 10000
          ? article.star / 10000 + "w"
          : article.star >= 1000
          ? article.star / 1000 + "k"
          : article.star
      }}) <span class="read">阅读全文</span>
    </div>
    <div class="article_tags">
      <el-tag
        v-for="tag in article.tag"
        :key="tag.id"
        :type="tag.type"
        size="mini"
        effect="plain"
        disable-transitions
        >{{ tag.name }}
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: "article-id",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped>
.el-tag {
  margin-right: 5px;
  opacity: 0.6;
}
.article_item {
  cursor: default;
  padding: 0 20px;
  margin-bottom: 30px;
}
.article_title {
  min-height: 60px;
  border-bottom: 1px dashed #95a5a6;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #7396a7;
  word-wrap: break-word;
}
.article_title span {
  cursor: pointer;
}
.article_title span:hover {
  color: #ff6600;
}
.article_abstract {
  margin: 5px 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 25px;
  color: #7f8c93;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.article_tags {
  margin-top: 5px;
}
.article_other {
  font-size: 13px;
  color: #9eabb3;
}
.read {
  color: #2daebf;
  font-size: 14px;
  margin-left: 2px;
  cursor: pointer;
  white-space: nowrap;
}
.read:hover {
  color: #ff6600;
}

@media screen and (max-width: 500px) {
  /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
  .el-tag {
    margin-right: 0.133333rem;
  }
  .article_item {
    margin-bottom: 0.533333rem;
  }
  .article_title {
    font-size: 0.48rem;
    min-height: 1.066667rem;
  }
  .article_abstract {
    font-size: 0.346667rem;
    margin: 0.133333rem 0;
    padding: 0 0.133333rem;
    line-height: 20px;
  }
  .article_tags {
    margin-top: 0;
  }
  .article_other {
    font-size: 0.32rem;
  }
  .read {
    font-size: 0.346667rem;
  }
}
</style>

