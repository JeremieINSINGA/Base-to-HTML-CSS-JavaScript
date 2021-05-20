/*************************
 * Correction - JS
 * Session 6 : Events
 ************************/

/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 2 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.
var buttonElement = document.getElementsByTagName("button")[0];

// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra afficher dans la console "Le bouton a été cliqué",
// ainsi qu'une alerte "Click !".
function showAlert() {
    alert("Le bouton a été cliqué");
}

// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.
buttonElement.addEventListener("click", showAlert);



