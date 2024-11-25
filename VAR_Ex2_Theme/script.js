const bouton = document.querySelector('#chooser');
const root = document.querySelector(':root');

bouton.addEventListener('input', handleColorChoose);


function handleColorChoose(event) {
    const colorPick = event.target.value;
    root.style.setProperty('--main-color', colorPick);
};

// event input change en temps réel VS possisble d'utiliser change pour attendre que le choix soit fait et valeur choisie