const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
      confirmedName: "",
    };
  },
  watch: {
    // counter(value) {
    //   if (value > 50) {
    //     this.counter = 0;
    //   }
    // },
    // counter(value) {
    //   if (value > 50) {
    //     const that = this;
    //     setTimeout(function () {
    //       that.counter = 0;
    //     }, 2000);
    //   }
    // },
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + "hi";
    //   }
    // },
  },
  computed: {
    mycounter() {
      if (this.counter > 50) {
        this.counter = 0;
        return this.counter;
      }
      return this.counter;
    },
    // fullname() {
    //   console.log("Running again...");
    //   if (this.name === "" || this.lastName === "") {
    //     return "";
    //   }
    //   return this.name + " " + this.lastName;
    // },
    // fullname() {
    //   console.log("Running again...");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "hi";
    // },
  },
  methods: {
    outputFullname() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Schwarzmüller";
    },
    setName(event, sth) {
      this.name = event.target.value;
    },
    // setName(event) {
    //   this.name = event.target.value ;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    // submitForm(event) {
    //   event.preventDefault();
    //   alert("submitted");
    // },
    submitForm() {
      alert("submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
