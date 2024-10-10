<script setup lang="ts">

interface cardContent {
    image: string,
    name: string
}

const props = defineProps<{
    cardContent: cardContent
}>()
</script>

<template>
    <div class="card">
        <p id="name">{{props.cardContent.name}}</p>
        <p id="icon">{{props.cardContent.image}}</p>
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
