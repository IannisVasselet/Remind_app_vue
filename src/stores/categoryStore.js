import { defineStore } from 'pinia';

// The store name is used in devtools and allows restoring state
export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: [],
    }),
    actions: {
        addCategory(category) {
            this.categories.push(category);
        },
        removeCategory(index) {
            this.categories.splice(index, 1);
        },
    },
});
