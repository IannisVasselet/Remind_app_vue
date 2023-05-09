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



