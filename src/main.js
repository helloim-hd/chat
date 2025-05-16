import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: SocketIO('http://localhost:5000', options), //options object is Optional
//     vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_',
//     },
//   })
// );

// // Vue.use(VueSocketIO, 'http://localhost:5000');
// Vue.use(socketIO, 'http://localhost:5000');
// Vue.use(require('vue-moment'));

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');
