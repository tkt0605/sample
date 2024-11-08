import {createRouter, createWebHistory} from "vue-router"
import HomeIndex from "@/components/views/HomeIndex.vue"

const routes = [
    {path: '/', name: 'HomeIndex', component: HomeIndex},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router