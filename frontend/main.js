
function updateUI() {
  // Logik zur Aktualisierung des UI hier
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const bmi = calculateBMI(weight, height);
  
  console.log("weight: %s, height: %s, bmi: %s", weight, height, bmi);

  const result = document.getElementById('result');
  result.innerHTML = bmi;

}

function calculateBMI(weight, height) {
  // Logik zur Berechnung des BMI hier
  const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
  const bmi = Math.round(weight / (heightInMeters * heightInMeters));
  return bmi;
}

if (typeof module !== "undefined" && module.exports) {
  // this if from nodejs
  // this code will be executed in nodejs
  // not in the browser
  module.exports = { calculateBMI };
} else {
  console.log("Frontend-Modul geladen");
  const form = document.getElementById('bmiForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    updateUI();
  })

}

