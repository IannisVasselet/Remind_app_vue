<!--<template>-->
<!--    <div class="cards">-->
<!--        <h1>Cartes</h1>-->
<!--        <ul class="card-list">-->
<!--            <li v-for="(card, index) in cardStore.cards" :key="index" class="card-item">-->
<!--                <div>-->
<!--                    <div v-if="card.front.type === 'text'">{{ card.front.content }}</div>-->
<!--                    <img v-else-if="card.front.type === 'image'" :src="card.front.content"/>-->
<!--                    <audio v-else-if="card.front.type === 'audio'" controls>-->
<!--                        <source :src="card.front.content" type="audio/mpeg"/>-->
<!--                    </audio>-->
<!--                    <video v-else-if="card.front.type === 'video'" controls>-->
<!--                        <source :src="card.front.content" type="video/mp4"/>-->
<!--                    </video>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <div v-if="card.back.type === 'text'">{{ card.back.content }}</div>-->
<!--                    <img v-else-if="card.back.type === 'image'" :src="card.back.content"/>-->
<!--                    <audio v-else-if="card.back.type === 'audio'" controls>-->
<!--                        <source :src="card.back.content" type="audio/mpeg"/>-->
<!--                    </audio>-->
<!--                    <video v-else-if="card.back.type === 'video'" controls>-->
<!--                        <source :src="card.back.content" type="video/mp4"/>-->
<!--                    </video>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <label for="difficulty">Niveau de difficulté : {{card.difficulty}}</label>-->

<!--                </div>-->
<!--                <button class="card-delete" @click="cardStore.removeCard(index)">Supprimer</button>-->
<!--            </li>-->
<!--        </ul>-->
<!--        <div class="card-input-container">-->
<!--            &lt;!&ndash; Front type selector &ndash;&gt;-->
<!--            <select v-model="newCard.front.type">-->
<!--                <option value="text" selected>Texte</option>-->
<!--                <option value="image">Image</option>-->
<!--                <option value="audio">Audio</option>-->
<!--                <option value="video">Vidéo</option>-->
<!--            </select>-->
<!--            &lt;!&ndash; Front content input &ndash;&gt;-->
<!--            <input v-if="newCard.front.type === 'text'" v-model="newCard.front.content" class="card-input"-->
<!--                   placeholder="Recto"/>-->
<!--            <input v-else-if="['image', 'audio', 'video'].includes(newCard.front.type)" type="file"-->
<!--                   @change="handleFrontFileUpload"/>-->

<!--            &lt;!&ndash; Back type selector &ndash;&gt;-->
<!--            <select v-model="newCard.back.type">-->
<!--                <option value="text" selected>Texte</option>-->
<!--                <option value="image">Image</option>-->
<!--                <option value="audio">Audio</option>-->
<!--                <option value="video">Vidéo</option>-->
<!--            </select>-->
<!--            &lt;!&ndash; Back content input &ndash;&gt;-->
<!--            <input v-if="newCard.back.type === 'text'" v-model="newCard.back.content" class="card-input"-->
<!--                   placeholder="Verso"/>-->
<!--            <input v-else-if="['image', 'audio', 'video'].includes(newCard.back.type)" type="file"-->
<!--                   @change="handleBackFileUpload"/>-->

<!--            &lt;!&ndash; Card difficulty selector &ndash;&gt;-->
<!--            <select v-model="newCard.difficulty">-->
<!--                <option value="1" selected>1</option>-->
<!--                <option value="2">2</option>-->
<!--                <option value="3">3</option>-->
<!--                <option value="4">4</option>-->
<!--                <option value="5">5</option>-->
<!--            </select>-->

<!--            <button class="card-add" @click="addCard">Ajouter une carte</button>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->


<!--<script>-->
<!--import {ref} from 'vue';-->
<!--import {useCardStore} from '../stores/cardStore';-->

<!--export default {-->
<!--    setup() {-->
<!--        const cardStore = useCardStore();-->
<!--        const newCard = ref({front: {type: '', content: ''}, back: {type: '', content: ''}, difficulty: ''});-->

<!--        function addCard() {-->
<!--            cardStore.addCard(newCard.value);-->
<!--            newCard.value = {front: {type: '', content: ''}, back: {type: '', content: ''}, difficulty: ''};-->
<!--        }-->

<!--        return {-->
<!--            cardStore,-->
<!--            newCard,-->
<!--            addCard,-->
<!--        };-->
<!--    },-->
<!--    methods: {-->
<!--        handleFrontFileUpload(event) {-->
<!--            const file = event.target.files[0];-->
<!--            const reader = new FileReader();-->
<!--            reader.onload = () => {-->
<!--                this.newCard.front.content = reader.result;-->
<!--            };-->
<!--            reader.readAsDataURL(file);-->
<!--        },-->
<!--        handleBackFileUpload(event) {-->
<!--            const file = event.target.files[0];-->
<!--            const reader = new FileReader();-->
<!--            reader.onload = () => {-->
<!--                this.newCard.back.content = reader.result;-->
<!--            };-->
<!--            reader.readAsDataURL(file);-->
<!--        },-->
<!--    }-->
<!--};-->
<!--</script>-->


