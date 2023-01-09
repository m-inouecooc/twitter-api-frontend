import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MemberRegistration from "../pages/MemberRegistration.vue";
import ModeSelect from "../pages/ModeSelect.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MemberRegistration",
    component: MemberRegistration,
  },
  {
    path: "/ModeSelect",
    name: "ModeSelect",
    component: ModeSelect,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
