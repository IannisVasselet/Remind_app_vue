<template>
    <div class="categories">
        <h2>Categories</h2>
        <ul class="category-list">
            <li v-for="(category, index) in categories" :key="index" class="category-item">
                {{ category.name }}
                <button @click="removeCategory(index)" class="category-delete">Supprimer</button>
            </li>
        </ul>
        <div class="category-input-container">
            <input class="category-input" v-model="newCategory" placeholder="Ajouter une catégorie"/>
            <button class="category-add" @click="addCategory">Ajouter</button>
        </div>
    </div>
</template>

<script>
import {useCategoryStore} from '../stores/categoryStore';

export default {
    data() {
        return {
            newCategory: '',
        };
    },
    computed: {
        categories() {
            const categoryStore = useCategoryStore();
            return categoryStore.categories;
        },
    },
    methods: {
        addCategory() {
            const categoryStore = useCategoryStore();
            categoryStore.addCategory({name: this.newCategory});
            this.newCategory = '';
        },
        removeCategory(index) {
            const categoryStore = useCategoryStore();
            categoryStore.removeCategory(index);
        },
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
    color: #282828;
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
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
    border-radius: 10px;
    margin-right: 0.5rem;
}

.category-add {
    background-color: #00009f;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.category-add:hover {
    background-color: #1919cb
}
</style>
