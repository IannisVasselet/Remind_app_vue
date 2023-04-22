<template>
    <div class="categories">
        <h1>Catégories</h1>
        <ul class="category-list">
            <li v-for="(category, index) in categoryStore.categories" :key="index" class="category-item">
                {{ category }}
                <button class="category-delete" @click="categoryStore.removeCategory(index)">Supprimer</button>
            </li>
        </ul>
        <div class="category-input-container">
            <input v-model="newCategory" class="category-input" placeholder="Nom de la catégorie" />
            <button class="category-add" @click="addCategory">Ajouter une catégorie</button>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";
import { useCategoryStore } from '../stores/categoryStore';

export default {
    setup() {
        const categoryStore = useCategoryStore();
        const newCategory = ref('');

        function addCategory() {
            categoryStore.addCategory(newCategory.value);
            newCategory.value = '';
        }

        return { categoryStore, newCategory, addCategory };
    },
};
</script>

<style scoped>
.categories {
    padding: 2rem;
}

.categories h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.category-list {
    list-style: none;
    padding: 0;
}

.category-item {
    background-color: #f5f5f5;
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.category-delete {
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.category-delete:hover {
    background-color: #d32f2f;
}

.category-input-container {
    display: flex;
    margin-top: 1rem;
}

.category-input {
    flex: 1;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
}

.category-add {
    background-color: #4DBA87;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.category-add:hover {
    background-color: #319a6b;
}
</style>
