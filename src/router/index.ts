import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/:pathMatch(.*)*', // This will match all paths
			name: 'home',
			component: App
		}
	]
})

export default router
