<script setup>
import { computed, ref } from 'vue';
import { useGameStore } from "../stores/GameStore.js";

const store = useGameStore()

store.shuffle();
</script>

<template>
  <div id="scoreContainer">
    <p>Jogador Um <b v-if="store.whosPlaying === 'player one'"> (Sua vez!)</b> : {{ store.playerOneScore }}</p> 
    <p>Jogador Dois <b v-if="store.whosPlaying === 'player two'"> (Sua vez!)</b> : {{ store.playerTwoScore }}</p> 
  </div>
</template>

<style scoped>
#scoreContainer{
    display: flex;
    justify-content: space-between;
}
</style>