// Compteur de clics mis à jour
const boutonLike = document.getElementById("mon-bouton-like");

if (boutonLike) {
    boutonLike.addEventListener("click", () => {
        // 1. On récupère le nombre actuel (si le dataset n'existe pas encore, on commence à 0)
        let nbLikes = parseInt(boutonLike.dataset.likes || 0, 10);
        
        // 2. On ajoute 1
        nbLikes++;
        
        // 3. On sauvegarde la nouvelle valeur dans le dataset HTML
        boutonLike.dataset.likes = nbLikes;
        
        // 4. On met à jour l'affichage du texte
        boutonLike.textContent = `❤ J'aime (${nbLikes})`;
    });
} else {
    console.warn("Le bouton avec l'ID 'mon-bouton-like' n'a pas été trouvé.");
}
