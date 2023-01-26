# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

A lancer depuis le répertoire de base du projet.

 `yarn install` : Permet de charger les dépendances. doit être effectué une fois après le clone git.

 `yarn start` : Démarre le serveur en mode développement. Le site est alors accessible à l'adresse [http://localhost:3000](http://localhost:3000). La page se recharge automatiquement après chaque modif des sources. Les erreurs Lint sont affichées dans la console.

`yarn test` : Démarre les tests Jest en mode interactif.

`yarn build` : Génère l'application optimisée et minifiée pour la production

`yarn global add serve` ou `npm install -g serve` : Permet d'installer un serveur pour tester le build en mode production.

`serve -s build < -l port >` : Permet de démarrer le build de production (port 3000 par défaut, option `-l port` pour forcer un port différent.

