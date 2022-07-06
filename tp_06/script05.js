Vue.createApp({
    data() {
        return{
            counter : 0,
            userName:'',
        }
    },
    methods: {
        bugevent() {
            console.log('fonction executed')
            if(this.userName == ''){
                return 'test'

            }else{
                return 'un autre test'
            }
        }
    },
}).mount('#app');