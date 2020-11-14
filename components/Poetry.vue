<template>
  <div class="poetry">
      <div class="poem-border  poem-left"></div>
      <div class="poem-border poem-right"></div>
      <h1>念两句诗</h1>
      <div class="poem_sentence">{{poerty.content}}</div>
      <div class="poem_info">—— {{poerty.author}}《{{poerty.origin}}》</div>
  </div>
  
  
</template>

<script>
import {request2} from '~/plugins/axios'
export default {
    data(){
        return{
          poerty:{
            author:'李白',
            origin:'秋思',
            content:'天秋木叶下，月冷莎鸡悲。'
          }
        }
    },
    async created(){
        let res=await request2({
            url:`https://v1.jinrishici.com/all.json`
        })
        if(res.data)
          this.poerty=res.data
        else{
          this.poerty={
            author:'李白',
            origin:'秋思',
            content:'天秋木叶下，月冷莎鸡悲。'
          }
        }
    }
}
</script>

<style scoped>
  .poetry{
    position: relative;
    width: 1000px;
    max-width: 80%;
    border: 2px solid #797979;
    min-height: 120px;
    border-top: 0;
    text-align: center;
    margin: 40px auto;
  }
  .poem-border {
    position: absolute;
    height: 2px;
    width: 27%;
    background-color: #797979;
  }
  .poem-left {
      left: 0;
  }
  .poem-right {
    right: 0;
  }
  .poetry h1 {
    position: relative;
    top: -20px;
    display: inline-block;
    letter-spacing: 4px;
    color: #797979;
    font-size: 28px;
    margin-bottom: 20px;
  }
  .poem_sentence{
    font-size: 25px;
    color: #7f8c93;
  }
  .poem_info{
    font-size: 15px;
    margin: 15px auto;
    color: #7f8c93;
  }
  @media screen and (max-width: 600px) {
    .poetry{
      margin-bottom: 0.533333rem;
    }
    .poetry h1{
      font-size: 0.533333rem;
      /* margin-top: -0.8rem; */
    }
    .poem_sentence{
      font-size: 0.586667rem;
    }
    .poem_info{
      font-size: 0.346667rem;
    }
  }

</style>>

