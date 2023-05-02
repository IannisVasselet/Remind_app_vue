import {defineStore} from 'pinia';

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: [
            {
                name: 'Geography',
                themes: [
                    {
                        name: 'Capitals',
                        cards: [
                            {
                                front: {type: 'text', content: 'What is the capital of France?'},
                                back: {type: 'text', content: 'Paris'},
                                difficulty: '1',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Paris', 'Lyon', 'Marseille']
                            }
                        ],
                    }
                ],
            },
        ],
    }),
    actions: {
        addCategory(category) {
            this.categories.push({...category, themes: []});
        },
        removeCategory(index) {
            this.categories.splice(index, 1);
        },
        addTheme(categoryIndex, theme) {
            this.categories[categoryIndex].themes.push({...theme, cards: []});
        },
        removeTheme(categoryIndex, themeIndex) {
            this.categories[categoryIndex].themes.splice(themeIndex, 1);
        },
        addCard(card) {
            const categoryIndex = this.categories.findIndex(category => category.name === card.category);
            const themeIndex = this.categories[categoryIndex].themes.findIndex(theme => theme.name === card.theme);
            this.categories[categoryIndex].themes[themeIndex].cards.push(card);
        },
        removeCard(categoryIndex, themeIndex, cardIndex) {
            this.categories[categoryIndex].themes[themeIndex].cards.splice(cardIndex, 1);
        },

    },
});
