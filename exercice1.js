function runTypes() {
    // Déclarations
    let x = "150";
    let y = 150;
    let z = true;

    let output = "";

    output += "Avant conversion :\n";
    output += "typeof x = " + typeof x + "\n";
    output += "typeof y = " + typeof y + "\n";
    output += "typeof z = " + typeof z + "\n\n";

    // Convertir x en nombre
    x = Number(x);

    output += "Après conversion : typeof x = " + typeof x;

    // Afficher dans la page
    document.getElementById("outTypes").innerText = output;

    // Afficher aussi dans la console
    console.log(output);
}

