<template>
  <div class="flex">
    <Login />
  </div>
</template>

<script>
import Login from "../views/Login.vue";
export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style scoped>
.flex {
  /*  display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
