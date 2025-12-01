function rangeThreeFivePrompt() {
    let min = Number(prompt("Entrez le nombre minimal :"));
    let max = Number(prompt("Entrez le nombre maximal :"));

    const out = document.getElementById("outRange");

    // Vérifier que ce sont des nombres valides
    if (isNaN(min) || isNaN(max)) {
        out.innerText = "Erreur : veuillez entrer deux nombres valides.";
        return;
    }

    // Si min > max, on échange
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    let result = [];

    for (let i = min; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(`${i} -> Five&Three`);
        } else if (i % 3 === 0) {
            result.push(`${i} -> Three`);
        } else if (i % 5 === 0) {
            result.push(`${i} -> Five`);
        } else {
            result.push(`${i} -> ${i}`);
        }
    }

    out.innerText = result.join("\n");
    console.log(result.join("\n"));
}



