function validerFormulaire() {
    // Récupérer les valeurs du formulaire
    var t = document.getElementById("t").value;
    var des = document.getElementById("d").value;
    var dept = document.getElementById("dept").value;
    var ret = document.getElementById("ret").value;
    var pr = document.getElementById("pr").value;

    // Valider le titre (au moins 3 caractères)
    if (t.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        document.getElementById("tt").innerHTML="Le titre doit contenir au moins 3 caractères.";
        return false;
    }


    // Vérifier que la destination contient au moins 3 caractères
    
    if (des.length < 3) {
        alert("La destination doit contenir au moins 3 caractères.");
        document.getElementById("dd").innerHTML="La destination doit contenir au moins 3 caractères.";
        return false;
    }

    // Parcourir chaque caractère de la chaîne pour vérifier s'il s'agit d'une lettre ou d'un espace
    for (var i = 0; i < des.length; i++) {
        var char = des[i];
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char === ' '))) {
            alert("La destination doit contenir uniquement des lettres et des espaces .");
            document.getElementById("dd").innerHTML="La destination doit contenir uniquement des lettres et des espaces.";
            return false;
        }
    }


    // Valider la date de retour (doit être après la date de départ)
    var dateDepart = new Date(dept);
    var dateRetour = new Date(ret);
    if (dateRetour <= dateDepart) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        document.getElementById("rtt").innerHTML="La date de retour doit être ultérieure à la date de départ.";
        return false;
    }

    // Valider le prix (doit être un nombre positif)
    if (pr <= 0) {
        alert("Le prix doit être un nombre positif.");
        document.getElementById("prr").innerHTML="Le prix doit être un nombre positif.";
        return false;
    }

    // Si tout est valide
    alert("Offre ajoutée avec succès !");
    return true;
}