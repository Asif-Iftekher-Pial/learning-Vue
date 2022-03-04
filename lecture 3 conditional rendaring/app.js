const app= Vue.createApp({
    //here we will write function , data , template ect
    // template:'<h2>I am the template</h2>' // this will mount to the DOM's id #app and insde app then div it will write
    data() { // declaring data function where all data will be pplaced
        return{
            showBooks:true,
            title: 'this is title' ,// object title
            author: 'That is author', // object title
            age: 50, // object title
            x: 0,
            y: 0,

        }
       
    },
    //creating a methods
    methods: {
        // handleEvent(){
        //     console.log('overed');
        // },
        // mouseLeave() {
        //     console.log('leaved');
        // },
        // doubleClick() {
        //     console.log('double Clicked');
        // }

        /* or we can just make a function that will automatically detect the event type or with event paremeter
        and we  have to call the function or with function paremeter name in html file */
        handleEvent(e,data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x= e.offsetX,
            this.y= e.offsetY
        }

    }

})

app.mount('#app')
