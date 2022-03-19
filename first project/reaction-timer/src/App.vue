<template>
<h1>Reaction Timer</h1>
<!-- v-bind:disabled="isPlaying" means  binding propert as disabled while isPlaying is true , 
which means play button wont work whileisPlaying is true -->
<button @click="start" v-bind:disabled="isPlaying">Play</button>
<!-- binding property delay  -->
<Block v-if="isPlaying" v-bind:delay="delay" @end="endGame" />

<Results v-if="showResult" :score="score" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'
export default {
  name: 'App',
  components: {
     Block,
     Results
  },
  // data is a function which always has return 
  data(){
    return{
      isPlaying: false,
      delay:null,
      score:0,
      showResult: false
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000,
      this.isPlaying = true
      // console.log(this.delay);
      this.showResult = false
      
    },
    // reciving the reactionTime by the paremeter
    endGame(reactionTime) {
      this.score = reactionTime,
      this.isPlaying = false,
      this.showResult = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button{
  background: #0faf87;
  color:white;
  border:none;
  padding: 8px 16px;
  border-radius: 16px;
  letter-spacing: 1px;
  cursor:pointer;
  margin:10px;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
