const modal = {
  emits: ["close"],
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
  template: `
    <div class="modal">
          <p>"Framework providing a declarative and component-based programming model that helps you efficiently develop user interfaces"</p>
          <button @click="$emit('close')" class="btn">Close</button>   
    </div>
    <div class="backdrop" @click="$emit('close')"></div>`,
};
