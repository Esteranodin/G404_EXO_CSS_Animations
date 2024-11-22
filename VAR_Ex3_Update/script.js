const spacingUser = document.querySelector('#spacing');
const blurUser = document.querySelector('#blur');
const colorUser = document.querySelector('#color');

const root = document.querySelector(':root');

colorUser.addEventListener('input', handleColorChoose);
blurUser.addEventListener('input', handleSpacingChoose);
spacingUser.addEventListener('input', handleBlurChoose);

function handleColorChoose(event) {
    const colorPick = event.target.value;
    root.style.setProperty('--color', colorPick);
};

function handleSpacingChoose(event) {
    const blurPick = event.target.value;
    const blurValue = event.target.dataset.sizing;
    root.style.setProperty('--blur', blurPick + blurValue);
};

function handleBlurChoose(event) {
    const spacingPick = event.target.value;
    const spacingValue = event.target.dataset.sizing;
    root.style.setProperty('--spacing', spacingPick + spacingValue);
};