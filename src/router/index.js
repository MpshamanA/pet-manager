import Vue from "vue";
import VueRouter from "vue-router";
import storeKey from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter(to, from, next) {
      if (storeKey.getters.idToken) {
        //idTokenがあれば、そのまま"/about"に
        next();
      } else {
        //なければ"/login"に飛ばす
        next("/login");
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/petNameInsert",
    name: "PetNameInsert",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PetNameInsert.vue"),
    beforeEnter(to, from, next) {
      if (storeKey.getters.idToken) {
        //idTokenがあれば、そのまま"/about"に
        next();
      } else {
        //なければ"/login"に飛ばす
        next("/login");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
