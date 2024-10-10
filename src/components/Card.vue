<script setup lang="ts">
import { computed, ref } from 'vue';

const show:boolean = ref(false);

interface cardContent {
    image: string,
    name: string
}

const props = defineProps<{
    cardContent: cardContent
}>()

const hidden = computed(() => {
    return show.value? 'flipped':'hidden';
})

const flip = computed(() => {
    show.value = !show.value;
})
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
