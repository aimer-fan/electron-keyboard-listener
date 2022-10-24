import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import { createApp } from 'vue';
import './css/index.css';
import './css/reset.css';
import App from './views/App.vue';

const app = createApp(App);

app.use(ElementPlus);

app.mount('#app');
