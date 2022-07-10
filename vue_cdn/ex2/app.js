const app = Vue.createApp({
  data() {
    return {
      authstatus: false,
      apiurls: {
        authget: "http://localhost:9000/auth",
        authpost: "http://localhost:9000/auth",
        postget: "http://localhost:9000/posts",
      },
    };
  },
  methods: {
    setAuthStatus(val) {
      console.log("Setting authstatus through event to: ", val);
      this.authstatus = val;
      console.log("New value: ", app.authstatus);
    },
  },
});
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes,
});

app.component("Navigation", Navigation);
app.component("Content", Content);
app.component("Access", Access);
app.use(router);
app.mount("#app");
