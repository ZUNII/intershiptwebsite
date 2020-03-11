
function validateform(){ 
var name=document.form.name.value;  
var password=document.form.password.value;  

if (name==null || name==""){  
  alert("Sie müssen einen Namen eingeben.");  
  return false;  
}else if(password.length < 6){  
  alert("Passwort muss mindestens 6 Zeichen enthalten");  
  return false;  
  }  else {
  	alert("Check")
  }
}  


// Email validation
function validateemail() 	 
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Bitte geben Sie eine verfügbare Email ein.");  
  return false;  
  }  else {
  	alert("Check");
  }
}  

/* Validate Zahlen Input */
function meineFunktion(event) {
  console.log(event);
  event.preventDefault();
  var x, text;

  // Zahl bekommen im Feld mit der id("zahl") 
  x = event.target.querySelector(".numbercheck-zahl").value;

  // Wenn x keine Zahl(isNaN -> is Not a Number) ist oder Größer als 10 oder kleiner als 1
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Eingabe war fehlerhaft";
  } else {
    text = "Eingabe war OK";
  }
  document.getElementById("demo").innerHTML = text;
}



var forms = document.querySelectorAll('.numbercheck');
for(var i=0; i<forms.length; i++) {
  var form = forms[i]
  form.addEventListener('submit', meineFunktion)
}