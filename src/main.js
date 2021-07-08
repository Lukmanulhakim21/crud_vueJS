import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import router from './router'
import { createApp } from '@vue/runtime-dom'
import App from './App.vue'

createApp(App).use(router).mount('#app')