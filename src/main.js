import './styles/index.scss'

import App from './App.vue'
import { createApp } from 'vue'
import routes from './routes';

const app = createApp(App)

app.use(routes)

routes.isReady().then(() => {
    app.mount('#app');
  });
