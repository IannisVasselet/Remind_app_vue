import { defineStore } from 'pinia';

export const useCardStore = defineStore({
    id: 'card',
    state: () => ({
        cards: [],
        revisionLevels: 5,
        newCardsPerDay: 10,
        reminders: [], // Ajoutez une propriété pour les rappels
    }),
    actions: {
        addCard(card) {
            this.cards.push(card);
        },
        removeCard(index) {
            this.cards.splice(index, 1);
        },
        updateCard(index, updatedCard) {
            this.cards[index] = updatedCard;
        },
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
