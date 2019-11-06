<template>
  <div class="fu">
    <div class="bia"></div>
    <input type="text" placeholder="搜索商品名称" class="input-box">
    <div class="Bia"></div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .fu{
    display: flex;
    background-color: #00BF9D;
    height: 0.5rem;
    width: 100%;
  }
  .bia{
    background-image: url("../assets/vns_icon_sprites_01.png");
    background-position: -106px 3px;
    background-size: 2.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background-repeat: no-repeat;
    background-position: 5px 6px;
  }
  .input-box{
    width: 2.5REM;
    height: 0.35rem;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 25px;
    padding-left: 10px;
  }
  .Bia{
    background-image: url("../assets/vns_icon_sprites_01.png");

    width: 0.5rem;
    height: 0.5rem;
    background-repeat: no-repeat;
    background-position: -106px 3px;
    background-size: 2.5rem;
  }
</style>
