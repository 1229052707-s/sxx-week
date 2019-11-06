<template>
  <div class="footer" >
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

      <router-link to="/homepage">首页</router-link>
      <router-link to="/classify">分类</router-link>

      <router-link to="/shoppingCar">购物车</router-link>

      <router-link to="/personalCenter">个人中心</router-link>


  </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .footer{
      width: 100%;

      background-color: red;
      position: fixed;
      bottom: 0;
    }
  a{
    width: 23%;
    height: 10px;
    display: inline-block;

    text-align: center;
  }


  span{
    width: 23%;
    height: 0.5rem;
    background-color: #42b983;
    display: inline-block;
  }
</style>
