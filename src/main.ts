import { createApp } from 'vue'
import './styles/app.scss'
import BootstrapVue3 from 'bootstrap-vue-3';
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);


app.use(BootstrapVue3);

app.mount('#app');
