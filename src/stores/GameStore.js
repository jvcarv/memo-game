import { defineStore } from 'pinia'
import { computed, reactive, ref} from 'vue'

export const useGameStore = defineStore('GameStore',() =>  {
    const playerOneScore = ref(0)
    const playerTwoScore = ref(0)

    const firstCard = ref()
    const secondCard = ref()

    const cardsArray = ref([
        {
          id: 1,
          image: '🐶',
          name: 'Dog',
          flipped: false,
          matched: false
        },
        {
          id: 2,
          image: '🐶',
          name: 'Dog',
          flipped: false,
          matched: false
        },
        {
          id: 3,
          image: '🐱',
          name: 'Cat',
          flipped: false,
          matched: false
        },
        {
          id: 4,
          image: '🐱',
          name: 'Cat',
          flipped: false,
          matched: false
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
    ])

    const ifPair = computed(() => {
        if (firstCard.value != null && secondCard.value != null){
            if (firstCard.value.name == secondCard.value.name) return true;   
            else return false;
        }  
    })

    function $reset(){
        firstCard.value = null
        secondCard.value = null
    }

    function matching(){
        firstCard.value.flipped = true;
        firstCard.value.matched = true;
        secondCard.value.flipped = true;
        secondCard.value.matched = true;
        $reset()
    }
    return { playerOneScore, playerTwoScore, firstCard, secondCard, ifPair, cardsArray, matching, $reset }
})