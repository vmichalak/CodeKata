Luhn
====

La [Formule de Luhn](https://fr.wikipedia.org/wiki/Formule_de_Luhn) ou "mod 10" a été inventée par [Hans Peter Luhn](https://fr.wikipedia.org/wiki/Hans_Peter_Luhn) en 1954 et permet de vérifier des numéros via une clé de contrôle, elle est notamment utilisée dans les numéros de carte bancaires et les numéros de SIRET. 

Ce Kata est en deux étapes:
- La première va être de valider si la string fourni est valide.
- La seconde de générer des numéros valides.

Des tests unitaires sont fournis pour vous aider.

## Exemple: Carte de crédit valide

> 4446 1320 6600 0519

La première étape de l'algorithme de Luhn est de multiplier par deux un chiffre sur deux en commençant par l'avant dernier chiffre à droite.

> 4_4_ 1_2_ 6_0_ 0_1_

Si un chiffre qui est multiplié par deux est plus grand que neuf (dans notre exemple, le 6 qui devient 12) :
- Soit additionner les deux chiffres (1 + 2 = 3)
- Soit soustraire neuf au résultat (12 - 9 = 3)

> 8486 2340 3600 0529

La seconde étape est d'additionner tout les chiffres 

> 8+4+8+6+2+3+4+0+3+6+0+0+0+5+2+9 = 60

Si la somme est divible par 10 alors le nombre est valide. Ici, il est valide !