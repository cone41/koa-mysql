<template>
  <div id="app">
    <el-tabs v-model="activeName">
      <el-tab-pane label="商品" name="first">
        <Goods></Goods>
      </el-tab-pane>
      <el-tab-pane label="购物车" name="second">
        <Cart></Cart>
      </el-tab-pane>
      <el-tab-pane label="订单" name="third">
        <Order></Order>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import Order from "./components/Order.vue";
import Goods from "./components/Goods.vue";

export default {
  name: "app",
  components: {
    Cart,
    Order,
    Goods
  },
  data: () => {
    return {
      activeName: "first"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
