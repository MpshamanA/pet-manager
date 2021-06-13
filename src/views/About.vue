<template>
  <v-app>
    <div class="about">
      <p>{{ $store.state.email }}さんの情報</p>
      <p>name:{{ name }}</p>
      <p>ペット名:{{ petName }}</p>
      <!-- <v-btn @click="test()">test</v-btn> -->
    </div>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
export default {
  name: "App",
  data() {
    return {
      name: "",
      petName: "",
      email: this.$store.state.email,
    };
  },
  created() {
    //firestoreから値を抽出
    firebase
      .firestore()
      .collection("users")
      //firestoreのemailとvuexのstoreのemailが一致するデータを抽出
      .where("email", "==", this.email)
      .get()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          this.name = doc.data().userName;
          this.petName = doc.data().petName;
          //console.log(`${doc.id}: ${doc.data().userName}`);
        });
      });
  },
  components: {
    // Sidebar,
  },
};
</script>
