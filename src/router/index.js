import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Layout from "@/components/index/Layout.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/Home.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
