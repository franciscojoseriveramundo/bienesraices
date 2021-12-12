(function() {

    menuBar(3);

    if(isSessionIniciazate("emailSession") === true){
        window.location.href = 'index.html';
    }

})();

let btnLogin = document.getElementsByClassName("btn-submit-lgn")[0];
let usernameTxt = document.getElementById("txtEmailUser");
let passwordTxt = document.getElementById("txtPassUser");

//Función de inicio de sesión
let btnLoginFunction = (e) => {

    var alertLgn = document.getElementsByClassName("alert-message")[0];

    if(!usernameTxt.value || !passwordTxt.value) {
        messageAlert(alertLgn, "alert alert-danger", "* Complete sus credenciales de acceso.");
    }
    else{

        createSession("emailSession", usernameTxt.value);

        if(getSession("emailSession") !== undefined && getSession("emailSession") !== null){
            messageAlert(alertLgn, "alert alert-success", "Su inicio de sesión ha sido completado.");
            setTimeout(function(){ window.location.href = 'index.html'; }, 3000);
        }
        else{
            messageAlert(alertLgn, "alert alert-danger", "No pudo completarse su solicitud, intentelo más tarde.");
        }
    }

};

//Funcion en los campos de texto que se ejecutará el inicio de sesión al momento de dar clic en Enter.
let txtLoginFunction = (e) => e.key == "Enter" ? btnLoginFunction() : null

//Eventos
btnLogin.addEventListener("click", (e) => btnLoginFunction(e)); //Boton Login
usernameTxt.addEventListener("keypress", (e) => txtLoginFunction(e)); //TextBox UserName
passwordTxt.addEventListener("keypress", (e) => txtLoginFunction(e)); //TextBox Password