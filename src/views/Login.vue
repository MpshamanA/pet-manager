<template>
  <v-app>
    <v-card width="400px" class="mx-auto">
      <v-card-title>
        <h1 class="text-h5">ログイン</h1>
      </v-card-title>
      <v-form>
        <v-text-field
          prepend-icon="mdi-email"
          label="メールアドレス"
          v-model="email"
          required
        ></v-text-field>
        <!-- prepend-iconで頭にappend-iconでお尻にアイコンを追加することができる -->
        <v-text-field
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          label="パスワード"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          v-model="password"
          required
        >
        </v-text-field>
        <v-card-actions>
          <v-btn class="info" @click="login()">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import axios from "../axios-for-auth.js"; //axiosのインスタンスをインポート
export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    login() {
      axios
        .post("/accounts:signInWithPassword?key=", {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((response) => {
          //console.log(response.data);
          this.$store.commit("updateToken", response.data.idToken);
          this.$router.push("/about");
        });
      this.email = "";
      this.password = "";
    },
  },
  computed: {},
};
</script>

<style scoped>
.tp-100 {
  top: 100px;
}
</style>
