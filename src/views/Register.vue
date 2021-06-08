<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5 pa-20 tp-100">
      <v-card-title>
        <h1 class="display-1">新規登録</h1>
      </v-card-title>
      <v-form>
        <v-text-field
          prepend-icon="mdi-email"
          label="メールアドレス"
          required
          v-model="email"
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
          <Dialog
            btnName="新規登録"
            mainMessage="新規登録します"
            sbMessage="ユーザー名は変更できません。よろしいですか？"
            agree="新規登録"
          />
          <v-btn class="info" @click="register()">新規登録</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import axios from "../axios-for-auth.js"; //axiosのインスタンスをインポート
import Dialog from "../components/dialog.vue";
export default {
  name: "App",
  components: {
    Dialog,
  },
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
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
          console.log(response); //返ってきたレスポンスをログに表示
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
