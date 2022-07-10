const ratingCounter = {
  props: ["parent"],
  emits: ["change"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clickAddOne() {
      this.$emit("change", 1);
    },
    clickMinusOne() {
      this.$emit("change", -1);
    },
  },
  template: `<div>
        <button @click="clickMinusOne">Thumbs Down</button>
        <button @click="clickAddOne">Thumbs Up</button>
    </div>`,
};
