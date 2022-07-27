const app = Vue.createApp({
    data() {
        return {
        nomProduit: '',
        listeDesCourses: [],
        masquerListe: true,
        };
    },
    computed: {
        messageButton() {
        return this.masquerListe ? 'Masquer Liste' : 'Afficher Liste';
        },
    },
    methods: {
        ajouterProduit() {
        this.listeDesCourses.push(this.nomProduit);
        },
        supprimerProduit(unIndex) {
        this.listeDesCourses.splice(unIndex, 1);
        },
        affichageListe() {
        this.masquerListe = !this.masquerListe;
        },
    },
    });
    app.mount('#monApp');