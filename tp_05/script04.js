Vue.createApp({
    data(){
        return {
            nameUser: 'azerty',
            userName: '',
    }
},
    methods: {
        afficherUserName(event) {
            this.nameUser = event.target.value;
    },
}
}).mount('#app');