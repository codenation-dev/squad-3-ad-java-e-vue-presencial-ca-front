import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login/Login.vue";
import Signup from "@/views/Login/Signup.vue";
import ForgotPassword from "@/views/Login/ForgotPassword.vue";
import Workspace from "@/views/Workspace/Workspace.vue";
import Applications from "@/views/Workspace/Applications.vue";
import Companies from "@/views/Workspace/Companies.vue";
import Companie from "@/views/Workspace/Companie.vue";
import Logs from "@/views/Workspace/Logs.vue";
import Users from "@/views/Workspace/Users.vue";

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
    },
    {
      name: "workspace",
      path: "/workspace",
      component: Workspace
    },
    {
      name: "applications",
      path: "/applications",
      component: Applications
    },
    {
      name: "companies",
      path: "/companies",
      component: Companies
    },
    {
      name: "company-create",
      path: "/company-create",
      component: Companie
    },
    {
      name: "company-edit",
      path: "/company-edit/:id",
      props: true,
      component: Companie
    },
    {
      name: "logs",
      path: "/logs",
      component: Logs
    },
    {
      name: "users",
      path: "/users",
      component: Users
      /*
      children: [
        {
          name: "user-edit",
          path: "/edit/:id",
          props: true,
          component: User
        }
      ]*/
    }
  ]
});
