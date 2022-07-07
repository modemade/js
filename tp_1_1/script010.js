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
        }

    },
    computed: {


    },
    watch: {


    }
}).mount('#app')