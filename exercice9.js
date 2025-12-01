
function sommeIterative(n) {
let s = 0;
for (let i = 1; i <= n; i++) s += i;
return s;
}
function sommeRecursive(n) {
if (n === 0) return 0;
return n + sommeRecursive(n - 1);
}
function compareSumPrompt(){
const s = prompt('Entrez n pour comparer sommeIterative et sommeRecursive :');
const n = Number(s);
const outEl = document.getElementById('outCompare');
if (!Number.isInteger(n) || n < 0 || Number.isNaN(n)) { outEl.innerText = 'Entrée invalide (entier >= 0 attendu).'; return; }
const it = sommeIterative(n);
let rec;
try { rec = sommeRecursive(n); } catch(e) { rec = 'Erreur récursion (trop grand ?)'; }
outEl.innerText = `sommeIterative(${n}) = ${it}\nsommeRecursive(${n}) = ${rec}`;
console.log(outEl.innerText);
}
console.log('Exemples : factorielle(5)=', (function(){try{return factorielle(5);}catch(e){return e;}})());
console.log('sommeIterative(5)=', sommeIterative(5));
console.log('sommeRecursive(5)=', sommeRecursive(5));
console.log('Somme pairs 1..50 et impairs 1..50 (précalc) :');
(function(){ let se=0,so=0; for(let i=1;i<=50;i++){ i%2===0?se+=i:so+=i;} console.log(se, so); })();