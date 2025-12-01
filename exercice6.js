function sumEvenOdd1to50(){
let sumEven = 0;
let sumOdd = 0;
for (let i = 1; i <= 50; i++){
if (i % 2 === 0) sumEven += i;
else sumOdd += i;
}
const out = `Somme des pairs entre 1 et 50 : ${sumEven}\nSomme des impairs entre 1 et 50 : ${sumOdd}`;
document.getElementById('outSum').innerText = out;
console.log(out);
}