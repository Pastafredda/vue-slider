const {createApp} = Vue;

createApp({
    data(){
        return{
            imageActive:0,
            images:[
                {
                    image: 'img/01.webp',
                    title: 'Marvel\\ s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
            
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
            
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
            
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
            
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\\ s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            timer: 0
        }
    },
    methods:{
        nextButton(){
            this.imageActive++;
            if(this.imageActive === this.images.length){
                this.imageActive = 0;
            }
        },
        prevButton(){
            this.imageActive--;
            if(this.imageActive < 0){
                this.imageActive = this.images.length-1
            }
        },
        clickThumb(indice){
            this.imageActive= indice;
        },
        autoplay(){
            this.timer= setInterval(this.nextButton, 3000);
        },
        StopAutoPlay(){
            clearInterval(this.timer);
        }
    }
}).mount('#app')