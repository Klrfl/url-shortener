import { createApp, ref, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import { getTheme } from "@/utilities/getTheme.js";

const scheme = ref(getTheme());
const theme = reactive(scheme);
const app = createApp(App);

app.use(router);
app.provide("theme", theme);
app.mount("#app");
