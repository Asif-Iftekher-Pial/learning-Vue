<template>
  <h1>{{ title }}</h1>
  <br />
  <input type="text" class="active" ref="boo" />
  <br />
  <button @click="handleClick">Highlight TextBox</button>
  <!-- calling the customModal in html template -->
  <!-- : colon is for multiple props binding -->
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <!-- slots is used to pass more element to customModal -->
      <!-- default slot -->
      <h3>this is slots info</h3>
      <p>Lorem, ipsum.</p>
      <!-- specific slot contain v-slot and the name ->links  -->
      <template v-slot:links>
        <a href="#">Sign up Now</a>

        <a href="#">More info</a>
      </template>
    </Modal>
    <!-- @close is the custome click event created in customModal  which is calling toggleModal function -->
  </div>

   <div v-if="showModalTwo">
    <Modal  @close="toggleModaltwo">
      <!-- slots is used to pass more element to customModal -->
      <!-- default slot -->
      <h3>this is Modal Two</h3>
      <p>Lorem, ipsum dolor.</p>
      
    </Modal>
    <!-- @close is the custome click event created in customModal  which is calling toggleModal function -->
  </div>
  <button @click="toggleModal">show Modal</button>
  <button @click="toggleModaltwo">Show Modal Two</button>
</template>

<script>
import Modal from "./components/customModal.vue";
export default {
  // register the customModal
  components: { Modal},
  name: "App",
  data() {
    return {
      title: "My first vue app",

      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      //  console.log(this.$refs.boo); // $refs is used for selecting any refs in template html file
      this.$refs.boo.classList.toggle("active"); // will add active class
      this.$refs.boo.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModaltwo() {
      // alert('oke')
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
input{
  margin-bottom: 15px;
}
button{
  margin-right: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid red;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
