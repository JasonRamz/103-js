//this is DB data
let passwordDB="jason";
//add the DB var Here
let emailDB="12345@gmail.com";

function login(){
    //get the values
    let password = document.getElementById("txtPassword").value;
    let email = document.getElementById("txtEmail").value;
    
    if(password==passwordDB && email===emailDB){
        window.location="home.html";
    }else{
        document.getElementById("notification").innerHTML='<p class="alert-error">Invalid Credentials!</p>';
    }
}