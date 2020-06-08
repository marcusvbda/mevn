import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'NProgress'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: require('../components/Hello.vue') },
    { path: '/teste', component: { template: "<h1>teste 123</h1>" } },
    { path: '*', component: { template: "<h1>not found</h1>" } }
]

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeResolve((to, from, next) => {
    if (to.name) NProgress.start()
    next()
})


router.afterEach((to, from) => {
    NProgress.done()
    window.scrollTo(0, 0)
})

export default router