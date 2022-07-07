Vue.createApp({
    data() {
        return {
            mesFilms:[],
            nomFilm: ''
        }
    },
    methods:{
        add(){
            this.mesFilms.push(this.nomFilm);
            this.nomFilm = '';
        },
        remove(index){
            this.mesFilms.splice(index, 1);
        }
    },
    computed: {


    },
    watch: {


    }
}).mount('#app')