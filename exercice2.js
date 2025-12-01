function runChaine() {
    let prenom = "Sara";
    let age = 22;

    // construire la phrase
    let phrase = `Je m'appelle ${prenom} et j'ai ${age} ans`;

    // modifier l’âge
    let ageInter = 23;
    phrase2 = `Je m'appelle ${prenom} et j'ai ${ageInter} ans`;

    // afficher
    const out = document.getElementById("outChaine");
    out.innerText = phrase + "\n" + phrase2;

    console.log(phrase);
    console.log(phrase2);
}
