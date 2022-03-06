import { createApp } from 'vue'
import App from './App.vue'
import VueMobileDetection from 'vue-mobile-detection'
const app = createApp(App)
app.use(VueMobileDetection,{});
app.mount('#app')