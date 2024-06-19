// main.js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps';
import { equal } from 'fast-deep-equal';



const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.use(VueGoogleMaps, {
  load: {
  
    key: 'AIzaSyBv-aMfM9XNd2shEGkBbbjnOi0B6-h-nkk',
    libraries: 'places',
    v: 'weekly',
  },
})

app.mount('#app')
