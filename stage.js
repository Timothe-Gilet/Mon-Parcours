document.addEventListener("DOMContentLoaded",() =>{
  
    const descriptions={
        "ponchardier.png":"Découverte des différentes escouades de commandement du commandos Ponchardier à la base des fusiliers marins commandos",
        "véhicule.png":"Essai d’un véhicule tactique avec un spécialiste de ces véhicules du commando Ponchardier",
        "écume.png":"Visite sur une embarcation de type Écume de l’escouade mer",
        "parachute.png":"Démonstration de pliage de parachutes au sein de la cellule 3D air",
        "musée.jpg":"Découverte de l'équipement des forces spéciales au musée de la base FUSCO",
        "armurerie.png":"Visite de l’armurerie centrale avec présentation  des armes en dotation dans les forces spéciales",
        "parcours.png":"Découverte du parcours du combattant effectué par les nouvelles recrues",
        "gymnase.png":"Visite des unités de soutien de la Base FUSCO (restauration, espace « loisirs », gymnase et salon d’habillement)"

    };
    const zone=document.getElementById("description-text");
    document.addEventListener ("click", (e) =>{
        const nom = e.target.getAttribute("src");
        zone.textContent=descriptions[nom]|| "Aucune description disponible";
    });
})