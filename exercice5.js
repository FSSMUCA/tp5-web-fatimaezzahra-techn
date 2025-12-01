function multiplicationTablePrompt(){
const s = prompt('Entrez n pour afficher la table de multiplication jusqu\'à 10 :');
const n = Number(s);
const outEl = document.getElementById('outTable');
if (!Number.isInteger(n) || Number.isNaN(n)) { outEl.innerText = 'Entrée invalide (entier attendu).'; return; }
let lines = [];
for (let i = 1; i <= 10; i++){
lines.push(`${n} x ${i} = ${n * i}`);
}
outEl.innerText = lines.join('\n');
console.log(lines.join('\n'));
}