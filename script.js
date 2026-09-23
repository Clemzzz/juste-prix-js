const userInput = document.getElementById('userInput');
const button = document.getElementById('button1');
const output = document.getElementById('output');
const rejouer = document.getElementById('rejouer');
let nbAlea = Math.floor(Math.random() * 100) +1;
let nbEssais = 0;



button.addEventListener('click', function() {
    nbEssais++;
    if (userInput.value == nbAlea) {
        output.textContent = `Bravo ! Vous avez trouvé le nombre ${nbAlea} en ${nbEssais} essais.`;
    } else if (userInput.value < nbAlea){
        output.textContent = 'Nombre trop petit';
    } else if (userInput.value > nbAlea) {
        output.textContent = 'Nombre trop grand';
    }
});

rejouer.addEventListener('click', function(){
    nbEssais = 0;
    Math.floor(Math.random()*100) + 1;
    userInput.value = '';
    output.textContent = 'Nouvelle partie, nouveau nombre aléatoire';
})