Spintax
=======

Saviez-vous que lorsque que Google découvre que deux sites proposent exactement le même contenu, l'un des deux sites reçoit une pénalitée ? Cela est appelé le "duplicate content", et cette protection a beaucoup embêté nos amis les pro du [SEO](https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche) qui aimaient bien créer des réseaux de site thématique dans l'unique but d'améliorer leur référencement. 

Pour passer entre les mailles du filet sans avoir a réécrire completement du contenu, ils ont mis au point une solution leur permettant d'industrialiser l'écriture de texte : le content spining ! Le content spining consiste à produire des textes uniques en se faisant aider par un logiciel qui interprête la Spintax (contraction de Spin Syntax).

Votre objectif est décrire un interpreteur de Spintax.
Des tests unitaires sont fournis pour vous aider.

## Spintax: Comment ça marche ?

Le principe est très simple, il suffit de placer entre accolades plusieurs mots (ou morceaux de phrases) séparés par un pipe et le logiciel choisit aléatoirement tel ou tel mot (ou morceau de phrase) pour générer un texte. Par exemple :

    {Bonjour|Salut|Hey}

peut donner

    - Bonjour
    - Salut
    - Hey

Il est possible d'imbriquer les spins et donc d'augmenter très rapidement le nombre de possibilitées. Par exemple:

    Je {{m'|me }présente, je|} {m'appelle|me nomme} {Henri|Valentin|Maxence|Julien}

peut donner

    - Je m'présente, je m'appelle Henri
    - Je me nomme Valentin
    - Je me présente, je me nomme Julien
    - ...
