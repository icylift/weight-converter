// Calling the Inputs by ID
let kgRef = document.getElementById("kg");
let lbsRef = document.getElementById("lbs");
let ozRef = document.getElementById("oz");

let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  lbsRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
