import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Axios from './plugins/axios'

const app = createApp(App);

app.config.globalProperties.$axios = Axios

app.use(store).mount('#app')
