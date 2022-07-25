import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './config'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Form, Field, ErrorMessage } from 'vee-validate'
import './index.css'

const pinia = createPinia()
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router)
app.use(pinia)
app.mount('#app')
