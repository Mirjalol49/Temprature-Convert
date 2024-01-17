//!Calling Items
const celsius = document.getElementById("celsius");
const faranheit = document.getElementById("faranheit");
const btn = document.getElementById("btn");

//!Setting event listeners
celsius.addEventListener("input", updateCelsius);
faranheit.addEventListener("input", updateFaranheit);
btn.addEventListener("click", refresh);

//!Setting a Celsius function
function updateCelsius() {
  let celsiusValue = Number(celsius.value);
  let calculateC = (celsiusValue * 9) / 5 + 32;
  faranheit.value = calculateC.toFixed(1);

  //!Makes it empty
  if (celsius.value.length === 0) {
    faranheit.value = null;
  }
}

//!Setting a Faranheit function
function updateFaranheit() {
  let faranheitValue = Number(faranheit.value);
  let calculateF = faranheitValue - 32 * (5 / 9);
  celsius.value = calculateF.toFixed(1);

  //!Makes it empty
  if (faranheit.value.length === 0) {
    celsius.value = null;
  }
}

//!Setting a refresh function
function refresh() {
  location.reload();
}
