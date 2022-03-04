// array showing the male and female akan names

var aNames = function(YY, MM, DD, gd) 
{
  var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var mNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var DD = new Date(YY, --MM, DD);
  if (gd === "Male") {
      return DD && mNames[DD.getDay()];
  } else {
      return DD && fNames[DD.getDay()];
  }
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      var YY = parseInt($("#year").val());
      var MM = parseInt($("#month").val());
      var DD = parseInt($("#date").val());
      var gd = $("input:radio[name=gender]:checked").val();
      var result = aNames(YY, MM, DD, gd);
      alert("The Akan-Name is: " + result);
      //refresh page
      document.getElementById("form").reset();
  });
});