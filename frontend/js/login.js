(function() {
    menuBar(3);
})();

let btnLogin = document.getElementsByClassName("btn-submit-lgn")[0];
let usernameTxt = document.getElementById("txtEmailUser");
let passwordTxt = document.getElementById("txtPassUser");

let btnLoginFunction = () => {

    var alertLgn = document.getElementsByClassName("alert-message")[0];
    
    if(!usernameTxt.value || !passwordTxt.value) {
        messageAlert(alertLgn, "alert alert-danger", "* Complete sus credenciales de acceso.");
    }
    else{
        messageAlert(alertLgn, "alert alert-success", "Su inicio de sesión ha sido completado.");
    }
};

let txtLoginFunction = (e) => {

    console.log(e);
    
    if(e.key == "Enter"){
        btnLoginFunction();
    }

}

btnLogin.addEventListener("click", () => btnLoginFunction());
usernameTxt.addEventListener("keypress", (e) => txtLoginFunction(e));
passwordTxt.addEventListener("keypress", (e) => txtLoginFunction(e));