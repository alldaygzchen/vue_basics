const app = Vue.createApp({
  data() {
    return {
      closeState: false,
    };
  },
  methods: {
    closeModal(val) {
      this.closeState = !this.closeState;
    },
    showModal(val) {
      this.closeState = !this.closeState;
    },
  },
});
app.component("modal", modal);
app.mount("#app");
