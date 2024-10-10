<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Card from './Card.vue';

const cardsArray: Array<object> = ref([
  {
    image: '🐶',
    name: 'Dog'
  },
  {
    image: '🐶',
    name: 'Dog'
  },
  {
    image: '🐱',
    name: 'Cat'
  },
  {
    image: '🐱',
    name: 'Cat'
  },
  {
    image: '🦊',
    name: 'Fox'
  },
  {
    image: '🦊',
    name: 'Fox'
  },
  {
    image: '🐻',
    name: 'Bear'
  },
  {
    image: '🐻',
    name: 'Bear'
  },
  {
    image: '🐵',
    name: 'Monkey'
  },
  {
    image: '🐵',
    name: 'Monkey'
  },
  {
    image: '🦝',
    name: 'Raccoon'
  },
  {
    image: '🦝',
    name: 'Raccoon'
  },
  {
    image: '🐼',
    name: 'Panda'
  },
  {
    image: '🐼',
    name: 'Panda'
  },
  {
    image: '🐨',
    name: 'Koala'
  },
  {
    image: '🐨',
    name: 'Koala'
  },
  {
    image: '🐯',
    name: 'Tiger'
  },
  {
    image: '🐯',
    name: 'Tiger'
  },
  {
    image: '🦁',
    name: 'Lion'
  },
  {
    image: '🦁',
    name: 'Lion'
  },
]);

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