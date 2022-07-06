//! SOLUCE sans utiliser de methods (tout se passe côté Template)
Vue.createApp({
    data(){
        return {
            leNombre : 0
        };        
    },
    methods: {
        // Pas besoin on est trop fort
    }
}).mount('#monApp');
//! SOLUCE en utilisant les methods
// Vue.createApp({
//     data(){
//         return {
//             leNombre : 0
//         };        
//     },
//     methods: {
//         augmenter(){
//             this.leNombre ++;
//         },
//         reduire(){
//             this.leNombre --;
//         }
//     }
// }).mount('#monApp');
//! SOLUCE en utilisant les methods avec des paramètres (utilisés côté template)
//! avec un petit bonus : la methods capterInput et event en paramètre pour capter un event (Native Object Event)
// Vue.createApp({
//     data(){
//         return {
//             leNombre : 0,
//             truc:2,
//             uneString:'Hello'
//         };        
//     },
//     methods: {
//         augmenter(num){
//             this.leNombre += num;
//         },
//         reduire(num){
//             this.leNombre -= num;
//         },
//         capterInput(event){
//             console.log(event);
//             this.uneString = event.target.value;
//         }
//     }
// }).mount('#monApp');