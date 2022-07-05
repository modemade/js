Vue.createApp({
    data() {
        return {
        unLivre: 'Les mémoire de Steven Seagle'
    };
    },
    methods: {
        afficherLivresRandom() {
            let nombreRabdom = Math.random();
                if(nombreRabdom > 0.5){
                    return'Le livre de la jungle';
                }
                else{
                    return 'Le livre de boba Fet'
                }
        }
    },
    }).mount('#bookListApp');