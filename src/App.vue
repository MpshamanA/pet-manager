<template>
  <v-app>
    <router-link to="/"> ログイン</router-link>
    <router-link to="/register"> 新規登録</router-link>
    <router-link to="/about"> 詳細ページ</router-link>

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
a.router-link-exact-active {
  color: red;
  font-size: 25px;
}
</style>
