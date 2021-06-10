import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false;

//firebaseからコピー
/*************************************************/

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*************************************************/

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
