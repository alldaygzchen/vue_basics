const app = Vue.createApp({
  data() {
    return {
      parentHeader: {
        label: "Counter is at:",
        globalCount: 0,
      },
    };
  },
  methods: {
    changeValue(val) {
      console.log(this.$root);
      this.parentHeader.globalCount += val;
    },
  },
});
app.component("rating-counter", ratingCounter);
app.component("rating-title", ratingTitle);
app.mount("#app");
