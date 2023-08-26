function multiply() {
    myResult.innerText = inp1.value * inp2.value;
}
function display(y) {
    displayResult.innerText += y;
}
function calculate() {
    let z = displayResult.innerText;
    displayResult.innerText = eval(z);
}
function clearDisplay() {
    displayResult.innerText = "";
}