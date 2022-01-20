# Calculatrice

Une calculette basique faite en JavaScript pour un devoir de l'IMTS à rendre le Vendredi 21 Janvier 2022 à 9:00.

## Comment ça fonctionne ?

L'écran est tout simplement une zone de texte ```input```, lorsque vous cliquez sur les touches, sa valeur est insérée dans le ```input```.

## Pourquoi ça fonctionne ?

Le programme à fonctionné à l'appui de la touche "=" car le programme à éxécuté l'instruction située dans le ```input``` lui-même.
Étant donné que JavaScript est capable de faire des calculs arithmétiques comme n'importe quel langage de programmation dit "turing-complete", cela a calculé l'opération depuis le ```input``` et l'a ensuite affiché dans cette même zone.

## Éxécution de Code Arbitraire

Bien-sûr cette méthode n'est pas sans faille, en effet, si JavaScript peut faire des opérations mathématiques, il peut aussi éxécuter du code JS depuis cette zone de texte citée plus haut. C'est à dire qu'il est parfaitement possible d'entrer n'importe quel code JavaScript et le navigateur internet pourra l'interpréter sans aucun problème.

Par exemple si j'entre ```alert("Hello World")``` dans le ```input``` cela va afficher une pop-up contenant le texte "Hello World".

Tout ça à cause de la fonction ```eval()``` incluse dans JavaScript.

> Mais ça veut dire qu'avec ça je vais pouvoir h@cker des trucs! 😏😱

Pas vraiment non, il s'agit juste en fait d'une console JavaScript sans quelque chose de particulier, de plus, j'ai corrigé l'exploit en désactivant simplement le champ de texte, vous obligant d'utiliser au choix la souris, ou le pavé numérique pour entrer des chiffres.

## Le mot de la fin

Mon code JavaScript est "un peu" répétitif mais au moins ça fonctionne, donc ça va c'est pas si mal!

<img src="https://i.ibb.co/NF2t6yV/ddn64tl-f44958c5-ff18-4307-bac9-402275def9e6.png" alt="ddn64tl-f44958c5-ff18-4307-bac9-402275def9e6"></a>

©2022 Alexandre "djalexkidd" P.&emsp; btw i use arch