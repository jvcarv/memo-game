<script setup>
import { useGameStore } from "../stores/GameStore.ts";

const store = useGameStore()

store.shuffle();
</script>

<template>
  <div id="scoreContainer">
    <p v-if="!store.checkIfGameEnds">Jogador Um <b v-if="store.whosPlaying === 'player one'"> (Sua vez!)</b> : {{ store.playerOneScore }}</p> 
    <p v-if="!store.checkIfGameEnds">Jogador Dois <b v-if="store.whosPlaying === 'player two'"> (Sua vez!)</b> : {{ store.playerTwoScore }}</p> 
    <p id='ends' v-if="store.checkIfGameEnds"><b>{{ store.whoWon }}</b></p>
  </div>
</template>

<style scoped>
#scoreContainer{
    display: flex;
    justify-content: space-between;
}
#ends {
    text-align: center;
    margin-left: 8.5rem;
}
@media (max-width: 480px) {
    #ends {
        text-align: center;
        margin-left: 6rem;
    }
}
</style>