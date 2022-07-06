Vue.createApp({
    data(){
        return {
                counter:0,
                message: ''
        }
    },
    methods: {
        
    },
    computed: {

    },
    watch: {
counter(value){
            if(value == 7){
                this.message = 'tu as gagné';
            }
            else {
                this.message = 'tu as perdu';
            }  
        }
    }
}).mount('#App');