import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        themes: [],
    }),
    actions: {
        addTheme(theme) {
            this.themes.push(theme);
        },
        removeTheme(index) {
            this.themes.splice(index, 1);
        },
    },
});
