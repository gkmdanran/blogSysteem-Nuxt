<template>
    <transition>
        <div class="toast" v-show="show">  
            <div>{{message}}</div>
        </div>
    </transition>
</template>
<script>
export default {
  name: 'toast',
  data () {
    return {
     message:"",
     show:false,
    }
  },
  methods:{
      shows(message,duration=2000){
          this.show=true
          this.message=message
          setTimeout(()=>{
              this.show=false
              this.messag=''
          },duration)
      }
  }

}
</script>
<style scoped>
    .toast{
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 14px;
        color: #ffffff;
        background-color: rgba(0,0,0,0.5);
        padding: 10px;
        border-radius: 5px;
        z-index: 99999;
        min-width: 100px;
    }
    .v-enter,
    .v-leave-to {
        opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.4s ease;
    }
</style>
