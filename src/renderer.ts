import { createApp } from "vue";
import App from './views/App.vue';
import './css/reset.css';
import './css/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App);

app.use(ElementPlus)

app.mount('#app');
