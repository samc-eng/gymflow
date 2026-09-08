# État de GymFlow

_Dernière mise à jour : 8/09/2026_

## Ce qui fonctionne
- Créer une séance depuis le bouton + (nom, énergie, sommeil)
- Ajouter des exercices et des séries, charge réelle avec facteur de poulie
- Brouillon persistant dans localStorage, reprise après fermeture
- Terminer une séance → bilan énergie → archivage
- Historique /workouts, accueil avec brouillon + 3 dernières séances
- Barre de navigation fixe, colonne centrée 600px

## En cours
(rien)

## Prochains chantiers
- /workouts/[id] — détail d'une séance (les cartes mènent à un 404)
- /profile — langue, unités kg/lbs
- /progress — courbes (à faire en dernier, besoin de vraies données)
- Catalogue de machines et facteur de poulie à la saisie
- PostgreSQL + Prisma, puis Auth.js
- Module ML

## Décisions prises
- Un formulaire remonte la saisie brute ; le détenteur de l'état fabrique l'objet métier
- Entre deux écrans, une donnée passe par le stockage, jamais par la navigation
- lib/ fournit, components/ affiche, app/ ne contient que des routes
- Pas de version PC séparée : un seul code responsive
