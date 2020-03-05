Mastermind
==========

Avez-vous déjà joué au [Mastermind](https://fr.wikipedia.org/wiki/Mastermind) ? Si vous ne connaissez pas, il s'agit d'un jeu pour deux joueurs dont le but est de trouver un code secret composé de quatres couleurs parmi six (jaune, bleu, rouge, vert, blanc, noir).

Dans chaque partie il y a un codificateur et un décodeur.
Votre objectif est de remplacer l'ennuyant rôle de codificateur par un logiciel.

## Déroulement d'une partie

Le codifieur commence par définir le code secret sans qu'il soit vu par l'autre joueur.
**Le code ne peut pas pas avoir deux fois la même couleur.**

> mastermind = new Mastermind([BLUE, WHITE, RED, BLACK])

Le décodeur doit maintenant trouver quel est le code secret **en moins de 10 tours**.
Pour cela, à chaque tour, le joueur doit réaliser une proposition de code selon l'idée qu'il se fait du code dissimulé.

> mastermind.test([YELLOW, RED, GREEN, BLACK])

Une fois la proposition réalisée, le codifieur doit indiquer:
- Le nombre de pions de la bonne couleur bien placés.
- Le nombre de pions de la bonne couleur mais mal placés.

> { "wellplaced": 1, "misplaced": 1 }

Le décodeur remporte la partie s'il trouve le code avant la dernière manche, sinon le codifieur gagne.

## Déroulement du Kata

Vous remarquerez que les tests unitaires ne sont volontairement pas fournis sur cet exercice car vous devrez le réaliser en suivant la [méthodologie TDD](https://fr.wikipedia.org/wiki/Test_driven_development). Faites bien attention à commencer avec des tests simples pour en ajouter d'autres ensuite afin d'obtenir une bonne progression en TDD.