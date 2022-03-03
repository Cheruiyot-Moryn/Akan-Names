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