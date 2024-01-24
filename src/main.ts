import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'

import autoRoutes from 'pages-generated'
import NProgress from 'nprogress'
// import { ViteSSG } from 'vite-ssg'
// import dayjs from 'dayjs'
// import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

const head = createHead()

const app = createApp(App)

app.use(router).use(head).mount('#app')

// const scrollBehavior = (to: any, from: any, savedPosition: any) => {
//   if (savedPosition)
//     return savedPosition
//   else
//     return { top: 0 }
// }

// export const createApp = ViteSSG(
//   App,
//   { routes, scrollBehavior },
//   ({ router, isClient }) => {
//     dayjs.extend(LocalizedFormat)

//     if (isClient) {
//       router.beforeEach(() => { NProgress.start() })
//       router.afterEach(() => { NProgress.done() })
//     }
//   },
// )
