
var nameArray = [];
var person = {
  userName: "",
  password: "",
  zip: ""
};

function ForgotEFunction(){
alert("Email Sent, Please make sure email is inserted before clicking");
}

function addNameToList(){

  var nameInputed = document.getElementById("addNameForm").value;
  nameInputed = nameInputed + '\n';

    nameArray.push(nameInputed);

  console.log(nameArray);
  document.getElementById("listArea").value = nameArray;
}

function sendList(){

  alert("we have stored this names, thank you!")

}

function sendSymReq(){


  var noneBox = document.getElementById("cbNone");
  var cbFever = document.getElementById("cbFever");
  var cbC = document.getElementById("cbC");
  var cbB = document.getElementById("cbB");
  var cbSmell = document.getElementById("cbSmell");
  var cbSore = document.getElementById("cbSore");
  var cbFatigue = document.getElementById("cbFatigue");
  var cbNausea = document.getElementById("cbNausea");

  if (noneBox.checked == true) {
    alert("You do not need to get tested at this time");
  } else if (cbFever.checked == true || cbB.checked == true || cbNausea.checked == true || cbFatigue.checked == true ||cbSmell.checked == true ) {
    location.replace('http://localhost:3000/testingLocation.html');
  } else if (cbSore.checked){
    alert("You are not required to get tested at this time");
  }

}

function getUser(){

person.userName = document.getElementById("userName").value;
person.password = document.getElementById("inputPassword").value;
person.zip = document.getElementById("inputZip").value;

location.replace('http://localhost:3000/loggedIndex.html');

console.log(person);

}

function logUser(){

  var nameInput = document.getElementById("userName").value;
  var passwordInput = document.getElementById("inputPassword").value;

  if (nameInput) {
    location.replace('http://localhost:3000/loggedIndex.html');
  } else {
    alert("Fail, Wrong Credentials");
  }

  console.log(person.userName);
  console.log(person.password);
}

function statusRequest(){

  var cbPositive = document.getElementById("cbPositive");
  var cbNegative = document.getElementById("cbNegative");
  var cbV = document.getElementById("cbV");

  if (cbPositive.checked == true) {
    alert("Please stay at home, and follow the Covid 19 Guidelines. This user is now marked as Positive");
  } else if (cbNegative.checked == true) {
    alert("You may return to work, please complete the symptoms page. This user is now marked as Negative");
  } else if (cbV.checked == true){
    location.replace('http://localhost:3000/validation.html');
  }

}

function checkVaccination(){

  var cardID = document.getElementById("cardID").value;

  if (cardID) {
    alert("User Marked as Vaccinated");
  }

}
