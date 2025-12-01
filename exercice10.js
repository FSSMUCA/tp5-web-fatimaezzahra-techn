// Version 1 : Boucle
function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}

// Version 2 : Récursion
function sommeRecursive(n) {
    if (n === 0) return 0;  // condition d’arrêt
    return n + sommeRecursive(n - 1);
}

// Fonction pour tester dans le HTML
function testSommes() {
    let n = Number(prompt("Entrez un nombre n :"));
    let res = "";

    res += `Somme itérative : ${sommeIterative(n)}\n`;
    res += `Somme récursive : ${sommeRecursive(n)}\n`;

    document.getElementById("resultat").textContent = res;
}


 