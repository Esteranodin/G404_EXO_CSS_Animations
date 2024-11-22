const bouton = document.querySelector('#chooser');
const root = document.querySelector(':root');

bouton.addEventListener('input', handleColorChoose);


function handleColorChoose(event) {
    const colorPick = event.target.value;
    root.style.setProperty('--main-color', colorPick);
};

