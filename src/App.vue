<template>
  <v-app>
    <Header class="head" />
    <Sidebar v-if="toggle" />
    <div class="flex">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Sidebar from "./components/HomeSidebar.vue";
import Header from "./components/header.vue";
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      toggle: false,
      tokenID: null,
    };
  },
  mounted() {
    //storeのidTokenを監視
    //idTokenに変化があった場合に発火
    //thisを対比させる
    let _t = this;
    //watchメソッドを使って監視
    this.$store.watch(
      () => _t.$store.getters.idToken,
      (token) => {
        //tokenの状態（ログインの有無）によってtoggleを更新する
        this.tokenID = token;
        if (this.tokenID !== null) {
          this.toggle = true;
        } else {
          this.toggle = false;
        }
      }
    );
  },
};
</script>

<style>
.head {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.flex {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
