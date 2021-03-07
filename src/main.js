import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import "highlight.js/styles/github-gist.css";
import "highlight.js/styles/atom-one-dark.css";
import "github-markdown-css";
import VueHighlightJS from "vue-highlightjs";
var VueMarkdown = require("vue-markdown");
Vue.config.productionTip = false;
Vue.use(VueHighlightJS);
Vue.use(VueMarkdown);
Vue.component("vue-markdown", VueMarkdown.default);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
