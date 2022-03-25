(function() {

    menuBar(0);

    if(isSessionIniciazate("emailSession") === true){
        window.location.href = 'index.html';
    }

})();

let btnLogin = document.getElementsByClassName("btn-submit-lgn")[0];
let usernameTxt = document.getElementById("txtEmailUser");

//Función de inicio de sesión
let btnLoginFunction = (e) => {

    var alertLgn = document.getElementsByClassName("alert-message")[0];

    if(!usernameTxt.value) {
        messageAlert(alertLgn, "alert alert-danger", "* Ingrese su correo electrónico.");
    }
    else{
        messageAlert(alertLgn, "alert alert-success", "Su contraseña ha sido enviada a tu correo electrónico.");
    }

};

//Funcion en los campos de texto que se ejecutará el inicio de sesión al momento de dar clic en Enter.
let txtLoginFunction = (e) => e.key == "Enter" ? btnLoginFunction() : null

//Eventos
btnLogin.addEventListener("click", (e) => btnLoginFunction(e)); //Boton Login
usernameTxt.addEventListener("keypress", (e) => txtLoginFunction(e)); //TextBox UserName