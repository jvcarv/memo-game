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
    if(store.firstCard == 'a'){
        store.firstCard = props.cardContent
        store.firstCard.flipped = true;
    } else if(store.secondCard == 'b'){
        store.secondCard = props.cardContent
        store.secondCard.flipped = true;
    }

    if(store.ifPair == true){
        store.matching();
    }
}
</script>

<template>
    <div class="card" @click="flip" >
        <div class="card-content" :class="hidden">
            <p>{{ store.ifPair }}</p>
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
    margin: 0;
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
