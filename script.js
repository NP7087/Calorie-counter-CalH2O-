let totalCalories = 0;
let totalWater = 0;

function addCalories() {
  const val = document.getElementById("calInput").value;
  totalCalories += Number(val);
  document.getElementById("calTotal").textContent = totalCalories;
  document.getElementById("calInput").value = "";
}

function addWater() {
  totalWater += 1;
  document.getElementById("waterTotal").textContent = totalWater;
}
