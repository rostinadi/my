let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Ошибка';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1); // Удаляем последний символ
}