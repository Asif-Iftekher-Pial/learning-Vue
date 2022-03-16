const app= Vue.createApp({
    //here we will write function , data , template ect
    // template:'<h2>I am the template</h2>' // this will mount to the DOM's id #app and insde app then div it will write
    data() { // declaring data function where all data will be pplaced
        return{
            showBooks:true,
            books:[
                {title:'jbvs',author:'jbdv'},
                {title:'j bvw',author:'jbevw'},
                {title:'bfjwe',author:'jbvj'},
            ]
            // title:'njk',
            // author:'nfuo'
        }
       
    },
    //creating a methods
    methods: {
        displayBooks(){
            
            this.showBooks= !this.showBooks
        }

       

    }

})

app.mount('#app')
