<template>
    <div class="revision">
        <h1>Révision</h1>
        <div v-if="currentCard" class="card">
            <div v-if="showFront" class="card-content">
                {{ currentCard.front }}
            </div>
            <div v-else class="card-content">
                {{ currentCard.back }}
            </div>
            <div class="card-actions">
                <button class="card-action" @click="showFront = !showFront">Retourner la carte</button>
                <button class="card-action" @click="nextCard">Carte suivante</button>
            </div>
        </div>
        <div v-else>
            <p>Aucune carte à réviser pour aujourd'hui.</p>
        </div>
        <div class="revision-settings">
            <label for="revisionLevels">Niveaux de révision :</label>
            <input type="number" id="revisionLevels" v-model.number="revisionLevels" min="1" max="5" placeholder="1" @change="updateRevisionLevels" />
        </div>
        <div class="revision-settings">
            <label for="newCardsPerDay">Nouvelles cartes par jour :</label>
            <input type="number" id="newCardsPerDay" v-model.number="newCardsPerDay" min="1" max="10" @change="updateNewCardsPerDay" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useCardStore } from '../stores/cardStore';

export default {
    setup() {
        const cardStore = useCardStore();
        const currentCard = ref(cardStore.cards[0]);
        const showFront = ref(true);
        const { revisionLevels, newCardsPerDay, setRevisionLevels, setNewCardsPerDay } = useCardStore();

        function updateRevisionLevels() {
            setRevisionLevels(revisionLevels.value);
        }
        function updateNewCardsPerDay() {
            setNewCardsPerDay(newCardsPerDay.value);
        }
        function nextCard() {
            const currentIndex = cardStore.cards.indexOf(currentCard.value);
            if (currentIndex < cardStore.cards.length - 1) {
                currentCard.value = cardStore.cards[currentIndex + 1];
            } else {
                currentCard.value = null;
            }
            showFront.value = true;
        }

        return { currentCard,
            showFront,
            nextCard,
            revisionLevels,
            newCardsPerDay,
            updateRevisionLevels,
            updateNewCardsPerDay,
        };
    },
};
</script>

<style scoped>
.revision {
    padding: 2rem;
}

.revision h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.card {
    background-color: #f5f5f5;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}

.card-content {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.card-actions {
    display: flex;
    justify-content: center;
}

.card-action {
    background-color: #4DBA87;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 0.5rem;
}

.card-action:hover {
    background-color: #319a6b;
}

.revision-settings {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

.revision-settings label {
    margin-right: 0.5rem;
}

.revision-settings input {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
}
</style>