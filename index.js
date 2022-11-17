const display = document.querySelector(".display h1");
let isEql = false;
function calculator(val) {
  if (val === "=") {
    const result = eval(display.innerHTML);
    const finalResult = result.toFixed(2);
    display.innerHTML = finalResult;
    isEql = true;
  } else if (val === "C") {
    display.innerHTML = "0.00";
  } else {
    if (display.innerHTML === "0.00" || isEql) {
      display.innerHTML = val;
      isEql = false;
    } else {
      display.innerHTML += val;
    }
  }
}
