<template>
  <v-app>
    <main class="main">
      <v-card width="400px">
        <v-card-title>
          <h1 class="text-h6">新規登録</h1>
        </v-card-title>
        <v-form>
          <v-text-field
            prepend-icon="mdi-email"
            label="メールアドレス"
            required
            v-model="email"
            :rules="emailRules"
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
            hint="At least 6 characters"
            counter
            :rules="[rules.required, rules.min]"
          >
          </v-text-field>
          <v-card-actions>
            <v-btn class="info" @click="register()">新規登録</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </main>
  </v-app>
</template>

<script>
import axios from "../axios-for-auth.js"; //axiosのインスタンスをインポート
//import Dialog from "../components/dialog.vue";
export default {
  name: "App",
  components: {
    //Dialog,
  },
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "パスワードを記載してください",
        min: (v) => v.length >= 6 || "Min 6 characters",
      },
      emailRules: [(v) => /.+@.+/.test(v) || "メールアドレスを記載ください"],
    };
  },
  methods: {
    register() {
      //axiosでapiを叩くメソッドを定義
      axios
        .post("/accounts:signUp?key=", {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((response) => {
          //受け取ったレスポンスのidTokenをVuexのupdateIdTokenに渡している
          this.$store.commit("updateIdToken", response.data.idToken);
          //新規登録が正常に終了したら詳細画面に遷移
          this.$router.push("/about");
        });
      setTimeout(() => {
        this.email = "";
        this.password = "";
      }, 1500);
    },
  },
  computed: {},
};
</script>

<style scoped></style>
