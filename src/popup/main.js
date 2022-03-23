import Vue from "vue";
import App from "./components/App.vue";
import router from "../router";

import '@/assets/icons'

new Vue({
  // i18n,
  // store,
  router,
  render: (h) => h(App),
}).$mount("#app");
