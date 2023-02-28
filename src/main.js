/* eslint-disable @typescript-eslint/no-explicit-any */
import { h, createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";
import "./assets/styles.css";
console.log("app_env ", import.meta.env.VITE_APP_ENV);
console.log("build_mode ", import.meta.env.VITE_BUILD_MODE);
let vueLifecycles = {};
if (import.meta.env.VITE_BUILD_MODE === "mfe") {
  vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
      render() {
        return h(App);
      },
    },
    handleInstance: (app) => {
      app.use(createPinia());
    },
  });
} else {
  const app = createApp(App);
  app.use(createPinia());
  app.mount("#app");
}

export default window.boilerplateVueSingleSpa = {
  bootstrap: vueLifecycles.bootstrap,
  mount: vueLifecycles.mount,
  unmount: vueLifecycles.unmount,
};
