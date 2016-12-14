function chekName(){
  if(document.getElementById('name').value.length < 2){
    document.getElementById('name').style.borderColor = 'red';
  }
}

function chekSurname(){
  if(document.getElementById('surname').value.length < 2){
      document.getElementById('surname').style.borderColor = 'red';
  }
}

function chekLogin(){
  if(document.getElementById('loginField').value.length < 2){
      document.getElementById('loginField').style.borderColor = 'red';
  }
}
function chekPassword(){
  if(document.getElementById('password').value.length < 6){
      document.getElementById('password').style.borderColor = 'red';
  }
  else if (document.getElementById('password').value.length < 8) {
    document.getElementById('password').style.borderColor = 'yellow';
  }
}
function chekConfirmPassword(){
  if(document.getElementById('confirmPassword').value != document.getElementById('password').value){
      document.getElementById('confirmPassword').style.borderColor = 'red';
  }
}

function chekPhone(){
  var regex = new RegExp("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$", 'ig');
  if(!regex.test(document.getElementById('phone').value)){
    document.getElementById('phone').style.borderColor = 'red';
  }
}

function removeColor(element){
  document.getElementById(element).style.borderColor = 'white';
}

function submit1(){
  var gender = document.getElementById('male').checked || document.getElementById('female').checked;
  var name = chekField('name');
  var surname = chekField('surname');
  var login = chekField('loginField');
  var password  = chekField('password');
  var confirmPassword = chekField('confirmPassword');
  var phone = chekField('phone');
  var chekAllField = name || surname || login || password || confirmPassword || phone || !(gender);
  if(chekAllField){
    alert('Необходимо корректно заполнить поля');
    return false;
  }
  else{
    return true;
  }
}

function chekField(field){
  var color = document.getElementById(field).style.borderColor;
  var value = document.getElementById(field).value;
  if(document.getElementById(field).style.borderColor == 'red' || document.getElementById(field).value == ""){
    document.getElementById(field).style.borderColor = 'red';
    return true;
  }
  else return false;
}
function usp(){
  window.location.href = "index.html";
}
