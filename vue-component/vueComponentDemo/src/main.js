
import { createApp } from 'vue';
import App from './App.vue';
import contact from './components/contact.vue'  ;
import ButtonCounter from './components/ButtonCounter.vue';

const app = createApp(App);

//global component
//app.component('contact-us', contactUs);          
//app.component('button-counter', ButtonCounter)
//we did locally in button component 
//it is better practice 
app.mount('#app');
