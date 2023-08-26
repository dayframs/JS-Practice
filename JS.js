function multiply() {
    myResult.innerText = inp1.value * inp2.value;
}
function display(value) {
    document.getElementById('displayResult').innerText += value;
}
function calculate() {
    let x = document.getElementById('displayResult').innerText;
    y = eval(x);
    document.getElementById('displayResult').innerText = y;
}
function clearDisplay() {
    document.getElementById('displayResult').innerText = "";
}