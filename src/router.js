import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login/Login.vue";
import Signup from "@/views/Login/Signup.vue";
import ForgotPassword from "@/views/Login/ForgotPassword.vue";
import Workspace from "@/views/Workspace/Workspace.vue";
import ApplicationList from "@/views/Workspace/ApplicationList.vue";
import Application from "@/views/Workspace/Application.vue";
import CompanyList from "@/views/Workspace/CompanyList.vue";
import Company from "@/views/Workspace/Company.vue";
import LogList from "@/views/Workspace/LogList.vue";
import Log from "@/views/Workspace/Log.vue";
import LogSourceList from "@/views/Workspace/LogSourceList.vue";
import LogSource from "@/views/Workspace/LogSource.vue";
import UserList from "@/views/Workspace/UserList.vue";
import User from "@/views/Workspace/User.vue";

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
      name: "application-list",
      path: "/application-list",
      component: ApplicationList
    },
    {
      name: "application-create",
      path: "/application-create",
      component: Application
    },
    {
      name: "application-edit",
      path: "/application-edit/:id",
      props: true,
      component: Application
    },
    {
      name: "company-list",
      path: "/company-list",
      component: CompanyList
    },
    {
      name: "company-create",
      path: "/company-create",
      component: Company
    },
    {
      name: "company-edit",
      path: "/company-edit/:id",
      props: true,
      component: Company
    },
    {
      name: "log-list",
      path: "/log-list",
      component: LogList
    },
    {
      name: "log-create",
      path: "/log-create",
      component: Log
    },
    {
      name: "log-view",
      path: "/log-view/:id",
      props: true,
      component: Log
    },
    {
      name: "log-source-list",
      path: "/log-source-list",
      component: LogSourceList
    },
    {
      name: "log-source-create",
      path: "/log-source-create",
      component: LogSource
    },
    {
      name: "log-source-edit",
      path: "/log-source-edit/:id",
      props: true,
      component: LogSource
    },
    {
      name: "user-list",
      path: "/user-list",
      component: UserList
    },
    {
      name: "user-create",
      path: "/user-create",
      component: User
    },
    {
      name: "user-edit",
      path: "/user-edit/:id",
      props: true,
      component: User
    },
    {
      path: "/**",
      redirect: "/login"
    }
  ]
});
