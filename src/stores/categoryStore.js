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
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Germany?'},
                                back: {type: 'text', content: 'Berlin'},
                                difficulty: '1',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Berlin', 'Munich', 'Hamburg']
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Italy?'},
                                back: {type: 'text', content: 'Rome'},
                                difficulty: '2',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Rome', 'Milan', 'Naples']
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Spain?'},
                                back: {type: 'text', content: 'Madrid'},
                                difficulty: '2',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Madrid', 'Barcelona', 'Valencia']
                            }
                        ],
                    }
                ],
            },
            {
                name: 'History',
                themes: [
                    {
                        name: 'WW2',
                        cards: [
                            {
                                front: {type: 'text', content: 'When did WW2 start?'},
                                back: {type: 'text', content: '1939'},
                                difficulty: '1',
                                category: 'History',
                                theme: 'WW2',
                                answers: ['1939', '1940', '1941']
                            },
                            {
                                front: {type: 'text', content: 'When did WW2 end?'},
                                back: {type: 'text', content: '1945'},
                                difficulty: '1',
                                category: 'History',
                                theme: 'WW2',
                                answers: ['1945', '1946', '1947']
                            },
                        ],
                    },
                    {
                        name: 'WW1',
                        cards: [
                            {
                                front: {type: 'text', content: 'When did WW1 start?'},
                                back: {type: 'text', content: '1914'},
                                difficulty: '2',
                                category: 'History',
                                theme: 'WW1',
                                answers: ['1914', '1915', '1916']
                            },
                            {
                                front: {type: 'text', content: 'When did WW1 end?'},
                                back: {type: 'text', content: '1918'},
                                difficulty: '2',
                                category: 'History',
                                theme: 'WW1',
                                answers: ['1918', '1919', '1920']
                            },
                        ],
                    },
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
