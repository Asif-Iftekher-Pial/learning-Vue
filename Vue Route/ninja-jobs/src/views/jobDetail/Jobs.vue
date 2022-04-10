<template>
  <h1>Job List</h1>
  <strong>All the jobs are here-</strong>
  <div v-for="item in allTheJobs" :key="item.id">
      <h2>{{item.title}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return {
            allTheJobs:[
                {id: 1 , title: 'developer' , detail: 'lorem'},
                {id: 2 , title: 'engineer' , detail: 'lorem2'},
                {id: 3 , title: 'doctor' , detail: 'lorem3'},
                {id: 4 , title: 'Govt' , detail: 'lorem4'},
            ]
        }
    }
}
</script>

<style>

</style>