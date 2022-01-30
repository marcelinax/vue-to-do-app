import './styles/index.scss'

import App from './App.vue'
import { createApp } from 'vue'
import routes from './routes';
import { store } from './state/index';

const app = createApp(App)

app.use(routes);
app.use(store)

routes.isReady().then(() => {
    app.mount('#app');
  });
