Vue.createApp({
    data() {
        return{
            detailVisibles:false,
            lesAmis:[{
                id:"0",
                name:"md",
                email:"email@hotmail.com",
                phone:'0201 56230 567'
            }],
        }
    },
    methods: {
        toggleDetail(){
            this.detailVisibles = !this.detailVisibles;
        }
    },
    computed: {

    },
    watch: {

    }
}).mount('#app');