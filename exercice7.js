function verifierMotDePasse(mdp) {
return typeof mdp === 'string' && mdp.length >= 8 && mdp.includes('@');
}
function checkPasswordPrompt(){
const mdp = prompt('Entrez un mot de passe (>=8 caractères et contenant \"@\") :');
const ok = verifierMotDePasse(mdp);
document.getElementById('outPwd').innerText = ok ? 'Mot de passe valide' : 'Mot de passe non valide';
console.log('Mot de passe:', mdp, '->', ok);
}