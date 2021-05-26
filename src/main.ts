import { createApp } from 'vue'
import App from './App'
import { store, key } from './store'
import Axios from './plugins/axios'
import '@/assets/css/base.css';
import '@/assets/css/main.css';

import { Popup, Lazyload, Dialog, Toast } from 'vant';

const app = createApp(App);

app.config.globalProperties.$axios = Axios

app
  .use(store, key)
  .use(Popup)
  .use(Lazyload)
  .use(Dialog)
  .use(Toast)
  .mount('#app')
