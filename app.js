const inName = document.getElementById('input-name');
const inPronouns = document.getElementById('input-pronouns');
const inColor = document.getElementById('input-color');
const inFont = document.getElementById('input-font');

const outName = document.getElementById('output-name');
const outPronouns = document.getElementById('output-pronouns');
const outTag = document.getElementsByClassName('nametag')[0];
const outCount = document.getElementById('output-count');

const btnGo = document.getElementById('button-go');

let changeCount = 0;

const btn_click = () => {
    // jokes
    const names = ["Chocolate", "Rosemary", "Snoop Dogg", "Identity Theft", "Ambulance"];
    const prons = ["her/she", "she/herb", "hizzle/shizzle", "your/yours", "wee/woo"];
    let i = Math.floor(Math.random() * names.length);

    //set count
    if (outName.textContent !== inName.value) changeCount++;

    //set name
    outName.textContent = (inName.value === "") ? names[i] : inName.value;

    //set pronouns
    outPronouns.textContent = (inPronouns.value === "") ? prons[i] : inPronouns.value;

    //set color
    outTag.style.backgroundColor = inColor.value;

    //reset inner text of inputs
    inName.value = '';
    inPronouns.value = '';

    outCount.textContent = changeCount;
};

const clr_change = () => {
    outTag.style.backgroundColor = inColor.value;
}

const fnt_change = () => {
    outName.style.fontFamily = `"${inFont.value}", "Comic Sans", cursive`;
}

btnGo.addEventListener('click', btn_click);
inColor.addEventListener('change', clr_change);
inFont.addEventListener('change', fnt_change);