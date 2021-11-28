var nameArray = [];

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

}

function sendSymReq(){

  var cbNone = document.getElementById("cbNone").value;
  console.log(cbNone);

}
