//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        unLivre: "azertyu",
        unNombre: 123456,
        unTableau: [123456,"azertyu"],
        unObjet:"azerty",
        unLivre: 'Les mémoire de Steven Seagle'
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        ajouterTask() {
        this.tasks.push(this.valeurDeInput);
        this.valeurDeInput = '';
        },
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
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#bookListApp');