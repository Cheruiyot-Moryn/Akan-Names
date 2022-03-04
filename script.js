// List of female and male names,,.
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const maleNames = [
  "Kwasi", // 0
  "Kudwo", // 1
  "Kwabena", // 2
  "Kwaku", // 3
  "Yaw", // 4
  "Kofi", // 5
  "Kwame", // 6
];

// Get a user's name...
const getAkanName = (date_of_birth, gender) => {
  // Contruct a date...
  const date = new Date(date_of_birth);
  // Get the day => number..if day is 1 => sunday
  const day = date.getDay();
  // Get name position or index...
  const index = day - 1;
  if (gender === "male") {
    // Gender is male, return a male name...
    return maleNames[index];
  } else if (gender === "female") {
    // Gender is female, return a female name...
    return femaleNames[index];
  }
};

// Get form element...
const form = document.getElementById("form");
// Get akan name element...
const akan_name = document.getElementById("akan-name");
// Collect data from form input elements...
form.addEventListener("submit", (event) => {
  // Prevent a form from submiting itself...
  event.preventDefault();
  // Get input elements..
  const { date, gender} = event.target.elements;
  // Get the input values...
  const date_value = date.value;
  const gender_value = gender.value;
  // Get akan name...
  const name = getAkanName(date_value, gender_value);
  // Do domething with the name...
   akan_name.innerHTML = `<div>Your Akan Name would be : <b>${name}</b></div>`
});