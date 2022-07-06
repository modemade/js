Vue.createApp({
    data() {
    return {
        leTitre: 'Name User And BLABLABLA',
        leLien:'https://picsum.photos/200/200',
        unNom:'Mti',
        unAge: 20,


    };
    },
    methods: {
    calculAge(){
        return this.unAge + 10;
    }
    },
}).mount('#app');