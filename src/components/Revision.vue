<template>
    <div>
        <h1>Révision</h1>
        <div v-if="currentCard">
            <div v-if="showFront">
                {{ currentCard.front }}
            </div>
            <div v-else>
                {{ currentCard.back }}
            </div>
            <button @click="showFront = !showFront">Retourner la carte</button>
            <button @click="nextCard">Carte suivante</button>
        </div>
        <div v-else>
            <p>Aucune carte à réviser pour aujourd'hui.</p>
        </div>
        <div>
            <label for="revisionLevels">Niveaux de révision :</label>
            <input type="number" id="revisionLevels" v-model.number="revisionLevels" min="1" @change="updateRevisionLevels" />
        </div>
        <div>
            <label for="newCardsPerDay">Nouvelles cartes par jour :</label>
            <input type="number" id="newCardsPerDay" v-model.number="newCardsPerDay" min="1" @change="updateNewCardsPerDay" />
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
