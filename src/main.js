import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

console.log(App, "first");
App.component('HelloWorld', HelloWorld);
console.log(App, "second")
const app = createApp(App);

app.mount('#app')