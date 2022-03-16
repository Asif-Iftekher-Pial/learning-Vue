const app = Vue.createApp({
    //here we will write function , data , template ect
    // template:'<h2>I am the template</h2>' // this will mount to the DOM's id #app and insde app then div it will write
    data() { // declaring data function where all data will be pplaced
        return {
            showBooks: true,
            url: 'http://www.google.com',
            books: [
                { title: 'jbvs', author: 'jbdv', img: 'assets/1.jpg', dclass: true },
                { title: 'j bvw', author: 'jbevw', img: 'assets/2.jpg', dclass: false },
                { title: 'bfjwe', author: 'jbvj', img: 'assets/3.jpg', dclass: true },
            ]
            // title:'njk',
            // author:'nfuo'
        }

    },
    //creating a methods
    methods: {
        displayBooks() {

            this.showBooks = !this.showBooks
        },
        removeClass(individualBook){
            // alert('ok')
            individualBook.dclass=!individualBook.dclass

        }



    }

})

app.mount('#app')
