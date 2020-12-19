import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home'
import Cliente from './components/Cliente'
import App from './App'

const routes = [{
        path: '/login',
        name: "root",
        component: App
    }, {
        path: '/home',
        name: "home",
        component: Home
    }, {
        path: '/cliente',
        name: "cliente",
        component: Cliente
        /* faltan los demás accesos: productos.. etc */
}]
const router = new createRouter({
    history: createWebHistory(),
    routes
})
export default router