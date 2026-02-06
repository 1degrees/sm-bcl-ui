import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/audio-player',
    children: [
      {
        name: 'AudioPlayer',
        path: '/audio-player',
        component: () => import('@sandboxes/AudioPlayer/src/app.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

export const config = routes[0].children