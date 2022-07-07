//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data(){
        return{
            input1: '',
            input2: '',
            h: false,
            w: false,
            visible: false,
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods:{
        showHide(){
            this.visible = !this.visible;
        },
    },
    watch:{
        input1(value){
            if(value === "hello"){
                this.h = true;
            }
            else{
                this.h = false;
            }
            if(value === "world"){
                this.w = true;
            }
            else{
                this.w = false;
            }
        },
    }
    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');