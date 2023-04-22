<template>
    <div>
        <h1>Catégories</h1>
        <ul>
            <li v-for="(category, index) in categoryStore.categories" :key="index">
                {{ category }}
                <button @click="categoryStore.removeCategory(index)">Supprimer</button>
            </li>
        </ul>
        <input v-model="newCategory" placeholder="Nom de la catégorie" />
        <button @click="addCategory">Ajouter une catégorie</button>
    </div>
</template>

<script>
import { useCategoryStore } from '../stores/categoryStore';
import {ref} from "vue";

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