<!--<template>-->
<!--    <div>-->
<!--        <h2>Cartes</h2>-->
<!--        <select v-model="selectedCategory">-->
<!--            <option value="">Sélectionnez une catégorie</option>-->
<!--            <option v-for="(category, index) in categories" :key="index" :value="index">{{ category.name }}</option>-->
<!--        </select>-->
<!--        <select v-model="selectedTheme" :disabled="selectedCategory === ''">-->
<!--            <option value="">Sélectionnez un thème</option>-->
<!--            <option v-for="(theme, index) in themes" :key="index" :value="index">{{ theme.name }}</option>-->
<!--        </select>-->
<!--        <ul v-if="selectedTheme !== ''">-->
<!--            <li v-for="(card, index) in cards" :key="index">-->
<!--                {{ card.front.content }}-->
<!--                <button @click="removeCard(selectedCategory, selectedTheme, index)">Supprimer</button>-->
<!--            </li>-->
<!--            <li v-for="(answer, index) in cards.answers" :key="index">{{ answer }}</li>-->
<!--        </ul>-->

<!--        <input v-model="newCard" placeholder="Ajouter une carte" />-->
<!--        <button @click="addCard" :disabled="selectedTheme === ''">Ajouter</button>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import { useCategoryStore } from '../stores/categoryStore';-->

<!--export default {-->
<!--    data() {-->
<!--        return {-->
<!--            newCard: '',-->
<!--            selectedCategory: '',-->
<!--            selectedTheme: '',-->
<!--        };-->
<!--    },-->
<!--    computed: {-->
<!--        categories() {-->
<!--            const categoryStore = useCategoryStore();-->
<!--            return categoryStore.categories;-->
<!--        },-->
<!--        themes() {-->
<!--            if (this.selectedCategory !== '') {-->
<!--                return this.categories[this.selectedCategory].themes;-->
<!--            }-->
<!--            return [];-->
<!--        },-->
<!--        cards() {-->
<!--            if (this.selectedTheme !== '') {-->
<!--                return this.themes[this.selectedTheme].cards;-->
<!--            }-->
<!--            return [];-->
<!--        },-->
<!--    },-->
<!--    methods: {-->
<!--        addCard() {-->
<!--            const categoryStore = useCategoryStore();-->
<!--            categoryStore.addCard(this.selectedCategory, this.selectedTheme, {-->
<!--                front: { type: 'text', content: this.newCard },-->
<!--                back: { type: 'text', content: '' },-->
<!--                difficulty: '1',-->
<!--                answers: this.newCard.answers,-->
<!--            });-->
<!--            this.newCard = '';-->
<!--        },-->
<!--        removeCard(categoryIndex, themeIndex, cardIndex) {-->
<!--            const categoryStore = useCategoryStore();-->
<!--            categoryStore.removeCard(categoryIndex, themeIndex, cardIndex);-->
<!--        },-->

<!--        updateCard(index, updatedCard) {-->
<!--            // Ajouter des réponses par défaut si elles ne sont pas fournies-->
<!--            if (!updatedCard.answers) {-->
<!--                updatedCard.answers = [];-->
<!--            }-->
<!--            this.cards[index] = updatedCard;-->
<!--        },-->
<!--    },-->
<!--};-->
<!--</script>-->

<template>
    <div class="cards">
        <h1>Cartes</h1>
        <select v-model="selectedCategory" class="card-selector">
            <option value="">Sélectionnez une catégorie</option>
            <option v-for="(category, index) in categories" :key="index" :value="index">{{ category.name }}</option>
        </select>
        <select v-model="selectedTheme" :disabled="selectedCategory === ''" class="card-selector">
            <option value="">Sélectionnez un thème</option>
            <option v-for="(theme, index) in themes" :key="index" :value="index">{{ theme.name }}</option>
        </select>
        <ul class="card-list" v-if="selectedTheme !== ''">
            <li v-for="(card, index) in cards" :key="index" class="card-item">
