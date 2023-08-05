import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {path:"/vehiculo", component: () => import('../page/Vehiculo')}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router