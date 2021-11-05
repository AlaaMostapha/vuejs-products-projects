import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(view) {
    return () => import(`../Pages/${view}.vue`);
}

const routes = [
    {
        path: "/",
        component: lazyLoad("Products"),
    },
    {
        path: "/products/:id",
        component: lazyLoad("Product"),
        name: "productDetails",
    },
    {
        path: "/cart",
        component: lazyLoad("Cart"),
    },
    {
        path: "/:Notfound(.*)",
        component: lazyLoad("NotFound"),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router