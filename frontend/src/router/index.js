import { createRouter,createWebHistory} from 'vue-router'
import Hero from "@/components/herobanner/Hero.vue"

const routes = [
    {path:'/', name:'home', component:Hero},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router