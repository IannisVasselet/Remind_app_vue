<template>
    <div id="app">
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <img src="/logo.png" alt="Logo" />
                </div>
                <ul class="nav-links">
                    <li>
                        <router-link to="/">Catégories</router-link>
                    </li>
                    <li>
                        <router-link to="/themes">Thèmes</router-link>
                    </li>
                    <li>
                        <router-link to="/cards">Cartes</router-link>
                    </li>
                    <li>
                        <router-link to="/revision">Révision</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
    <button @click="requestNotificationPermission">Activer les rappels quotidiens</button>
</template>

<script>
export default {
    name: 'App',
    methods: {
        async requestNotificationPermission() {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            } else {
                console.log('Notification permission denied.');
            }
        },
        scheduleDailyReminder() {
            const now = new Date();
            const reminderTime = new Date(); // Utilisez l'heure choisie par l'utilisateur
            reminderTime.setHours(10, 0, 0, 0); // À titre d'exemple, définissons l'heure du rappel à 10h00

            if (now > reminderTime) {
                reminderTime.setDate(reminderTime.getDate() + 1); // Si l'heure du rappel est déjà passée aujourd'hui, passez au lendemain
            }

            const delay = reminderTime.getTime() - now.getTime();
            setTimeout(() => {
                this.showReminderNotification();
            }, delay);
        },

        showReminderNotification() {
            if (Notification.permission === 'granted') {
                const notification = new Notification('Rappel quotidien', {
                    body: "N'oubliez pas de réviser vos cartes aujourd'hui !",
                    icon: 'logo.png',
                });
                this.scheduleDailyReminder(); // Planifiez le rappel pour le lendemain
            }
        },
    },
};
</script>

<style scoped>
.navbar {
    background-color: #4DBA87;
    padding: 1rem 0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.logo img {
    height: 2rem;
}

.nav-links {
    display: flex;
    list-style: none;
    padding: 0;
}

.nav-links li {
    margin-left: 1.5rem;
}

.nav-links li a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links li a:hover {
    color: #ffffff88;
}

/* Styles spécifiques pour les écrans de taille inférieure ou égale à 768px */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    /* Ajoutez ici des styles pour afficher un menu burger ou une autre solution pour les appareils mobiles */
}
</style>
