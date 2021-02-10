const inName = document.getElementById('name-input');
const inColor = document.getElementById('color-input');
const inSize = document.getElementById('size-input');

const outName = document.getElementsByClassName('name')[0];
const outTag = document.getElementsByClassName('nametag')[0];

const goButton = document.getElementById('go-button');

const buttonClick = () => {
    // Set name
    outName.innerText = (inName.value === "") ? "Name" : inName.value;

    // Set color
    outTag.style.backgroundColor = inColor.value;

    // Set font size
    switch(inSize.value) {
        case "small":
            outName.style.fontSize = "25px";
            break;
        case "big":
            outName.style.fontSize = "45px";
            break;
        default:
            outName.style.fontSize = "35px";
            break;
    }

    inName.value = '';
}

goButton.addEventListener('click', buttonClick);