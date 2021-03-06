/*************************
 * Correction - JS
 * Session 2 : Types
 ************************/

/* LES TYPES */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les types');

// ------ TODO 1 ------ 
// TODO: ÉTAPE 1
// Écrire 4 variables, 1 en dessous de chaque ligne avec leurs valeurs :
// - une variable qui s'appelle firstName de type string qui contient votre prénom
var firstName = "Victor";

// TODO: ÉTAPE 2
// - une variable qui s'appelle age de type number qui contient votre age
var age = 28;

// TODO: ÉTAPE 3
// - une variable qui s'appelle likeFootball de type boolean qui indique si vous aimez le football ou non
var likeFootball = true;

// TODO: ÉTAPE 4
// - une variable qui s'appelle otherStuff de valeur null
var otherStuff = null;

// ------ TODO 2 ------ 
// TODO: ÉTAPE 1
// Afficher dans la console la valeur et le type de chaque variable.
// Pour chaque variable, suivre cet exemple de pseudo code :
// "mon prénom, {name}, est de type {type de name}"

console.log("mon prénom, " + firstName + ", est de type " + typeof firstName);
console.log("mon âge, " + age + ", est de type " + typeof age);
console.log("J'aime le foot, " + likeFootball + ", est de type " + typeof likeFootball);
console.log("Autre, " + otherStuff + ", est de type " + typeof otherStuff);

// ------ TODO 3 ------ 
// TODO: ÉTAPE 1
// Créer une variable appellée myNumber et lui attribuer une valeur numérique (un nombre)
var myNumber = 264;

// TODO: ÉTAPE 2
// Afficher dans la console le type de myNumber.
console.log(typeof myNumber);

// TODO: ÉTAPE 3
// Changer la valeur de myNumber à une string (une chaîne de caractères)
myNumber = "test";

// TODO: ÉTAPE 4
// Afficher dans la console le type de myNumber.
console.log(typeof myNumber);

// ------ TODO 4 ------ 
// TODO: ÉTAPE 1
// Ecrire une 1ère variable qui contient la chaîne de caractères "10".
var var1 = "10";

// TODO: ÉTAPE 2
// Ecrire une 2ème variable qui contient la chaîne de caractères "5".
var var2 = "5";

// TODO: ÉTAPE 3
// Ecrire une 3ème variable qui contient la somme (c = a + b) de la 1ère et la 2ème variable.
var sum = var1 + var2;

// TODO: ÉTAPE 4
// Afficher dans la console la valeur et le type de la 3ème variable.
console.log(sum);

// TODO: ÉTAPE 5
// Que remarque-t-on ? Est-ce le type et le résultat attendu ? Pourquoi ?
/*

sum = var1 + var2
sum = "10" + "5"
sum = "105"

var1 et var2 étant des chaînes de caractères (String), une addition (+) de 2 Strings revient à faire une concaténation des 2 variables
*/

