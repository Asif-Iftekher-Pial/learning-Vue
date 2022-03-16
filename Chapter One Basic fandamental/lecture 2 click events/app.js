const app= Vue.createApp({
    //here we will write function , data , template ect
    // template:'<h2>I am the template</h2>' // this will mount to the DOM's id #app and insde app then div it will write
    data() { // declaring data function where all data will be pplaced
        return{
            title: 'this is title' ,// object title
            author: 'That is author', // object title
            age: 50 // object title
        }
       
    },
    //creating a methods
    methods: {
        changeTitle(){ // declaring a method or function
            // console.log('you clicked me')
            this.title="Title is changed now from changeTitle method  "
        },
        changeauthor(arg){ // declaring another method or function
            // console.log('you clicked me')
            this.author= arg
        }
    }

})

app.mount('#app')
