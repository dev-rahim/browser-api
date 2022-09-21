// alert('ALL GOOD');

const motherIsComming = () => {
    alert('Mother is coming');
}

const askForPicnic = () => {
    const res = confirm("wan't to go picnic?");

    if (res !== false) {
        console.log(res);
        alert('pay first');
    } else {
        alert('Ok! Thanks')
    }
}

const getName = () => {
    const name = prompt('What is your name?');
    console.log(name);
}