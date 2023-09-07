import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Index from "../pages/Index.vue";
import Practice01 from "../components/Practice01.vue";
import Practice02 from "../components/Practice02.vue";


const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "Practice01",
        name: "Practice01",
        component: Practice01,
      },
      {
        path: "Practice02",
        name: "Practice02",
        component: Practice02,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
