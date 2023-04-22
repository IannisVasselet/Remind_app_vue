<template>
    <div>
        <h1>Cartes</h1>
        <ul>
            <li v-for="(card, index) in cardStore.cards" :key="index">
                {{ card.front }} - {{ card.back }}
                <button @click="cardStore.removeCard(index)">Supprimer</button>
            </li>
        </ul>
        <div>
            <input v-model="newCard.front" placeholder="Recto" />
            <input v-model="newCard.back" placeholder="Verso" />
            <button @click="addCard">Ajouter une carte</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useCardStore } from '../stores/cardStore';

export default {
    setup() {
        const cardStore = useCardStore();
        const newCard = ref({ front: '', back: '' });

        function addCard() {
            cardStore.addCard(newCard.value);
            newCard.value = { front: '', back: '' };
        }

        return { cardStore, newCard, addCard };
    },
};
</script>
