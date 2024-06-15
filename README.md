# remind_app_v1

## Table des matières

- [Installation du projet](#installation-du-projet)
- [Description du projet](#description-du-projet)
  - [Fonctionnalités](#fonctionnalités)
  - [Technologies utilisées](#technologies-utilisées)
- [Fichier du projet](#fichier-du-projet)
  - [Composants](#composants)
  - [Store](#store)
  - [Fonctionnement hors-ligne](#fonctionnement-hors-ligne)
- [Docker](#docker)
  - [Commandes Docker](#commandes-docker)


## Installation du projet

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
vite
```

### Compile and Minify for Production

```sh
vite build
```

### Preview Production Build

```sh
vite preview
```

## Description du projet

L'objectif de ce projet est de concevoir et développer une application de mémorisation basée sur la répétition espacée. Le principe de la répétition espacée est détaillé ici (https://ncase.me/remember/fr.html).
Description de l'application

L'application permet de réviser des thèmes. Les thèmes contiennent un ensemble de carte de révision, dont il faut se souvenir de ce qui est affiché au verso en fonction du recto de la carte. Le verso comme le recto peut contenir du texte, et/ou un élément multimédia (image, son, vidéo). Les thèmes sont regroupés par catégorie.

L'utilisateur peut donc créer ses propres catégories, y ajouter des thèmes et pour chaque thèmes créer des cartes de révision.

L'utilisateur peut ensuite commencer la révision d'un ou plusieurs thèmes, en choisissant le nombre de niveau qu'il souhaite pour chaque thème, et le nombre de nouvelles cartes vues chaque jour.
Chaque jour, la révision d'un thème commence par le niveau le plus haut, avec le nombre de nouvelles cartes choisies, puis avec le niveau 1. Si possible, l'application permettra à l'utilisateur de configurer un rappel quotidien, qui lui sera notifié si ce dernier accepte les notifications au niveau du navigateur.

L'application devra pouvoir fonctionner hors-ligne.

#### Fonctionnalités

- Création de catégories
- Création de thèmes
- Création de cartes de révision
- Révision des thèmes
- Rappel quotidien
- Fonctionnement hors-ligne
- Responsive

#### Technologies utilisées

L'application est responsive. Elle est développée avec les technologies suivantes :

- VueJS 3;
- Le store pinia,
- vue-router

Pour l'utilisation de l'application en mode "hors-connexion" :

- un service worker,

## Fichier du projet


- `index.html` : fichier de base de l'application
- `main.js` : fichier d'entrée de l'application
- `App.vue` : composant principal de l'application
- `components` : dossier contenant les composants de l'application => `Card.vue`, `Category.vue`, `Home.vue`, `Theme.vue`, `Revision.vue`
- `router` : dossier contenant le fichier de configuration de la route de l'application => `src/router/index.js`
- `store` : dossier contenant le fichier de configuration du store de l'application => `CategoryStore.js`

#### Composants

- `Card.vue` : composant permettant de créer une carte de révision
- `Category.vue` : composant permettant de créer une catégorie
- `Home.vue` : composant permettant d'afficher la page d'accueil
- `Theme.vue` : composant permettant de créer un thème
- `Revision.vue` : composant permettant de réviser un thème

#### Store

- `CategoryStore.js` : fichier de configuration du store de l'application

#### Fonctionnement hors-ligne

- `service-worker.js` : fichier de configuration du service worker de l'application

## Docker

1. [`Dockerfile.dev`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2FDockerfile.dev%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/Dockerfile.dev") : Ce fichier est utilisé pour construire une image Docker pour l'environnement de développement. Il commence par une image Node.js, définit le répertoire de travail dans le conteneur, copie les fichiers [`package.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/package.json") et `package-lock.json`, installe les dépendances, copie le reste de l'application dans le conteneur, expose le port 3000 et définit la commande pour démarrer l'application.

2. [`Dockerfile.prod`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2FDockerfile.prod%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/Dockerfile.prod") : Ce fichier est utilisé pour construire une image Docker pour l'environnement de production. Il a deux étapes : la première est l'étape de construction, qui est similaire à [`Dockerfile.dev`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2FDockerfile.dev%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/Dockerfile.dev"), mais elle ajoute également une étape pour construire l'application. La deuxième étape est l'étape de production, qui commence par une image nginx, copie les fichiers construits de l'étape de construction dans le répertoire de serveur nginx, expose le port 80 et définit la commande pour démarrer nginx.

3. [`docker-compose.dev.yaml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2Fdocker-compose.dev.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/docker-compose.dev.yaml") : Ce fichier est utilisé pour définir et exécuter les services de l'application pour l'environnement de développement en utilisant Docker Compose. Il définit un service appelé `app`, construit l'image à partir de [`Dockerfile.dev`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2FDockerfile.dev%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/Dockerfile.dev"), définit des volumes pour le code de l'application et les modules node, expose le port 3000 et définit une variable d'environnement `NODE_ENV` à `development`.

4. [`docker-compose.prod.yaml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2Fdocker-compose.prod.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/docker-compose.prod.yaml") : Ce fichier est similaire à [`docker-compose.dev.yaml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2Fdocker-compose.dev.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/docker-compose.dev.yaml"), mais il est utilisé pour l'environnement de production. Il construit l'image à partir de [`Dockerfile.prod`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2FDockerfile.prod%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/Dockerfile.prod"), expose le port 80 et définit `NODE_ENV` à `production`.

Pour la configuration de nginx, elle est définie dans l'étape de production de [`Dockerfile.prod`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fvasso%2FDocuments%2FApp%2FPerso%2FApp%20en%20Vue%2FRemind_app_vue%2FDockerfile.prod%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/vasso/Documents/App/Perso/App en Vue/Remind_app_vue/Dockerfile.prod"). Les fichiers construits de l'application sont copiés dans le répertoire de serveur nginx (`/usr/share/nginx/html`). Nginx est ensuite démarré avec la commande `nginx -g daemon off;`. Cette configuration sert les fichiers statiques de l'application à partir du répertoire de serveur nginx.

Pour plus d'informations sur Docker, Docker Compose et nginx, vous pouvez consulter les documentations officielles :
- [Docker documentation](https://docs.docker.com/)
- [Docker Compose documentation](https://docs.docker.com/compose/)
- [nginx documentation](http://nginx.org/en/docs/)


### Commandes Docker

1. **Dockerfile.dev et Dockerfile.prod** : Ces fichiers sont utilisés pour construire des images Docker. Vous pouvez utiliser la commande `docker build` pour construire une image à partir d'un Dockerfile. Par exemple, pour construire une image à partir de Dockerfile.dev, vous pouvez utiliser la commande suivante :

```bash
docker build -f Dockerfile.dev -t remind_app_dev .
```

Dans cette commande, `-f Dockerfile.dev` spécifie le fichier Dockerfile à utiliser, `-t remind_app_dev` spécifie le nom de l'image à construire, et `.` spécifie le contexte de construction (le répertoire actuel dans ce cas).

2. **docker-compose.dev.yaml et docker-compose.prod.yaml** : Ces fichiers sont utilisés pour définir et exécuter les services de l'application en utilisant Docker Compose. Vous pouvez utiliser la commande `docker-compose up` pour démarrer les services définis dans un fichier docker-compose. Par exemple, pour démarrer les services définis dans docker-compose.dev.yaml, vous pouvez utiliser la commande suivante :

```bash
docker-compose -f docker-compose.dev.yaml up
```

Dans cette commande, `-f docker-compose.dev.yaml` spécifie le fichier docker-compose à utiliser, et `up` démarre les services définis dans le fichier.

3. **nginx** : Nginx est un serveur web qui peut être utilisé pour servir les fichiers statiques de votre application. Dans votre Dockerfile.prod, vous copiez les fichiers construits de votre application dans le répertoire de serveur nginx et démarrez nginx. Vous n'avez pas besoin d'exécuter de commandes spécifiques pour nginx dans ce cas, car tout est géré par le Dockerfile et le fichier docker-compose.

Pour plus d'informations sur ces commandes, vous pouvez consulter les documentations officielles de Docker et Docker Compose :

- [Docker documentation](https://docs.docker.com/)
- [Docker Compose documentation](https://docs.docker.com/compose/)