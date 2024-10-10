<script setup lang="ts">
import { ref } from 'vue';

const cardsArray: Array<object> = ref([
    {
      image:  '🐶',
      name: 'Dog'
    }
  , '🐶', '🐱', '🐱', '🦊', '🦊', '🐻', '🐻','🐵','🐵','🦝','🦝',
  '🐼', '🐼', '🐨', '🐨', '🐯', '🐯', '🦁', '🦁','🐭','🐭','🐷','🐷'
]);

const shuffle = () => {
    cardsArray.sort(() => Math.random() - 0.5)
}
</script>

<template>
    <div class="card">
        <p id="name">Raccon</p>
        <p id="icon">🦝</p>
    </div>
</template>

<style scoped>
/* the most external div*/
.card{
    background-color: black;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    width: fit-content;
    padding: 10px;
}

/* the icon in the middle */
#icon{
    margin: 0;
    font-size: 50px;
}

#name{
    margin: 5px 0 5px 0;
    color:bisque;
}
</style>
