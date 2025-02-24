// Fonction qui vérifie si la case est valide et peut être remplie
function estValide(button){
    return button.innerHTML.length == 0; // Ca retourne True si il n'y a pas de contenu dans la case
}
function setSymbol(btn, symbole){
    btn.innerHTML = symbole;
}
function rechercherVainqueur(pions, joueurs, tour){
    if(
        pions[0].innerHTML == joueurs[tour] &&
        pions[1].innerHTML == joueurs[tour] &&
        pions[2].innerHTML == joueurs[tour]
    ){
        pions[0].style.backgroundColor == "#fd0000";
        pions[1].style.backgroundColor == "#fd0000";
        pions[2].style.backgroundColor == "#fd0000";
            return true;
    }
    else if(
        pions[3].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour]
    ){
        pions[3].style.backgroundColor == "#fd0000";
        pions[4].style.backgroundColor == "#fd0000";
        pions[5].style.backgroundColor == "#fd0000";
            return true;
    }
    else if(
        pions[6].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ){
        pions[6].style.backgroundColor == "#fd0000";
        pions[7].style.backgroundColor == "#fd0000";
        pions[8].style.backgroundColor == "#fd0000";
            return true;
    }
    else if(
        pions[0].innerHTML == joueurs[tour] &&
        pions[3].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ){
        pions[0].style.backgroundColor == "#fd0000";
        pions[3].style.backgroundColor == "#fd0000";
        pions[6].style.backgroundColor == "#fd0000";
            return true;
    }
    else if(
        pions[1].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour]
    ){
        pions[1].style.backgroundColor == "#fd0000";
        pions[4].style.backgroundColor == "#fd0000";
        pions[7].style.backgroundColor == "#fd0000";
            return true;
    }
    else if(
        pions[2].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ){
        pions[2].style.backgroundColor == "#fd0000";
        pions[5].style.backgroundColor == "#fd0000";
        pions[8].style.backgroundColor == "#fd0000";
            return true;
    }
    else if(
        pions[0].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ){
        pions[0].style.backgroundColor == "#fd0000";
        pions[4].style.backgroundColor == "#fd0000";
        pions[8].style.backgroundColor == "#fd0000";
            return true;
    }
    else if(
        pions[2].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ){
        pions[2].style.backgroundColor == "#fd0000";
        pions[4].style.backgroundColor == "#fd0000";
        pions[6].style.backgroundColor == "#fd0000";
            return true;
    }
    else return false;
}
// Fonction principale du jeu
function main(){
    let pions = document.querySelectorAll("#Jeu button");
    let joueurs = ["X", "O"];
    let tour = 0;
    let jeuEstFini = false;
    
    // Ajouter un écouteur d'évenement à chaque case du jeu (addEventListener)
    for(let i = 0, len = pions.length; i < len; i++){
        pions[i].addEventListener("click", function(){
            if(jeuEstFini) return; // Si la partie est terminée, ne rien faire
            if(!estValide(this)) ( //Va renvoyer la valeur de l'ID pour verifier si la case est remplie
                alert("Occupé !")
            );
            else (
                setSymbol(this, joueurs[tour]) // setSymbol(this, joueurs[tour]) = setSymbol(btn, symbole)
            )
                jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
                if(jeuEstFini){
                    alert("Bravo, tu as gagné !");
                }
                tour++;
                tour = tour % 2;
        })
    }
}
// Démarrage du jeu
main();