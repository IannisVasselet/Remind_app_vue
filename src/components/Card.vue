<template>
    <div class="cards">
        <h1>Cartes</h1>
        <ul class="card-list">
            <li v-for="(card, index) in cardStore.cards" :key="index" class="card-item">
                {{ card.front }} - {{ card.back }} - {{ card.level }}
                <button class="card-delete" @click="cardStore.removeCard(index)">Supprimer</button>
            </li>
        </ul>
        <div class="card-input-container">
            <input v-model="newCard.front" class="card-input" placeholder="Recto" />
            <input v-model="newCard.back" class="card-input" placeholder="Verso" />
            <select v-model="newCard.level" class="card-input">
                <option v-for="level in cardStore.revisionLevels" :key="level" :value="level">{{ level }}</option>
            </select>
            <button class="card-add" @click="addCard">Ajouter une carte</button>
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

<style scoped>
.cards {
    padding: 2rem;
}

.cards h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.card-list {
    list-style: none;
    padding: 0;
}

.card-item {
    background-color: #f5f5f5;
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-delete {
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card-delete:hover {
    background-color: #d32f2f;
}

.card-input-container {
    display: flex;
    margin-top: 1rem;
}

.card-input {
    flex: 1;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
}

.card-add {
    background-color: #4DBA87;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card-add:hover {
    background-color: #319a6b;
}
</style>
