function classifyNumberPrompt() {
    let n = Number(prompt("Entrez un nombre :"));
    const out = document.getElementById("outClasse");

    if (Number.isNaN(n)) {
        out.innerText = "Entrée invalide. Veuillez entrer un nombre.";
        return;
    }

    // Conditions imbriquées
    if (n < 0) {
        out.innerText = "Nombre négatif";
    } else {
        if (n <= 10) {
            out.innerText = "Petit";
        } else {
            if (n <= 50) {
                out.innerText = "Moyen";
            } else {
                if (n > 100) {
                    out.innerText = "Très grand";
                } else {
                    out.innerText = "Grand";
                }
            }
        }
    }

    console.log(out.innerText);
}
