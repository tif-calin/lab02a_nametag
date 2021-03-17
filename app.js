const inName = document.getElementById('input-name');
const inPronouns = document.getElementById('input-pronouns');
const inColor = document.getElementById('input-color');

const outName = document.getElementById('output-name');
const outPronouns = document.getElementById('output-pronouns');
const outTag = document.getElementsByClassName('nametag')[0];

const btnGo = document.getElementById('button-go');

const btn_click = () => {
    //set name
    outName.innerText = (inName.value === "") ? "Name" : inName.value;

    //set pronouns
    outPronouns.innerText = (inPronouns.value === "") ? "Name" : inPronouns.value;

    //set color
    outTag.style.backgroundColor = inColor.value;

    //reset inner text of inputs
    inName.value = '';
    inPronouns.value = '';
};

btnGo.addEventListener('click', btn_click);