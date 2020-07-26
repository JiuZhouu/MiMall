<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot> <!--插槽-->
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'nav-bar',
    props:{
      title:String
    },
    data(){
      return {
        isFixed:false
      }
    },
    mounted(){
      window.addEventListener('scroll',this.initHeight)
    },
    methods:{
      initHeight(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//滚动高度
        //document是整个文档  window.pageYOffset这个是页面y轴偏移量
        this.isFixed = scrollTop > 152? true:false;  //吸顶
      }
    },
    destroyed(){
      window.removeEventListener('scroll',this.initHeight,false)  //组件的销毁  第三个参数默认是true
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .nav-bar{
    height:70px;
    line-height:70px;
    border-top:1px solid $colorH;
    background-color:$colorG;
    z-index:10;
    &.is_fixed{
      position:fixed;   //固定定位
      top:0;            
      width:100%;         
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .pro-title{
        font-size:$fontH;
        color:$colorB;
        font-weight:bold;
      }
      .pro-param{
        font-size:$fontJ;
        span{
          margin:0 10px;
        }
        a{
          color:$colorC;
        }
      }
    }
  }
</style>