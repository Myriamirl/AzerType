const list_Mots = ["Cachalot", "Pétunia", "Serviette"];
const list_Phrases = ["Pas de panique", "La vie, l'univers et le reste", "Merci pour le poisson"];

let score = 0;

let choix = prompt("Veuillez choisir la liste mots ou phrases");
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste mots ou phrases");
}
if (choix === "mots") {
    for (let i = 0; i < list_Mots.length; i++) {
        let mot_Utilisateur = prompt("Quel est le mot ?" + list_Mots[i])
        if (mot_Utilisateur === list_Mots[i]) 
        score++;
        } 
        console.log("votre score est de " + score + " sur 3");
    }
    else {
        for (let i = 0; i < list_Phrases.length; i++) {
        let mot_Utilisateur = prompt("Quel est la phrase ?" + list_Phrases[i])
        if (mot_Utilisateur === list_Phrases[i]) 
        score++;
        }
        console.log("votre score est de " + score + " sur 3");
    }





