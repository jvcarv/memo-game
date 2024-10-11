<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from "../stores/GameStore.js";

const store = useGameStore()

interface cardContent {
    image: string,
    name: string,
    flipped: boolean,
    matched: boolean
}

const props = defineProps<{
    cardContent: cardContent
}>()

const show:boolean = ref(props.cardContent.flipped);

const hidden = computed(() => {
    return props.cardContent.flipped? 'flipped':'hidden';
})

const flip = () => {
    if(store.firstCard && store.secondCard) return //para previnir que se possa escolher uma carta enquanto as outras estão sendo computadas
    
    if(props.cardContent.flipped == true) return // para previnir que se ganhe mais pontos clicando duas vezes em uma carta já virada

    if(!store.firstCard){
        store.firstCard = props.cardContent
        store.firstCard.flipped = true;
    } else if(!store.secondCard){
        store.secondCard = props.cardContent
        store.secondCard.flipped = true;
    }

    if (store.firstCard && store.secondCard){
        setTimeout(() => {
        if(store.ifPair == true){
            store.matching();
        } else {
            setTimeout(() => {
                store.firstCard.flipped = false;
                store.secondCard.flipped = false;
                if(store.whosPlaying === 'player one') store.whosPlaying = 'player two';
                else store.whosPlaying = 'player one';
                store.$reset()
            }, 1000)
        }
        }, 1000)
    }
}
</script>

<template>
    <div class="card" @click="flip" >
        <div class="card-content" :class="hidden">
            <p id="name">{{props.cardContent.name}}</p>
            <p id="icon">{{props.cardContent.image}}</p>
        </div>
    </div>
</template>

<style scoped>
/* the most external div*/
.card{
    background-color: black;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    width: 70px;
    padding: 10px;
    height: 100px;
}

/* the icon in the middle */
#icon{
    margin-top: -10px;
    font-size: 50px;
}
/* the name of the card*/
#name{
    margin: 5px 0 5px 0;
    color:bisque;
}

/* to make the give the card the idea that is turned down */
.hidden{
    display: none;
}

.flipped{
    display: block;
}
</style>
