# 🎮 Le Juste Prix - Vanilla JS

Un mini-jeu interactif développé en HTML, CSS et JavaScript pur. L'objectif est de deviner un nombre généré aléatoirement entre 1 et 100 avec un nombre d'essais limité.

## ✨ Fonctionnalités

* **Mécanique de jeu :** Génération aléatoire d'un nombre et système d'indices ("Trop grand", "Trop petit").
* **Limitation des essais :** Le joueur dispose de 10 tentatives maximum avant le Game Over.
* **Sécurisation des entrées (Input Validation) :** 
  * Blocage de la saisie de caractères non numériques via expression régulière (Regex).
  * Vérification des champs vides et des valeurs hors limites (0-100).
* **Expérience Utilisateur (UX) :**
  * Support de la touche `Entrée` pour valider une proposition.
  * Bouton "Relancer" permettant de réinitialiser le jeu sans recharger la page.
  * Compteur d'essais mis à jour en temps réel.
  * Verrouillage de l'interface (boutons et champs désactivés) en fin de partie.

## 🛠️ Technologies utilisées

* **HTML5** : Structure sémantique de l'application.
* **CSS3** : Design épuré utilisant Flexbox/Grid, des variables CSS pour la maintenabilité, et gestion des états (`:hover`, `:focus`, `:disabled`).
* **JavaScript (ES6+)** : Manipulation du DOM, écoute d'événements, et logique conditionnelle.

## 🚀 Installation et exécution

Ce projet ne nécessite aucune installation complexe ni dépendance externe.

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone [https://github.com/VOTRE-PSEUDO/juste-prix-js.git](https://github.com/VOTRE-PSEUDO/juste-prix-js.git)
