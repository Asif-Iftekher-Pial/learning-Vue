const app= Vue.createApp({
    //here we will write function , data , template ect
    // template:'<h2>I am the template</h2>' // this will mount to the DOM's id #app and insde app then div it will write
    data() { // declaring function named data
        return{
            title: 'this is title' ,// object title
            author: 'That is author', // object title
            age: 50 // object title
        }
       
    }

})

app.mount('#app')
