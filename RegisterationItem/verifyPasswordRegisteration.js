function verifyPasswordRegisteration() {  
  var pw = document.getElementById("pswd").value;  

  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill in the password!";  
     return false;  
  }  
   
 //minimum password length validation is 8
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be at least 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Password is correct");  
  }  
}