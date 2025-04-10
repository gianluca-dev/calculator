let input = '';
let displayInput = '';
let inputBuffer = '';

const container = document.getElementById('key-container');

container.addEventListener('click', (event) => {
    const key = event.target;
    if (key.classList.contains('key')) {
        getInput(key.textContent);
    }
});

function getInput(key) {
    displayInput += key;

    if (key === '×') {
        input += '*';
    } else if (key === '÷') {
        input += '/';
    } else {
        input += key;
    }

    document.getElementById('display').innerText = displayInput;
}

document.getElementById('equation').addEventListener('click', calculate);

function calculate() {
    try {
        let result = eval(input);
        document.getElementById('display').innerText = result;
        input = result.toString();
        displayInput = result.toString();
    } catch (error) {
        console.log('Invalid Input! ' + error);
        document.getElementById('display').innerText = 'Error';
        input = '';
        displayInput = '';
    }
}

document.getElementById('clear').addEventListener('click', clear);

function clear() {
    input = '';
    displayInput = '';
    document.getElementById('display').innerText = '';
}