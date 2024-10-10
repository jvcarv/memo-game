<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
  {
    image: '🐭',
    name: 'Mouse'
  },
  {
    image: '🐭',
    name: 'Mouse'
  },
  {
    image: '🐷',
    name: 'Pig'
  },
  {
    image: '🐷',
    name: 'Pig'
  }
]);

const shuffle = () => {
    cardsArray.sort(() => Math.random() - 0.5)
}

onMounted(() => {
    shuffle();
})
</script>

<template>
  <div>
    
  </div>
</template>

<style>

</style>