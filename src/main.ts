import { createApp } from 'vue'
import App from './App'
import store from './store'
import Axios from './plugins/axios'

import { Popup, Lazyload, Dialog, Toast } from 'vant';

const app = createApp(App);

app.config.globalProperties.$axios = Axios

app
  .use(store)
  .use(Popup)
  .use(Lazyload)
  .use(Dialog)
  .use(Toast)
  .mount('#app')
