# État de GymFlow

_Dernière mise à jour : 03/10/2026_

## Ce qui fonctionne
- Créer une séance depuis le bouton + (nom, énergie, sommeil)
- Ajouter des exercices et des séries, charge réelle avec facteur de poulie
- Brouillon persistant dans localStorage, reprise après fermeture
- Terminer une séance → bilan énergie → archivage
- Historique /workouts, accueil avec brouillon + 3 dernières séances
- Détail d'une séance /workouts/[id], 404 si l'id n'existe pas
- Profil /profile : langue et unité kg/lbs, enregistrés immédiatement
- Unité appliquée à l'affichage et à la saisie des séries
- Barre de navigation fixe, colonne centrée 600px

## En cours
(rien)

## Prochains chantiers
- Appliquer la langue (réglage enregistré mais pas encore utilisé)
- AddSetForm fabrique lui-même le WorkoutSet, contraire à la règle formulaire / détenteur de l'état
- /progress — courbes (à faire en dernier, besoin de vraies données)
- Catalogue de machines et facteur de poulie à la saisie
- Back Django + DRF (env. Python, API REST), PostgreSQL via l'ORM Django
- Migration du stockage : lib/ passe de localStorage à fetch vers l'API
- Authentification (django.contrib.auth + jetons côté front)
- Module ML (Python, même back)

## Décisions prises
- Un formulaire remonte la saisie brute ; le détenteur de l'état fabrique l'objet métier
- Entre deux écrans, une donnée passe par le stockage, jamais par la navigation
- lib/ fournit, components/ affiche, app/ ne contient que des routes
- Pas de version PC séparée : un seul code responsive
- Front React/Next + back Django séparés, communication HTTP/JSON — pas de couche serveur Next.js
- Charges toujours stockées en kg ; conversion à la saisie (toKg) et à l'affichage (fromKg)
- Les réglages sont ceux de l'appareil, pas d'un utilisateur : pas d'id ni d'email avant l'authentification
- Valeurs par défaut des réglages définies une seule fois (DEFAULT_SETTINGS)
- Lecture et édition séparées par composition (ExerciseView / ExerciseBlock)
- On factorise quand une duplication apparaît, pas en prévision
