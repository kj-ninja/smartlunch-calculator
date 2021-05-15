import { createApp } from 'vue';
import router from '@/router/index';
import i18n from '@/i18n/i18n.config';

import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import './index.css';

createApp(App).use(store).use(router).use(i18n)
  .mount('#app');
