import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' // 样式文件
Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('code,pre')
    console.log(blocks)
    blocks.forEach((block) => {
        if(block)
            hljs.highlightBlock(block)
    })
})