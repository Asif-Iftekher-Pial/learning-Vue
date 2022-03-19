<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      click me
  </div>
</template>

<script>
export default {
    // recieving props from parrent App.vue
    props: ['delay'],
    data(){
        return {
            showBlock:false,
            timer: null,
            reactionTime: 0
        }
    },

    // few life cycle hooks 
    // after mounted hook the template above this method will execute
    mounted(){
        // console.log('mounted successfully');

        setTimeout(()=> {
            this.showBlock = true 
            // console.log(this.delay);
            this.startTimer()
        },this.delay)
    },
    // // updated hook
    // updated(){
    //     // console.log('update successfully');
    // },
    // // unmounted hook
    // unmounted(){
    //     // console.log('unmounted ');
    // }
    methods: {
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime +=10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
            // console.log(this.reactionTime);
            this.$emit('end',this.reactionTime)
        }
    }
}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: rgb(11, 129, 40);
    color:white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;

}
</style>