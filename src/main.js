import { createApp } from "vue"
import App from "./App.vue"

// Router
import router from "./router"


//  Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).mount("#app")