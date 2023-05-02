<template>
    <div class="revision">
        <h1>Révision</h1>
        <select v-model="selectedCategory" @change="selectedTheme = ''" class="revision-selector">
            <option value="">Sélectionnez une catégorie</option>
            <option v-for="(category, index) in categories" :key="index" :value="index">{{ category.name }}</option>
        </select>
        <select v-model="selectedTheme" :disabled="selectedCategory === ''" class="revision-selector">
            <option value="">Sélectionnez un thème</option>
            <option v-for="(theme, index) in themes" :key="index" :value="index">{{ theme.name }}</option>
        </select>

        <div v-if="currentCard" class="card">
            <div v-if="showFront" class="card-content">
                <template v-if="currentCard.front.type === 'text'">{{ currentCard.front.content }}</template>
                <img v-else-if="currentCard.front.type === 'image'" :src="currentCard.front.content" alt="Image"/>
                <audio v-else-if="currentCard.front.type === 'audio'" :src="currentCard.front.content" controls></audio>
                <video v-else-if="currentCard.front.type === 'video'" :src="currentCard.front.content" controls></video>
                niveau de difficulté : {{ currentCard.difficulty }}
            </div>
            <div v-else class="card-content">
                <template v-if="currentCard.back.type === 'text'">{{ currentCard.back.content }}</template>
                <img v-else-if="currentCard.back.type === 'image'" :src="currentCard.back.content" alt="Image"/>
                <audio v-else-if="currentCard.back.type === 'audio'" :src="currentCard.back.content" controls></audio>
                <video v-else-if="currentCard.back.type === 'video'" :src="currentCard.back.content" controls></video>
            </div>
            <div class="card-actions">
                <button class="card-action" @click="showFront = !showFront">Retourner la carte</button>
                <button class="card-action" @click="nextCard">Carte suivante</button>
            </div>
        </div>
        <div v-else>
            <p>Aucune carte à réviser pour aujourd'hui.</p>
        </div>

<!--        <div class="revision-settings">-->
<!--            <div>-->
<!--                <label for="difficulty">Niveau de difficulté :</label>-->
<!--                <select id="difficulty" v-model="selectedDifficulty" @change="updateRevisionLevels">-->
<!--                    <option value="all">Tous les niveaux</option>-->
<!--                    <option v-for="level in difficultyLevels" :value="level">{{ level }}</option>-->
<!--                </select>-->
<!--            </div>-->
<!--            <div>-->
<!--                <label for="cardsToReview">Nombre de cartes à réviser :</label>-->
<!--                <input type="number" id="cardsToReview" v-model.number="cardsToReview" min="1" max="10"-->
<!--                       @change="updateNewCardsPerDay"/>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
import {ref, computed, watch} from 'vue';
import {useCategoryStore} from '../stores/categoryStore';
import {useCardStore} from '../stores/cardStore';

export default {
    setup() {
        const categoryStore = useCategoryStore();
        const cardStore = useCardStore();
        const selectedCategory = ref('');
        const selectedTheme = ref('');

        const categories = computed(() => categoryStore.categories);
        const themes = computed(() => {
            if (selectedCategory.value !== '') {
                return categories.value[selectedCategory.value].themes;
            }
            return [];
        });

        const currentCard = ref(null);
        const showFront = ref(true);

        function getFilteredCards() {
            if (selectedTheme.value === '') return [];
            const cards = themes.value[selectedTheme.value].cards;
            return cards;
        }

        function nextCard() {
            const filteredCards = getFilteredCards();
            const currentIndex = filteredCards.indexOf(currentCard.value);

            if (currentIndex < filteredCards.length - 1) {
                currentCard.value = filteredCards[currentIndex + 1];
            } else {
                currentCard.value = null;
            }
            showFront.value = true;
        }

        watch(selectedTheme, () => {
            const filteredCards = getFilteredCards();
            if (filteredCards.length > 0) {
                currentCard.value = filteredCards[0];
            } else {
                currentCard.value = null;
            }
        });

        return {
            selectedCategory,
            selectedTheme,
            categories,
            themes,
            currentCard,
            showFront,
            nextCard,
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

.revision-selector {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
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
