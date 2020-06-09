import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Test from "../views/Test.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		nextPage: "About",
	},
	{
		path: "/about",
		name: "About",
		component: About,
		nextPage: "Test",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/test",
		name: "Test",
		component: Test,
	},
]

const router = new VueRouter({
	mode: "history",
	routes,
})

export default router
