<template>
  <v-app>
    <div class="about">
      <p>{{ $store.state.email }}さんの情報</p>
      <p>飼い主名:{{ name }}</p>
      <p>ペット名:{{ petList.petName }}</p>
      <p>体重:{{ petList.weight }}</p>
      <p>性別:{{ petList.sex }}</p>

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
      weight: "",
      sex: "",
      petList: [
        {
          petName: "",
          weight: "",
          sex: "",
        },
      ],
      email: this.$store.state.email,
    };
  },
  created() {
    //firestoreから値を抽出
    const db = firebase.firestore();
    db.collection("users")
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
    db.collection("pets")
      .where("email", "==", this.email)
      .get()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          this.petList.petName = doc.data().petName;
          this.petList.weight = doc.data().weight;
          this.petList.sex = doc.data().sex;
          console.log(doc.data().petName);
        });
      });
  },
  components: {
    // Sidebar,
  },
};
</script>
