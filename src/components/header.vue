<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>PetManager</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-if="toggle"
        @click="logout"
        class="mr-5"
        elevation="2"
        plain
        to="/login"
      >
        <v-icon>mdi-lock</v-icon>
        ログアウト
      </v-btn>

      <v-btn v-if="!toggle" class="mr-5" elevation="2" plain to="/login">
        <v-icon>mdi-lock-open</v-icon>
        ログイン
      </v-btn>

      <v-btn v-if="!toggle" class="mr-5" elevation="2" plain to="/register">
        <v-icon>mdi-account</v-icon>
        新規登録
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
      tokenID: null,
    };
  },
  methods: {
    logout() {
      this.$store.commit("updateIdToken", null);
    },
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

<style scoped>
.router-link-exact-active {
  text-decoration: none;
}
</style>
