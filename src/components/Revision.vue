<template>
    <div class="revision">
        <h1>Révision</h1>
        <div class="revision-settings">
            <div class="revision-settings-item">
                <label for="difficulty">Niveau de difficulté :</label>
                <select v-model="selectedDifficulty" class="revision-selector">
                    <option value="">Sélectionnez un niveau de difficulté</option>
                    <option v-for="difficulty in difficulties" :key="difficulty" :value="difficulty">{{
                        difficulty
                        }}
                    </option>
                </select>
            </div>
            <div class="revision-settings-item">
                <label for="cardsToReview">Nombre de cartes à réviser :</label>
                <input v-model="cardsToReview" type="number" placeholder="Nombre de cartes à réviser"
                       class="revision-input" min="1" max="10"/>
            </div>
        </div>
        <select v-model="selectedCategory" @change="selectedTheme = ''" class="revision-selector">
            <option value="">Sélectionnez une catégorie</option>
            <option v-for="(category, index) in categories" :key="index" :value="index">{{ category.name }}</option>
        </select>
        <select v-model="selectedTheme" multiple :disabled="selectedCategory === ''" class="revision-selector">
            <option value="">Sélectionnez un ou plusieurs thèmes</option>
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
<!--                <button class="card-action" @click="nextCard">Carte suivante</button>-->
            </div>
            <div class="card-answers">
                <div
                        v-for="(answer, index) in currentCard.answers"
                        :key="index"
                        @click="userAnswers[index] = userAnswers[index] === answer ? null : answer"
                        :class="{ 'selected list-answer-item': userAnswers[index] }"
                >
                    <div class="card-answers-item">
                        {{ answer }}
                    </div>
                </div>
            </div>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            <button @click="checkAnswers" class="card-action">Soumettre</button>
        </div>
        <div v-else>
            <p>Aucune carte à réviser pour aujourd'hui.</p>
        </div>
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

        const selectedDifficulty = ref('');
        const cardsToReview = ref('');
        const difficulties = ref(['1', '2', '3', '4', '5']);

        const levelsToReview = ref('');
        const newCardsPerDay = ref('');

        const categories = computed(() => categoryStore.categories);
        const themes = computed(() => {
            if (selectedCategory.value !== '') {
                return categories.value[selectedCategory.value].themes;
            }
            return [];
        });

        const currentCard = ref(null);
        const showFront = ref(true);

        const userAnswers = ref([]);
        const currentLevel = ref(1);
        const errorMessage = ref("");
        const currentIndex = ref(0);


        function getFilteredCards() {
            let filteredCards = [];
            if (selectedTheme.value.length === 0) return [];
            selectedTheme.value.forEach(themeIndex => {
                let cards = themes.value[themeIndex].cards;
                if (selectedDifficulty.value) {
                    cards = cards.filter(card => card.difficulty === selectedDifficulty.value);
                }
                if (levelsToReview.value) {
                    cards = cards.filter(card => card.level <= levelsToReview.value);
                }
                if (cardsToReview.value) {
                    cards = cards.slice(0, cardsToReview.value);
                }
                filteredCards = [...filteredCards, ...cards];
            });
            return filteredCards;
        }

        function nextCard() {
            // const filteredCards = getFilteredCards();
            // const currentIndex = filteredCards.indexOf(currentCard.value);
            //
            // if (currentIndex < filteredCards.length - 1) {
            //     currentCard.value = filteredCards[currentIndex + 1];
            // } else {
            //     currentCard.value = null;
            // }
            // showFront.value = true;
            const filteredCards = getFilteredCards();

            if (currentIndex.value < filteredCards.length) {
                currentCard.value = filteredCards[currentIndex.value];
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

        function checkAnswers() {
            let isCorrect = true;
            console.log("Réponse de la carte :" + currentCard.value.back.content);
            console.log("Réponse de l'utilisateur :" + userAnswers.value);
            userAnswers.value.forEach((answer, index) => {
                if (answer !== currentCard.value.back.content) {
                    isCorrect = false;
                    console.log("erreur");
                }
            });
            if (isCorrect) {
                errorMessage.value = "";
                if (currentLevel.value < 5) {
                    currentLevel.value += 1;
                }
                currentIndex.value += 1;
            } else {
                errorMessage.value = "Réponse incorrecte. La série recommence.";
                currentIndex.value = 0;
            }
            // on vide la liste des réponses
            userAnswers.value = [];

            nextCard();
        }


        return {
            selectedCategory,
            selectedTheme,
            categories,
            themes,
            currentCard,
            showFront,
            nextCard,
            selectedDifficulty,
            cardsToReview,
            difficulties,
            levelsToReview,
            newCardsPerDay,
            checkAnswers,
            userAnswers,
            currentLevel,
            errorMessage,
            currentIndex,
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
    margin: 1%;
}

.card {
    background-color: #f5f5f5;
    color: black;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    border-radius: 10px;
    opacity: 0.7;
}

.card-content {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.card-answers {
    background-color: #f5f5f5;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}

.card-answers-item {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.card-answers-item:hover {
    cursor: pointer;
}

.card-actions {
    display: flex;
    justify-content: center;
}

.card-action {
    background-color: #00009f;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 0.5rem;
}

.card-action:hover {
    background-color: #1919cb;
}

.revision-settings {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: #282828;
}

.revision-settings-item {
    background-color: rgba(255, 255, 255, 0.96);
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    padding: 1.5rem;
    position: relative;
    display: flex;
    margin: 1%;
    flex: 1 1 30%;
    justify-content: space-between;
    min-width: 0;
    word-wrap: break-word;
    height: 50px;
    align-items: center;
    flex-direction: column;
}

.revision-settings label {
    margin-right: 0.5rem;
}

.revision-settings input {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
}

.list-answer-item {
    text-decoration: underline #000000;
    font-weight: bold;
    font-size: 1.25rem;
}

.error-message {
    color: red;
    font-weight: bold;
    text-blink: 1s;
}

@media (max-width: 768px) {
    .revision-settings {
        flex-direction: column;
    }

    .revision-settings-item {
        margin: 1% 0;
        width: -moz-available;
    }

}

</style>
