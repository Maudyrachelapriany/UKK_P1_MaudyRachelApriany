let display = document.getElementById('display');
let currentInput = '';
let previousValue = null;

function tambahAngka(angka) {
    if (angka === '%') {
        if (currentInput) {
            currentInput = parseFloat(currentInput) / 100;
            display.value = currentInput;
        }
    } else {
        currentInput += angka;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    previousValue = null;
    display.value = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function hitung() {
    try {
        // Gantilah '--' dengan '+' agar 2--2 menjadi 2+2, yang lebih sesuai dengan hasil yang diinginkan
        let expression = currentInput.replace(/--/g, '+');
        
        let result = new Function('return ' + expression)();
        
        if (result === Infinity || result === -Infinity) {
            display.value = 'Tidak dapat dibagi dengan 0';
            display.style.fontSize = '20px';  // Make the text smaller for this message
        } else {
            previousValue = result;
            currentInput = result.toString();
            display.value = currentInput;
            display.style.fontSize = '30px';  // Reset font size for normal results
        }
    } catch (e) {
        display.value = 'Error';
        display.style.fontSize = '20px';  // Reset font size for error messages
    }
}
