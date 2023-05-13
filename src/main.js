import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import { getTheme } from "@/utilities/getTheme.js";

const theme = ref(getTheme());
const app = createApp(App);

app.use(router);
app.provide("theme", theme.value);
app.mount("#app");
