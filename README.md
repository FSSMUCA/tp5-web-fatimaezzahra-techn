# **TP 5 : JavaScript**

Comment demander une saisie utilisateur en JavaScript ? <br>
Pour demander à l’utilisateur d’entrer une valeur dans une fenêtre de saisie, utilisez :<br>
let valeur = prompt("Veuillez entrer une valeur : ");<br>

prompt() retourne une chaîne de caractères<br>
Pour convertir en nombre :<br>
let n = Number(prompt("Entrez un nombre : "));<br>

**Exercice 1 — Détection du type d’une variable**

Déclarez les variables suivantes :<br>
x = "150"<br>
y = 150<br>
z = true<br>
Travail demandé :<br>
Afficher le type de chaque variable avec typeof.<br>
Convertir x en nombre et afficher son nouveau type.<br>
Expliquer pourquoi JavaScript peut changer dynamiquement le type d’une variable.<br>

**Exercice 2 — Manipulation de chaînes et concaténation**

Déclarez :<br>
prenom = "Sara"<br>
age = 22<br>
Travail demandé :<br>
Construire la phrase : "Je m'appelle Sara et j'ai 22 ans".<br>
Modifier l’âge en 23 sans recréer toute la chaîne (utiliser une variable intermédiaire).<br>

**Exercice 3 — Condition imbriquée : classification d’un nombre**

Demandez un nombre à l’utilisateur avec prompt().<br>
Affichez :<br>
"Nombre négatif" si < 0<br>
"Petit" entre 0 et 10<br>
"Moyen" entre 11 et 50<br>
"Grand" si > 50<br>
"Très grand" si > 100<br>
Utilisez des conditions imbriquées.<br>

**Exercice 4 — Multiples de 3 et 5 dans une plage**

Demander deux nombres :<br>
let min = Number(prompt("Entrez le nombre minimal : "));<br>
let max = Number(prompt("Entrez le nombre maximal : "));<br>
Affichez tous les nombres entre min et max :<br>
"Three" si multiple de 3<br>

"Five" si multiple de 5<br>

"Five&Three" si multiple de 3 et 5<br>

**Exercice 5 — Table de multiplication dynamique**

Demandez un nombre n.<br>
Afficher sa table de multiplication jusqu’à 10 :<br>
n x 1 = …<br>
n x 2 = …<br>
…<br>
n x 10 = …<br>
Utilisez une boucle for.<br>

**Exercice 6 — Somme des nombres pairs et impairs**

Calculez à l’aide d’une boucle :<br>
La somme des nombres pairs entre 1 et 50.<br>
La somme des nombres impairs entre 1 et 50.<br>
Affichez les deux résultats dans la console.<br>

**Exercice 7 — Fonction : validation d’un mot de passe**

Créer une fonction verifierMotDePasse(mdp) qui retourne true si :<br>
le mot de passe fait au moins 8 caractères<br>
contient le symbole @<br>
Sinon, elle retourne false.<br>
Demandez ensuite un mot de passe utilisateur via prompt() puis affichez :<br>
"Mot de passe valide" ou<br>
"Mot de passe non valide"<br>
**exercice8**
Créer une fonction totalAvecRemise(total, remise) qui retourne :<br>
totalFinal = total - (total * remise / 100)<br>
Demandez à l’utilisateur :<br>
un total HT<br>
une remise en %<br>
Puis affichez le total final.<br>

**Exercice 9 — Fonction récursive : calcul de la factorielle**

Créer une fonction récursive factorielle(n) :<br>
Si n = 0, retourner 1<br>
Sinon retourner n * factorielle(n - 1)<br>
Exemple attendu :<br>
factorielle(5)  // 120<br>

**Exercice 10 — Comparaison itératif vs récursif**

Créer deux fonctions pour calculer la somme des entiers de 1 à n :<br>
Version 1 : boucle<br>
sommeIterative(n)<br>
Version 2 : récursion<br>
sommeRecursive(n)<br>
## Analyse demandée :<br>
1 - Quel code est le plus lisible ?<br>
2 - Quel code est le plus performant ?<br>
3 - La récursion peut-elle poser des problèmes ? Pourquoi ?<br>
4 - Dans quels cas privilégier une boucle ?<br>
