const app = Vue.createApp({
    data() {
        return {
        detailsVisibles: false,
        lesAmis: [
            {
                id: 'lasticot',
                name: 'COCO L ASTICOT',
                phone: '01234 5678 991',
                email: 'coco@lasticot.com',
            },
            {
                id: 'janine',
                name: 'Janine DeLavega',
                phone: '09876 543 221',
                email: 'janine@delavega.com',
            },
        ],
        };
    },
    methods: {
        toggleDetails() {
        this.detailsVisibles = !this.detailsVisibles;
        }
    }
    });
    
    app.component('ami-comp',{
        template:`<div class="card border-dark mb-3">
        <div class="card-header">{{unPote.name}}</div>
        <div class="card-body text-dark">
          <button @click="toggleDetails()" type="button" class="btn btn-dark mb-1">{{detailsVisibles ? 'Masquer':'Voir'}}</button>
          <ul v-if="detailsVisibles" class="list-group list-group-flush">
            <li class="list-group-item">{{unPote.mail}}</li>
            <li class="list-group-item">{{unPote.phone}}</li>                          
          </ul>
        </div>
    </div>`,
data() {
    return{
    detailsVisibles: false,
    unPote:{
        id: 0,
        name: 'mti',
        phone:01035405450,
        mail:'email@hotmail.com'
    }
}
},
methods: {
    toggleDetails() {
        this.detailsVisibles = !this.detailsVisibles;
        }
}
    })

    app.mount('#app');