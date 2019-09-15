import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login/Login.vue";
import Signup from "@/views/Login/Signup.vue";
import ForgotPassword from "@/views/Login/ForgotPassword.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Login
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "signup",
      path: "/signup",
      component: Signup
    },
    {
      name: "forgotPassword",
      path: "/forgotPassword",
      component: ForgotPassword
    }
  ]
});
