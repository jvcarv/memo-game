import { defineStore } from 'pinia'
import { computed, ref} from 'vue'

export const useGameStore = defineStore('GameStore',() =>  {
    const playerOneScore = ref(0)
    const playerTwoScore = ref(0)

    const firstCard = ref()
    const secondCard = ref()

    const whoWon = computed(() => {
      return playerOneScore > playerTwoScore? "O jogador 1 ganhou!" : "O jogador 2 ganhou!"
    })

    const whosPlaying = ref('player one')

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
          id: 5,
          image: '🦊',
          name: 'Fox',
          flipped: false,
          matched: false
        },
        {
          id: 6,
          image: '🦊',
          name: 'Fox',
          flipped: false,
          matched: false
        },
        {
          id: 7,
          image: '🐻',
          name: 'Bear',
          flipped: false,
          matched: false
        },
        {
          id: 8,
          image: '🐻',
          name: 'Bear',
          flipped: false,
          matched: false
        },
        {
          id: 9,
          image: '🐵',
          name: 'Monkey',
          flipped: false,
          matched: false
        },
        {
          id: 10,
          image: '🐵',
          name: 'Monkey',
          flipped: false,
          matched: false
        },
        {
          id: 11,
          image: '🦝',
          name: 'Raccoon',
          flipped: false,
          matched: false
        },
        {
          id: 12,
          image: '🦝',
          name: 'Raccoon',
          flipped: false,
          matched: false
        },
        {
          id: 13,
          image: '🐼',
          name: 'Panda',
          flipped: false,
          matched: false
        },
        {
          id: 14,
          image: '🐼',
          name: 'Panda',
          flipped: false,
          matched: false
        },
        {
          id: 15,
          image: '🐨',
          name: 'Koala',
          flipped: false,
          matched: false
        },
        {
          id: 16,
          image: '🐨',
          name: 'Koala',
          flipped: false,
          matched: false
        },
        {
          id: 17,
          image: '🐯',
          name: 'Tiger',
          flipped: false,
          matched: false
        },
        {
          id: 18,
          image: '🐯',
          name: 'Tiger',
          flipped: false,
          matched: false
        },
        {
          id: 19,
          image: '🦁',
          name: 'Lion',
          flipped: false,
          matched: false
        },
        {
          id: 20,
          image: '🦁',
          name: 'Lion',
          flipped: false,
          matched: false
        },
    ])

    const cardsMatched = ref<object[]>([])

    const ifPair = computed(() => {
        if (firstCard.value != null && secondCard.value != null){
            if (firstCard.value.name == secondCard.value.name) return true;   
            else return false;
        }  
    })

    const checkIfGameEnds = computed(() =>{
       if(cardsArray.value.length === cardsMatched.value.length) return true
       else false
    })

    function shuffle(){
      return cardsArray.value.sort(() => Math.random() - 0.5);
    };

    function $resetAll(){
      //embaralha as cartas
      shuffle();

      //resetando os placares
      playerOneScore.value = 0;
      playerTwoScore.value = 0;

      //resetando quem começa
      whosPlaying.value = 'player one';

      //resetando o array de cartas que tem par
      cardsMatched.value = [];

      //virando as cartas para baixo
      for(const card of cardsArray.value){
        card.flipped = false;
        card.matched = false;
      }
    }

    function $reset(){
        firstCard.value = null
        secondCard.value = null
    }

    function matching(){
      if(whosPlaying.value === 'player one'){
        playerOneScore.value++
      } else {
        playerTwoScore.value++
      }
        firstCard.value.flipped = true;
        firstCard.value.matched = true;
        secondCard.value.flipped = true;
        secondCard.value.matched = true;
        cardsMatched.value.push(firstCard.value);
        cardsMatched.value.push(secondCard.value); 
        $reset()
    }
    return { whoWon, playerOneScore, playerTwoScore, firstCard, secondCard, ifPair, cardsArray, matching, $reset, $resetAll, whosPlaying, checkIfGameEnds, shuffle }
})