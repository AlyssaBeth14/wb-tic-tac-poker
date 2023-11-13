const grabID = document.querySelector('#grabID')
const setStyle = document.querySelector('#setStyle')
console.log(grabID);
console.log(setStyle);

function setCard() {
    const card = document.querySelector(`${grabID}.value`)
    console.log(card);
}

document.querySelector('#editCard').addEventListener('click', setCard)