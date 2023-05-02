// import {defineStore} from 'pinia';
//
// const difficulties = [1, 2, 3, 4, 5];
// export const useCardStore = defineStore({
//     id: 'card',
//     state: () => ({
//         cards: [
//             {
//                 front: {type: 'text', content: 'What is the capital of France?'},
//                 back: {type: 'text', content: 'Paris'},
//                 difficulty: '1',
//             },
//             {
//                 front: {type: 'text', content: 'What is the capital of Germany?'},
//                 back: {type: 'text', content: 'Berlin'},
//                 difficulty: '2',
//             },
//             {
//                 front: {type: 'text', content: 'What is the capital of Italy?'},
//                 back: {type: 'text', content: 'Rome'},
//                 difficulty: '2',
//             },
//             {
//                 front: {type: 'text', content: 'What is the capital of Spain?'},
//                 back: {type: 'text', content: 'Madrid'},
//                 difficulty: '3',
//             },
//             {
//                 front: {type: 'text', content: 'What is the capital of Portugal?'},
//                 back: {type: 'text', content: 'Lisbon'},
//                 difficulty: '3',
//             },
//             {
//                 front: {type: 'text', content: 'What is the capital of Greece?'},
//                 back: {type: 'text', content: 'Athens'},
//                 difficulty: '4',
//             },
//             /* Carte avec une images Paris */
//             {
//                 front: { type: 'image', content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Paris_Night.jpg/1200px-Paris_Night.jpg' },
//                 back: { type: 'text', content: 'Paris' },
//                 difficulty: '4',
//             },
//             /* Carte avec une vidéo de présentation de la ville de Paris */
//             {
//                 front: { type: 'video', content: 'https://www.youtube.com/embed/5qap5aO4i9A' },
//                 back: { type: 'text', content: 'Paris' },
//                 difficulty: '2',
//             },
//             /* Carte avec un audio de Paris */
//             {
//                 front: { type: 'audio', content: 'https://www.youtube.com/embed/5qap5aO4i9A' },
//                 back: { type: 'text', content: 'Paris' },
//                 difficulty: '5',
//             }
//         ],
//         revisionLevels: 5,
//         newCardsPerDay: 10,
//         reminders: [], // Ajoutez une propriété pour les rappels
//     }),
//     actions: {
//         addCard(card) {
//             this.cards.push(card);
//         },
//         removeCard(index) {
//             this.cards.splice(index, 1);
//         },
//         updateCard(index, updatedCard) {
//             this.cards[index] = updatedCard;
//         },
//         setRevisionLevels(levels) {
//             this.revisionLevels = levels;
//         },
//         setNewCardsPerDay(cards) {
//             this.newCardsPerDay = cards;
//         },
//         addReminder(reminder) {
//             this.reminders.push(reminder);
//         },
//         removeReminder(index) {
//             this.reminders.splice(index, 1);
//         },
//         updateReminder(index, reminder) {
//             this.reminders[index] = reminder;
//         },
//     },
// });

import { defineStore } from 'pinia';

export const useCardStore = defineStore({
    id: 'card',
    state: () => ({
        // cards: [
        //     {
        //         front: {type: 'text', content: 'What is the capital of France?'},
        //         back: {type: 'text', content: 'Paris'},
        //         difficulty: '1',
        //         category: 'Geography',
        //         theme: 'Capitals',
        //         answers: ['Paris', 'Lyon', 'Marseille']
        //     }
        // ],
        revisionLevels: 5,
        newCardsPerDay: 10,
        reminders: [],
    }),
    actions: {
        setRevisionLevels(levels) {
            this.revisionLevels = levels;
        },
        setNewCardsPerDay(cards) {
            this.newCardsPerDay = cards;
        },
        addReminder(reminder) {
            this.reminders.push(reminder);
        },
        removeReminder(index) {
            this.reminders.splice(index, 1);
        },
        updateReminder(index, reminder) {
            this.reminders[index] = reminder;
        },
    },
});

