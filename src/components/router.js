import Vue    from 'vue'
import Router from 'vue-router'

import App from "@/App";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router)
export default new Router({
    routes: [
        { path: '/', component: App },
        { path: '/profile', component: HelloWorld },
    ],
    linkActiveClass: "active",
    mode: "history"
})