<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import axios from 'axios'
//import jsonp from 'jsonp'
//import storage from './storage/index'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return { 
    }
  },
  mounted(){
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods:{
    getUser(){            //navheader组件中的接口
        this.axios.get('/user').then((res={})=>{
            this.$store.dispatch('saveUserName',res.username);
        })
    },
    getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{
            this.$store.dispatch('saveCartCount',res);
        })
    }
  }
}

  </script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
</style>
