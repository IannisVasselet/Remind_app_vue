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
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Portugal?'},
                                back: {type: 'text', content: 'Lisbon'},
                                difficulty: '3',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Lisbon', 'Porto', 'Braga']
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Belgium?'},
                                back: {type: 'text', content: 'Brussels'},
                                difficulty: '3',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Brussels', 'Antwerp', 'Ghent']
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Netherlands?'},
                                back: {type: 'text', content: 'Amsterdam'},
                                difficulty: '4',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Amsterdam', 'Rotterdam', 'The Hague']
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Switzerland?'},
                                back: {type: 'text', content: 'Bern'},
                                difficulty: '4',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Bern', 'Zurich', 'Geneva']
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Austria?'},
                                back: {type: 'text', content: 'Vienna'},
                                difficulty: '5',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Vienna', 'Salzburg', 'Innsbruck']
                            },
                            {
                                front: {type: 'text', content: 'What is the capital of Poland?'},
                                back: {type: 'text', content: 'Warsaw'},
                                difficulty: '5',
                                category: 'Geography',
                                theme: 'Capitals',
                                answers: ['Warsaw', 'Krakow', 'Wroclaw']
                            }
                        ],
                    },
                    {
                        name: 'Countries',
                        cards: [
                            {
                                front: {type: 'text', content: 'What is the biggest country in the world?'},
                                back: {type: 'text', content: 'Russia'},
                                difficulty: '1',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Russia', 'Canada', 'China']
                            },
                            {
                                front: {type: 'text', content: 'What is the smallest country in the world?'},
                                back: {type: 'text', content: 'Vatican City'},
                                difficulty: '1',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Vatican City', 'Monaco', 'Nauru']
                            },
                            {
                                front: {type: 'text', content: 'What is the most populated country in the world?'},
                                back: {type: 'text', content: 'China'},
                                difficulty: '2',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['China', 'India', 'USA']
                            },
                            {
                                front: {type: 'text', content: 'What is the least populated country in the world?'},
                                back: {type: 'text', content: 'Vatican City'},
                                difficulty: '2',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Vatican City', 'Tuvalu', 'Nauru']
                            },
                            {
                                front: {type: 'text', content: 'What is the most densely populated country in the world?'},
                                back: {type: 'text', content: 'Monaco'},
                                difficulty: '3',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Monaco', 'Singapore', 'Hong Kong']
                            },
                            {
                                front: {type: 'text', content: 'What is the least densely populated country in the world?'},
                                back: {type: 'text', content: 'Mongolia'},
                                difficulty: '3',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Mongolia', 'Namibia', 'Australia']
                            },
                            {
                                front: {type: 'text', content: 'What is the richest country in the world?'},
                                back: {type: 'text', content: 'Qatar'},
                                difficulty: '4',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Qatar', 'Luxembourg', 'Singapore']
                            },
                            {
                                front: {type: 'text', content: 'What is the poorest country in the world?'},
                                back: {type: 'text', content: 'Burundi'},
                                difficulty: '4',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Burundi', 'Malawi', 'Central African Republic']
                            },
                            {
                                front: {type: 'text', content: 'What is the most visited country in the world?'},
                                back: {type: 'text', content: 'France'},
                                difficulty: '5',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['France', 'Spain', 'USA']
                            },
                            {
                                front: {type: 'text', content: 'What is the least visited country in the world?'},
                                back: {type: 'text', content: 'Tuvalu'},
                                difficulty: '5',
                                category: 'Geography',
                                theme: 'Countries',
                                answers: ['Tuvalu', 'Kiribati', 'Nauru']
                            },
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
                            {
                                front: {type: 'text', content: 'Who was the leader of Germany during WW2?'},
                                back: {type: 'text', content: 'Max Mustermann'},
                                difficulty: '2',
                                category: 'History',
                                theme: 'WW2',
                                answers: ['Max Mustermann', 'Wolfgang Amadeus Mozart', 'Wolfgang Amadeus Mozart']
                            },
                            {
                                front: {type: 'text', content: 'Who was the leader of Italy during WW2?'},
                                back: {type: 'text', content: 'Giovanni Battista Bellini'},
                                difficulty: '2',
                                category: 'History',
                                theme: 'WW2',
                                answers: ['Giovanni Battista Bellini', 'Leonardo da Vinci', 'Leonardo di Caprio']
                            },
                            {
                                front: {type: 'text', content: 'Who was the leader of Spain during WW2?'},
                                back: {type: 'text', content: 'Juan José Campanella'},
                                difficulty: '3',
                                category: 'History',
                                theme: 'WW2',
                                answers: ['Juan José Campanella', 'Pedro Almodóvar', 'Adolf Hitler']
                            }
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
                            {
                                front: {type: 'text', content: 'How many people died in WW1?'},
                                back: {type: 'text', content: '17 million'},
                                difficulty: '3',
                                category: 'History',
                                theme: 'WW1',
                                answers: ['15 million', '17 million', '19 million']
                            },
                            {
                                front: {type: 'text', content: 'How many people died in WW2?'},
                                back: {type: 'text', content: '60 million'},
                                difficulty: '3',
                                category: 'History',
                                theme: 'WW1',
                                answers: ['50 million', '60 million', '70 million']
                            },
                            {
                                front: {type: 'text', content: 'What is the difference between WW1 and WW2?'},
                                back: {type: 'text', content: 'WW1 was before WW2'},
                                difficulty: '4',
                                category: 'History',
                                theme: 'WW1',
                                answers: ['WW1 was before WW2', 'WW2 was before WW1', 'WW1 and WW2 are the same']
                            },
                            {
                                front: {type: 'text', content: 'What is the pourcentage of people who died in WW1 compared to the world population?'},
                                back: {type: 'text', content: '1.5%'},
                                difficulty: '4',
                                category: 'History',
                                theme: 'WW1',
                                answers: ['1.5%', '2%', '2.5%']
                            },
                            {
                                front: {type: 'text', content: 'What is the pourcentage of people who died in WW2 compared to the world population?'},
                                back: {type: 'text', content: '3%'},
                                difficulty: '5',
                                category: 'History',
                                theme: 'WW1',
                                answers: ['5%', '3.5%', '3%']
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
