BEE-FIT

    Bee-fit est une plateforme centrée sur la nutrition et la santé développée avec le framework Django en backend et React en frontend.
    Elle a pour vocation de proposer à ses utilisateurs une suite d’outils complète pour suivre leurs apports
    nutritionnels quotidiens et leur poids, maîtriser leur alimentation et réaliser des entraînements sportifs.

Getting Started

    Cloner la dernière branche disponible dans gitHub.

    Les commandes pour l'installation sont décrites pour une utilisation sous Ubuntu 

Prerequisites

    Python 3 

Installing

    Création de la base de données:
        Dans un terminal installer postgresql : 
            sudo apt install postgresql
        Lancer postgresql : 
            sudo -i -u postgres
            psql
            CREATE DATABASE bee_fit;
        Sortir de postgresql:
            \q
            exit

    Connexion à la base de données:
        Dans un terminal aller à la racine du projet  bee_fit : 
            bee_fit/bee_fit
        Dans settings.py modifier les lignes 90 et 91 en entrant vos identifiants postgresql

    Installation des dépendances:
        Dans un terminal aller à la racine du dossier bee_fit
        Créer un environnement virtuel : https://docs.python.org/fr/3/tutorial/venv.html
        Lancer l'environnement virtuel
        Installer les dépendances:
            npm install
            pip install -r requirements.txt

    Lancer le projet:
        Dans un terminal aller à la racine du dossier bee_fit
        Lancer le serveur react en mode développement ou en mode production:
            npm run dev ou npm run prod
        Dans un autre terminal aller dans le projet Django bee_fit: 
            bee_fit/bee_fit 
        Lancer le serveur Django:
            python3 manage.py runserver
        Dans une page web rendez-vous à l'addresse: localhost:8000

Enjoy!