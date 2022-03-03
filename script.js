// variables of the Akan male and female names and days of the week

var CC, YY, DD, d, dayValue;
var dayNames =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleNames =["Akosua", "Adwoa","Abenaa", "Akua","Yaa", "Afua", "Ama"];
var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "KOfi", "Kwame"];

function getGender(){
    var genders = document.getElementsByName("gender");

    for (let gender of genders){
        if (gender.checked){
          return gender.value;
        }
      }
}
let myGenderValue = getGender();
  console.log(myGenderValue);

  function monthValue() {
      var monthOfBirth = Number(document.getElementById("month-input").value);

// validating the month value

      if (monthOfBirth < 1 || monthOfBirth > 12) {
        return false;
      } else {
        return true;
      }
  }

  function dayValue(){
      var dayOfBirth = Number(document.getElementById("day-input").value);
      year = document.getElementById("year").value;
     CC = parseInt(year.substring(0,2));
     YY = parseInt(year.substring(2,4));
     MM = parseInt(document.getElementById("month").value);
     DD = parseInt(document.getElementById("date").value);

      //formula to determine day of birth (Sunday = 1, Monday = 2)etc..
      
     d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
     console.log(d);
return (Math.floor(d));
  }

