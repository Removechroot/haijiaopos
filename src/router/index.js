import Vue from "vue";
import VueRouter from "vue-router";
import Pos from "../views/pos.vue";
import login from "../views/login"
import menu from "../views/menu"

Vue.use(VueRouter);

const routes = [
  {
    path: "/pos",
    name: "Pos",
    component: Pos
  },
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/menu",
    name: "menu",
    component: menu
  }

  // ,
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
