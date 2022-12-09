import { createApp } from 'vue'
import App from './App.vue'

import './reset.css'
const app = createApp(App)

// router 
import router from './router/index.js'
app.use(router)

app.mount('#app')
