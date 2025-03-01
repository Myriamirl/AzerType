function afficherResultat(score, nbMotsProposes) {
        //on affiche le score du utilisateur    
    console.log("votre score est de " + score + " sur " + nbMotsProposes);
}
    
function choisirPhraseouMOts() {
    //tant que user n'a pas choisi mots ou phrases, on redemande
let choix = prompt("Veuillez choisir la liste mots ou phrases avec laquelle vous voulez jouer");
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste mots ou phrases avec laquelle vous voulez jouer");
}
return choix;
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0;
    for (let i = 0; i < listePropositions.length; i++) {
        let mot_Utilisateur = prompt("Entrer le mot ?" + listePropositions[i])
        if (mot_Utilisateur === listePropositions[i]){ 
        score++;
        } 
return score;
} }

/* Fonction pour lancer le jeu
elle demande au user de choisr entre mots et phrases et lancer la boucle de jeu correspondante */
function lancerJeu() {
    //initialisation
    let choix = choisirPhraseouMOts();
    let score = 0;
    let nbMotsProposes = 0;

    //on determine la liste des mots ou phrases à proposer au user
    if (choix === "mots") {
    score = lancerBoucleDeJeu(list_Mots)
        nbMotsProposes = list_Mots.length;
    } else {
    score = lancerBoucleDeJeu(list_Phrases)
        nbMotsProposes = list_Phrases.length;
    }

    afficherResultat (score, nbMotsProposes);
}

lancerJeu();