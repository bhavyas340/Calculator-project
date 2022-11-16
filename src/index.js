import "./styles.css";
var buttons = document.getElementsByClassName("button");
var displays = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operand3 = null;
var v1 = 0;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+") {
      operator = "+";
      operand2 = eval();
    } else if (value == "=") {
      operand3 = operand3 + v1;
      displays.innerHTML = operand3;
    } else {
      v1 = displays.innerHTML += value;
    }
  });
}
