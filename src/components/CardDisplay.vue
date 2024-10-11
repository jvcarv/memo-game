<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Card from './Card.vue';
import { useGameStore } from "../stores/GameStore.js";

const store = useGameStore()

const cardsArray = ref(store.cardsArray)

const shuffle = computed(() => {
    return cardsArray.value.sort(() => Math.random() - 0.5);
});

</script>

<template>
  <div>
    <h1>Jogo da Memória</h1>
    <div class="cards">
        <Card v-for="card in shuffle" :key="card.name" :cardContent="card"/>
    </div>
  </div>
</template>

<style scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-gap: 10px;
    }
</style>