<template>
  <v-app>
    <main class="pet-name-insert">
      <v-card class="pa-5" color="#CCFFCC" width="400px">
        <v-card-title>
          <h1 class="text-h6">ペット登録</h1>
        </v-card-title>
        <v-form>
          <v-text-field
            prepend-icon="mdi-google-downasaur"
            label="ペット名"
            required
            v-model="petName"
          ></v-text-field>
          <!-- prepend-iconで頭にappend-iconでお尻にアイコンを追加することができる -->
          <v-text-field
            prepend-icon="mdi-weight-kilogram"
            label="体重"
            required
            v-model="weight"
          ></v-text-field>
          <v-col cols="12" sm="6">
            <v-select
              prepend-icon="mdi-gender-male-female"
              :items="sex"
              color="blue"
              label="性別"
              required
              v-model="formSex"
            ></v-select>
          </v-col>
          <v-card-actions>
            <v-btn class="info" @click="petInsert()">ペットの登録</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </main>
  </v-app>
</template>
<script>
import firebase from "firebase/app";
export default {
  name: "petNameInsert",
  data() {
    return {
      petName: "",
      weight: "",
      sex: ["オス", "メス"],
      formSex: "",
      db: null,
      petRef: "",
      email: this.$store.state.email,
    };
  },
  created() {
    this.db = firebase.firestore();
    this.petRef = this.db.collection("pets");
  },
  methods: {
    petInsert() {
      this.petRef.add({
        petName: this.petName,
        weight: this.weight,
        sex: this.formSex,
        email: this.email,
      });
    },
  },
};
</script>

<style scoped></style>
