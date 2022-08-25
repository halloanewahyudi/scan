import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Berhasil from "../views/berhasil.vue";
import Gagal from "../views/gagal.vue";
const routes =[
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/berhasil",
        name: "berhasil",
        component: Berhasil,
    },
    {
        path: "/gagal",
        name: "gagal",
        component: Gagal,
    },
  
  
]

const router = createRouter({
    history: createWebHistory(),
    routes ,
   
})

export default router;