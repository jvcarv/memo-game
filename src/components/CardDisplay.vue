<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Card from './Card.vue';
import Score from './Score.vue';
import { useGameStore } from "../stores/GameStore.js";

const store = useGameStore()
</script>

<template>
  <div>
    <h1>Jogo da Memória</h1>
    <Score/>
    <div class="cards">
        <Card v-for="card in store.cardsArray" :key="card.id" :cardContent="card"/>
    </div>
    <button v-if="store.checkIfGameEnds" class="end" @click="store.$resetAll">Resetar</button>
  </div>
</template>

<style scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-gap: 10px;
    }
</style>