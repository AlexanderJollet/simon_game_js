//Variables
let bruit = true;
let compteurTour;

//Variables fixes (constantes)
const topLeftRouge = document.querySelector("#topLeftRouge");
const topRightVert = document.querySelector("#topRightVert");
const bottomLeftBleu = document.querySelector("#bottomLeftBleu");
const bottomRightYellow = document.querySelector("#bottomRightYellow");
const restartButton = document.querySelector("#restart");
const startButton = document.querySelector("#start");
const infosButton = document.querySelector("#infos");

//Action sur le boutton du lancement de la partie
startButton.addEventListener("click", (event) => {
  play();
});

//Refresh de la page directement
restartButton.addEventListener("click", (event) => {
    document.location.reload();
  });

//Ouverture d'une bulle infos
infosButton.addEventListener("click", (event) => {
  });

//Fonction pour le déroulement du jeu
function play() {
    //Ajoute 1 au compteur pour chaque déroulement
    compteurTour += 1;
}

//Actionne le boutton Rouge
function one() {
  if (bruit) {
    //Lance l'audio
    let audio = document.getElementById("sonBouttonRouge");
    audio.play();
  }
  bruit = true;
  //Active la couleur vive
  topLeftRouge.style.backgroundColor = "red";
}

//Actionne le boutton Vert
function two() {
  if (bruit) {
    //Lance l'audio
    let audio = document.getElementById("sonBouttonVert");
    audio.play();
  }
  bruit = true;
  //Active la couleur vive
  topRightVert.style.backgroundColor = "green";
}

//Actionne le boutton Bleu
function three() {
  if (bruit) {
      //Lance l'audio
    let audio = document.getElementById("sonBouttonBleu");
    audio.play();
  }
  bruit = true;
  //Active la couleur vive
  bottomLeftBleu.style.backgroundColor = "blue";
}

//Actionne le boutton Jaune
function four() {
  if (bruit) {
      //Lance l'audio
    let audio = document.getElementById("sonBouttonJaune");
    audio.play();
  }
  bruit = true;
  //Active la couleur vive
  bottomRightYellow.style.backgroundColor = "yellow";
}

//Fonction qui reset les couleurs en mode "sombre"
function clearColor() {
  topLeftRouge.style.backgroundColor = "darkred";
  topRightVert.style.backgroundColor = "darkgreen";
  bottomLeftBleu.style.backgroundColor = "darkblue";
  bottomRightYellow.style.backgroundColor = "darkyellow";
}

//Lance le boutton 1 avec la fonction one()
topLeftRouge.addEventListener("click", (event) => {
  one();
  //TODO : Fonction qui vérifi bon ordonnancement des clicks
  //TODO : Fonction qui ajoute un boutton dans l'ordonnancement actuel
});


//Lance le boutton 2 avec la fonction deux()
topRightVert.addEventListener("click", (event) => {
  two();
  //TODO : Fonction qui vérifi bon ordonnancement des clicks
  //TODO : Fonction qui ajoute un boutton dans l'ordonnancement actuel
});

//Lance le boutton 3 avec la fonction three()
bottomLeftBleu.addEventListener("click", (event) => {
  three();
  //TODO : Fonction qui vérifi bon ordonnancement des clicks
  //TODO : Fonction qui ajoute un boutton dans l'ordonnancement actuel
});

//Lance le boutton 4 avec la fonction four()
bottomRightYellow.addEventListener("click", (event) => {
  four();
    //TODO : Fonction qui vérifi bon ordonnancement des clicks
    //TODO : Fonction qui ajoute un boutton dans l'ordonnancement actuel
});