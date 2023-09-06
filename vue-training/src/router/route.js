import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Answer from "../components/name_card/Answer.vue";
import NameCard from "../components/name_card/NameCard.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/name_card",
    name: "NameCard",
    component: NameCard
  },
  {
    path: "/name_card/answer",
    name: "Answer",
    component: Answer
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
