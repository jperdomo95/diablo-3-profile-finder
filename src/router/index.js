import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Configuración de rutas
const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

// Rutas
const routes = routerOptions.map(route => {
  return {
    ...route,
    // Lazy Load
    // Importa el componente necesario al momento de acceder a la ruta, esto permite dividir el código final en varios fragmentos bajo demanda
    // Eventualmente conlleva a reducir el tiempo de carga
    component: () => import(`@/views/${route.name}/Index.vue`)
  }
})

const router = new VueRouter({
  routes
})

export default router
