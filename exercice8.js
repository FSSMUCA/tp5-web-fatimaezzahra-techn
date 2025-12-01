
function factorielle(n) {
if (n === 0) return 1;
return n * factorielle(n - 1);
}
function factoriellePrompt(){
const s = prompt('Entrez n pour calculer n! (n >= 0, entier) :');
const n = Number(s);
const outEl = document.getElementById('outFact');
if (!Number.isInteger(n) || n < 0 || Number.isNaN(n)) { outEl.innerText = 'Entrée invalide (entier >= 0 attendu).'; return; }
// attention au dépassement de pile pour très grand n
let res;
try {
res = factorielle(n);
} catch (e) {
outEl.innerText = 'Erreur (possible dépassement de pile pour n trop grand).';
console.error(e);
return;
}
outEl.innerText = `${n}! = ${res}`;
console.log(`${n}! = ${res}`);
}
 
