window.onload = function () {  
  console.log("started to validate user >>>");
  //validateuser();
};


validateuser = () =>{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="vignesh" && password=="vignesh"){
        location.href = 'glassmorphism.html';
        }
    else{
        alert("invalid credentials")
    }
    

}
