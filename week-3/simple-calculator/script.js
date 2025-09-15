const display = document.getElementById("display");
let current = "";
let operator = "";
let firstValue = "";

function updateDisplay(val) {
  display.textContent = val || "0";
}

document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    const value = btn.textContent;

    if (!action) {
      current += value;
      updateDisplay(current);
    } else if (action === "operator") {
      if (current === "") return;
      firstValue = current;
      operator = value === "x" ? "*" : value;
      current = "";
    } else if (action === "equal") {
      if (!firstValue || !current) return;
      const result = eval(`${firstValue}${operator}${current}`);
      updateDisplay(result);
      current = result.toString();
      firstValue = "";
      operator = "";
    } else if (action === "clear") {
      current = "";
      firstValue = "";
      operator = "";
      updateDisplay("0");
    }
  });
});
