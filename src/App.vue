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
    <div id="lamp">
        <div id="top"></div>
        <div id="glass">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>
        <div id="bottom"></div>
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
    color: #fff;
}

/* Styles généraux de la navbar */
.navbar {
    /*background-color: -moz-nativehyperlinktext;*/
    padding: 1rem;
    margin: 2%;
    border-radius: 30px;
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
    color: #cccccc;
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
    background-color: #00009f;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
}

.app-button-remind > button:hover {
    background-color: #1919cb;
}

/* Animation de la lampe */
@keyframes updown {
    0% {
        top: 110%;
    }
    50% {
        top: 0;
    }
    100% {
        top: 110%;
    }
}

@keyframes leftright {
    0% {
        left: 0;
    }
    50% {
        left: 80%;
    }
    100% {
        left: 0;
    }
}

@keyframes vastag {
    0% {
        width: 8vh;
    }
    50% {
        width: 32vh;
    }
    100% {
        width: 8vh;
    }
}

@keyframes forog {
    100% {
        transform: rotate(360deg);
    }
}


body {
    background: radial-gradient(#500, #000);
    margin: 0;
}

body::after {
    content: ' ';
    display: block;
    position: absolute;
    background: linear-gradient(rgba(255, 255, 255, .6), rgba(128, 128, 255, .3));
    width: 4vh;
    height: 70vh;
    margin-left: -17vh;
    left: 50%;
    bottom: 20vh;
    z-index: 2;
    border-radius: 1vh 1vh 2vh 2vh;
    filter: blur(.5vh);
    transform: skewX(-2deg);
}

#lamp {
    width: 40vh;
    height: 100vh;
    margin: 0 auto;
    position: absolute;
    z-index: -1;
    /* center the lamp */
    left: 50%;
    margin-left: -20vh;
    top: 50%;
}

#top, #bottom {
    background: #888;
    background: linear-gradient(111deg, #111 0%, #ccc 45%, #ccc 50%, #888 60%, #111);
}

#top {
    height: 7vh;
    width: 36vh;
    position: relative;
    top: .5vh;
    left: 2vh;
    border-radius: 12vh 12vh 1vh 1vh/66% 66% 2vh 2vh;
    box-shadow: 0 4vh 16vh 16vh rgba(0, 0, 0, .5),
    0 1vh 4vh 4vh rgba(0, 0, 0, .3),
    inset 0 .5vh .5vh rgba(255, 255, 255, .5),
    inset 0 -.3vh .5vh rgba(128, 0, 0, .5);
    z-index: 2;
}

#top::after {
    content: ' ';
    display: block;
    position: absolute;
    background: #fff;
    width: 30vh;
    height: 3vh;
    margin-left: -15vh;
    left: 50%;
    bottom: 4vh;
    z-index: 2;
    border-radius: 48%;
    filter: blur(2vh);
}

#bottom {
    height: 3vh;
    border-radius: 1vh;
    box-shadow: inset 0 -.5vh .5vh rgba(0, 0, 0, .5),
    inset 0 .5vh .5vh rgba(128, 0, 0, .5);
}

#bottom::after {
    content: ' ';
    display: block;
    position: absolute;
    background: yellow;
    width: 30vh;
    height: 4vh;
    margin-left: -15vh;
    left: 50%;
    bottom: 5vh;
    z-index: 2;
    border-radius: 48%;
    filter: blur(3vh);
}

#glass {
    overflow: hidden;
    width: 100%;
    height: 90vh;
    position: relative;
    top: -4vh;
    transform: perspective(100vh) rotateX(12deg);
    filter: contrast(22);
    background: linear-gradient(blue 30%, #60a 80%, #a06 100%);
    box-shadow: inset 0 -5vh 1vh 1vh rgba(255, 0, 0, .6), 0 0 2.5px .2px #808;
    border-radius: 1vh 1vh 5vh 5vh/20%;
}

.bubble {
    height: 16vh;
    border-radius: 40%;
    background: red;
    position: absolute;
    filter: blur(4vh);
    animation: updown linear 37s infinite,
    leftright ease-in-out 23s infinite,
    vastag linear 29s infinite,
    forog linear 31s infinite;
}

.bubble:nth-child(2) {
    animation: updown ease-in 41s infinite,
    leftright ease-in-out 47s infinite,
    vastag linear 23s infinite,
    forog linear 29s infinite;
}

.bubble:nth-child(3) {
    animation: updown ease-out 43s infinite,
    leftright ease-in-out 53s infinite,
    vastag linear 29s infinite,
    forog linear 31s infinite;
}

.bubble:nth-child(4) {
    animation: updown ease-in-out 47s infinite,
    leftright ease-in-out 59s infinite,
    vastag linear 31s infinite,
    forog linear 41s infinite;
}

.bubble:nth-child(5) {
    animation: updown ease-in-out 29s infinite,
    leftright ease-in-out 31s infinite,
    vastag linear 37s infinite,
    forog linear 47s infinite;
}

.bubble:last-child {
    animation: updown linear 53s infinite,
    leftright ease-in-out 29s infinite,
    vastag linear 19s infinite,
    forog linear 37s infinite;
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


