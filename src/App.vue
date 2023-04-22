<template>
    <div id="app">
        <nav class="navbar">
            <div class="navbar-container">
                <div class="navbar-brand">
                    <!-- Logo et nom de l'application -->
                    <img src="./assets/logo.svg" alt="Logo" class="navbar-logo"/>
                    <span class="navbar-title">RA</span>
                </div>
                <ul class="navbar-links">
                    <!-- Liens de navigation -->
                    <li class="navbar-link">
                        <router-link to="/">Accueil</router-link>
                    </li>
                    <li class="navbar-link">
                        <router-link to="/categories">Catégories</router-link>
                    </li>
                    <li class="navbar-link">
                        <router-link to="/themes">Thèmes</router-link>
                    </li>
                    <li class="navbar-link">
                        <router-link to="/revision">Révision</router-link>
                    </li>
                    <li class="navbar-link">
                        <router-link to="/cards">Cartes</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
    <div class="app-button-remind">
        <button @click="requestNotificationPermission">Activer les rappels quotidiens</button>
    </div>

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
                    icon: 'favicon.ico',
                });
                this.scheduleDailyReminder(); // Planifiez le rappel pour le lendemain
            }
        },
    },
};
</script>

<style>
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

/* Styles généraux de la navbar */
.navbar {
    background-color: #4DBA87;
    padding: 1rem;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.navbar-brand {
    display: flex;
    align-items: center;
}

.navbar-logo {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
}

.navbar-title {
    color: #fff;
    font-size: 1.25rem;
}

.navbar-links {
    list-style: none;
    display: flex;
    align-items: center;
}

.navbar-link {
    margin-left: 1rem;
}

.navbar-link > a {
    color: #fff;
    text-decoration: none;
}

.navbar-link > a:hover {
    text-decoration: underline;
}

.router-link-active {
    font-weight: bold;
}

/* Styles généraux du bouton de rappel quotidien */

.app-button-remind {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}

.app-button-remind > button {
    background-color: #4DBA87;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
}

.app-button-remind > button:hover {
    background-color: #3d9b6d;
}

/* Styles spécifiques pour les écrans de taille inférieure ou égale à 768px */
@media (max-width: 768px) {
    .navbar-container {
        flex-direction: column;
    }

    .navbar-links {
        margin-top: 1rem;
    }
}
</style>


