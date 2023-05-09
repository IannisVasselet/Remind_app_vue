<!--<template>-->
<!--    <div class="themes">-->
<!--        <h1>Thèmes</h1>-->
<!--        <ul class="theme-list">-->
<!--            <li v-for="(theme, index) in themeStore.themes" :key="index" class="theme-item">-->
<!--                {{ theme.name }}-->
<!--                <button class="theme-delete" @click="themeStore.removeTheme(index)">Supprimer</button>-->
<!--            </li>-->
<!--        </ul>-->
<!--        <div class="theme-input-container">-->
<!--            <input v-model="newThemeName" class="theme-input" placeholder="Nom du thème" />-->
<!--            <button class="theme-add" @click="addTheme">Ajouter un thème</button>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import { ref } from 'vue';-->
<!--import { useThemeStore } from '../stores/themeStore';-->

<!--export default {-->
<!--    setup() {-->
<!--        const themeStore = useThemeStore();-->
<!--        const newThemeName = ref('');-->

<!--        function addTheme() {-->
<!--            themeStore.addTheme({ name: newThemeName.value });-->
<!--            newThemeName.value = '';-->
<!--        }-->

<!--        return { themeStore, newThemeName, addTheme };-->
<!--    },-->
<!--};-->
<!--</script>-->


<template>
    <div class="themes">
        <h2>Thèmes</h2>
        <select v-model="selectedCategory" class="theme-selector">
            <option value="">Sélectionnez une catégorie</option>
            <option v-for="(category, index) in categories" :key="index" :value="index">{{ category.name }}</option>
        </select>
        <ul v-if="selectedCategory !== ''" class="theme-list">
            <li v-for="(theme, index) in themes" :key="index" class="theme-item">
                {{ theme.name }}
                <button @click="removeTheme(selectedCategory, index)" class="theme-delete">Supprimer</button>
            </li>
        </ul>
        <div class="theme-input-container">
            <input v-model="newTheme" placeholder="Ajouter un thème" class="theme-input"/>
            <button @click="addTheme" :disabled="selectedCategory === ''" class="theme-add">Ajouter</button>
        </div>
    </div>
</template>

<script>
import {useCategoryStore} from '../stores/categoryStore';

export default {
    data() {
        return {
            newTheme: '',
            selectedCategory: '',
        };
    },
    computed: {
        categories() {
            const categoryStore = useCategoryStore();
            return categoryStore.categories;
        },
        themes() {
            if (this.selectedCategory !== '') {
                return this.categories[this.selectedCategory].themes;
            }
            return [];
        },
    },
    methods: {
        addTheme() {
            const categoryStore = useCategoryStore();
            categoryStore.addTheme(this.selectedCategory, {
                name: this.newTheme,
                cards: [],
            });
            this.newTheme = '';
        },
        removeTheme(categoryIndex, themeIndex) {
            const categoryStore = useCategoryStore();
            categoryStore.removeTheme(categoryIndex, themeIndex);
        },
    },
};
</script>

<style scoped>
.themes {
    padding: 2rem;
}

.themes h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.theme-selector {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

.theme-list {
    list-style: none;
    padding: 0;
}

.theme-item {
    background-color: #f5f5f5;
    color: #282828;
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
}

.theme-delete {
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.theme-delete:hover {
    background-color: #d32f2f;
}

.theme-input-container {
    display: flex;
    margin-top: 1rem;
}

.theme-input {
    flex: 1;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 10px;
    margin-right: 0.5rem;
}

.theme-add {
    background-color: #00009f;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.theme-add:hover {
    background-color: #1919cb;
}
</style>
