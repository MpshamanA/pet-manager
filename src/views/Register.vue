<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5 pa-20 tp-100">
      <v-card-title>
        <h1 class="display-1">新規登録</h1>
      </v-card-title>
      <v-form>
        <v-text-field
          prepend-icon="mdi-account-circle"
          label="ユーザ名"
          v-model="name"
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
          <Dialog
            btnName="新規登録"
            mainMessage="新規登録します"
            sbMessage="ユーザー名は変更できません。よろしいですか？"
            agree="新規登録"
          />
          <v-btn class="info" @click="submit">新規登録</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import Dialog from "../components/dialog.vue";
export default {
  name: "App",
  components: {
    Dialog,
  },
  data() {
    return {
      name: "",
      password: "",
      showPassword: false,
      db: null,
      usersRef: null,
      users: {},
    };
  },
  created() {
    this.db = firebase.firestore();
    //引数で指定しているコレクション名でコンソール内にコレクションが作成される
    this.usersRef = this.db.collection("users");
  },
  methods: {
    submit() {
      if (this.name === "" || this.password === "") {
        return;
      }
      this.usersRef.add({
        name: this.name,
        password: this.password,
        token: true,
      });
      this.name = "";
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
