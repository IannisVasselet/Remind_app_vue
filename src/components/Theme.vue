<template>
    <div>
        <h1>Thèmes</h1>
        <ul>
            <li v-for="(theme, index) in themeStore.themes" :key="index">
                {{ theme.name }}
                <button @click="themeStore.removeTheme(index)">Supprimer</button>
            </li>
        </ul>
        <input v-model="newThemeName" placeholder="Nom du thème" />
        <button @click="addTheme">Ajouter un thème</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useThemeStore } from '../stores/themeStore';

export default {
    setup() {
        const themeStore = useThemeStore();
        const newThemeName = ref('');

        function addTheme() {
            themeStore.addTheme({ name: newThemeName.value });
            newThemeName.value = '';
        }

        return { themeStore, newThemeName, addTheme };
    },
};
</script>
