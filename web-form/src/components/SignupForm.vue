<template>
  <form>
      <!-- v-model will keep tracking whatever the value is being input in the textfield -->
      <label>Email</label>
      <input type="email" required v-model="email"> 

       
       <label>Password</label>
      <input type="password" required v-model="password">
      <label>Role:</label>
      <select v-model="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>
    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept terms and conditions</label>
    </div>
    <!-- <div>
        <input type="checkbox" value="pial" v-model="names">
        <label>Pial</label>
    </div>
    <div>
         <input type="checkbox" value="asif" v-model="names">
        <label>Asif</label>
    </div>
    <div>
        <input type="checkbox" value="iftekhar" v-model="names">
        <label>Iftekhar</label>
    </div>
    <div>
        <input type="checkbox" value="perseus" v-model="names">
        <label>Perseus</label>

    </div> -->
    <label>Skill:</label>
    <input type="text" v-model="tempSkill" @keypress="addSkill">
    <!-- every time when we use for loop ,we need to use key to bind by colon , because vue for oop use a unique key for every value -->
    <div v-for="skill in skills" :key="skill" class="pill">
      {{ skill }}
      
    </div>
  </form>
  <p>Email: {{email}}</p>
  <p>Password: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>Terms: {{terms}}</p>
  <!-- <p>Names: {{names}}</p> -->
</template>

<script>
export default {

data(){
    return{
        email: '',
        password: '',
        role : 'designer',
        terms : false,
        // names : []
        tempSkill : '',
        skills : []


    }
},
methods: {
  addSkill(e){
    // console.log(e);
    if(e.key === ',' && this.tempSkill) {
      if( ! this.skills.includes(this.tempSkill)){
        this.skills.push(this.tempSkill) // whatever the key pressed and then press comma it will temporary store is tempSkill then push it in skills []
      
      }
      this.tempSkill = ''
    }
  }
}

}
</script>

<style>
    form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input , select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"]{
      display: inline-block;
      width:16px;
      margin: 0 10px 0 0;
      position:relative;
      top:2px;
  }
</style>