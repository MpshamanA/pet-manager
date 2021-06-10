<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {};
  },
};
</script>

<style>
a.router-link-exact-active {
}
</style>
