<template>
  <div class="home">
    <HomeSidebar class="item" />
    <router-view class="item pl-300" />
  </div>
</template>

<script>
import HomeSidebar from "../components/HomeSidebar.vue";
//import Login from "../views/Login.vue";
export default {
  name: "App",
  components: {
    HomeSidebar,
  },
};
</script>

<style scoped>
.item {
  float: left;
}
.pl-300 {
  display: flex; /* 要素を横並びにする */
  /* min-height: 100vh; */ /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */
  /* サイドバーのwidth分だけ範囲を削除 */
  /* width: calc(100% - 100px); */
  /* サイドバーで隠れるので右に寄せる */
  margin: 100px 0 0 150px;
}
</style>
