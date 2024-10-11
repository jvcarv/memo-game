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
    h1{
      margin-top: 0;
      margin-bottom: 0;
    }

    .cards{
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-gap: 10px;
    }

    @media (max-width: 460px) {
        .cards{
          grid-template-columns: repeat(4, 80px);
          grid-gap: 7px;
          max-width: 400px;
        }
    }

    button {
        background-color: rgba(210, 131, 21, 0.212);
        border-radius: 8px;
        border-width: 0;
        color: #333333;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        list-style: none;
        margin-top: 12px;
        padding: 10px 12px;
        text-align: center;
        transition: all 200ms;
        vertical-align: baseline;
        white-space: nowrap;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }

</style>