<!--            <li v-for="(card, index) in cardStore.cards" :key="index" class="card-item">-->
                <div>
                    <div v-if="card.front.type === 'text'">{{ card.front.content }}</div>
                    <img v-else-if="card.front.type === 'image'" :src="card.front.content" alt="image"/>
                    <audio v-else-if="card.front.type === 'audio'" controls>
                        <source :src="card.front.content" type="audio/mpeg"/>
                    </audio>
                    <video v-else-if="card.front.type === 'video'" controls>
                        <source :src="card.front.content" type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <div v-if="card.back.type === 'text'">{{ card.back.content }}</div>
                    <img v-else-if="card.back.type === 'image'" :src="card.back.content" alt="image"/>
                    <audio v-else-if="card.back.type === 'audio'" controls>
                        <source :src="card.back.content" type="audio/mpeg"/>
                    </audio>
                    <video v-else-if="card.back.type === 'video'" controls>
                        <source :src="card.back.content" type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <label for="difficulty">Niveau de difficulté : {{ card.difficulty }}</label>
                </div>
                <div>
                    <label for="answers">Réponses : {{ card.answers }}</label>
                </div>
                <button class="card-delete" @click="removeCard(index)">Supprimer</button>
            </li>
        </ul>
        <div class="card-input-container">
            <ul v-if="selectedTheme !== ''" class="card-list">
                <li class="card-item">
                    <!-- Front type selector -->
                    <select v-model="newCard.front.type" class="card-selector-item">
                        <option value="text" selected>Texte</option>
                        <option value="image">Image</option>
                        <option value="audio">Audio</option>
                        <option value="video">Vidéo</option>
                    </select>
                    <!-- Front content input -->
                    <input v-if="newCard.front.type === 'text'" v-model="newCard.front.content" class="card-input"
                           placeholder="Recto"/>
                    <input v-else-if="['image', 'audio', 'video'].includes(newCard.front.type)" type="file"
                           @change="handleFrontFileUpload"/>
                    <!-- Back type selector -->
                    <select v-model="newCard.back.type" class="card-selector-item">
                        <option value="text" selected>Texte</option>
                        <option value="image">Image</option>
                        <option value="audio">Audio</option>
                        <option value="video">Vidéo</option>
                    </select>
                    <!-- Back content input -->
                    <input v-if="newCard.back.type === 'text'" v-model="newCard.back.content" class="card-input"
                           placeholder="Verso"/>
                    <input v-else-if="['image', 'audio', 'video'].includes(newCard.back.type)" type="file"
                           @change="handleBackFileUpload"/>
                    <!-- Card answers input -->
                    <input v-model="newAnswer" class="card-input" placeholder="Réponse" @keyup.enter="addAnswer"/>
                    <button class="card-add" @click="addAnswer">Ajouter une réponse</button>
                    <!-- Card difficulty selector -->
                    <select v-model="newCard.difficulty" class="card-selector-item">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </li>
            </ul>
            <button class="card-add" @click="addCard">Ajouter une carte</button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import {useCardStore} from '../stores/cardStore';
import {useCategoryStore} from "../stores/categoryStore";

export default {
    data() {
        return {
            newCard: '',
            selectedCategory: '',
            selectedTheme: '',
        };
    },
    setup() {
        const cardStore = useCardStore();
        const categoryStore = useCategoryStore();
        const newAnswer = ref('');
        const newCard = ref({
            front: {type: '', content: ''},
            back: {type: '', content: ''},
            difficulty: '',
            category: '',
            theme: '',
            answers: []
        });

        function addAnswer() {
            if (newAnswer.value.trim()) {
                newCard.value.answers.push(newAnswer.value.trim());
                newAnswer.value = '';
            }
        }

        return {
            cardStore,
            categoryStore,
            newCard,
            newAnswer,
            addAnswer,
        };
    },
    computed: {
        categories() {
            const categoryStore = useCategoryStore();
            console.log('Categories:', categoryStore.categories);
            return categoryStore.categories;
        },
        themes() {
            if (this.selectedCategory !== '') {
                console.log('Themes:', this.categories[this.selectedCategory].themes);
                return this.categories[this.selectedCategory].themes;
            }
            return [];
        },
        cards() {
            if (this.selectedTheme !== '') {
                console.log('Cards:', this.themes[this.selectedTheme].cards);
                return this.categories[this.selectedCategory].themes[this.selectedTheme].cards;            }
            return [];
        }
    },
    methods: {
        addCard() {
            this.newCard.category = this.categories[this.selectedCategory].name;
            this.newCard.theme = this.themes[this.selectedTheme].name;
            const categoryStore = useCategoryStore();
            categoryStore.addCard(this.newCard);
            this.newCard = {
                front: {type: '', content: ''},
                back: {type: '', content: ''},
                difficulty: '',
                category: '',
                theme: '',
                answers: []
            };
        },

        removeCard(categoryIndex, themeIndex, cardIndex) {
            const categoryStore = useCategoryStore();
            categoryStore.removeCard(categoryIndex, themeIndex, cardIndex);
        },


        handleFrontFileUpload(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.newCard.front.content = reader.result;
            };
            reader.readAsDataURL(file);
        },
        handleBackFileUpload(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.newCard.back.content = reader.result;
            };
            reader.readAsDataURL(file);
        },
    }
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

.card-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

.card-selector-item {
    flex: 1;
    margin-right: 1rem;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
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