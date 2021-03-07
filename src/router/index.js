import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import list from "../views/list.vue";
import detail from "../views/detail.vue";
import md from "../views/md.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "index",
    component: index
  },
  {
    path: "/list",
    name: "list",
    component: list
  },
  {
    path: "/detail",
    name: "detail",
    component: detail
  },
  {
    path: "/md",
    name: "md",
    component: md
  },
  {
    path: "*",
    redirect: "/index"
  }
];

const router = new VueRouter({
  routes
});

export default router;
