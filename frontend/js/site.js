(function() {

    var loading = document.getElementsByClassName('loading-page');
    loading[0].style.visibility = 'hidden';

})();

//Menu Principal del Sitio
let menuBar = (menuSelected) => buildMenuBar(getMenuItems(menuSelected), document.getElementsByClassName('nav-bar-site'));

//Obtiene los items que tendra el menu principal
let getMenuItems = (menuSelected) => {

    var MenuPrincipalData = {
        "results" :
        [
            {
                MenuId : 1,
                MenuName : "Página principal",
                MenuClass : "nav-item",
                MenuAHrefClass : "nav-link hvr-underline-from-left",
                MenuUrl : "index.html",
                MenuEvent : ""
            },
            {
                MenuId : 2,
                MenuName : "Buscar",
                MenuClass : "nav-item",
                MenuAHrefClass : "nav-link hvr-underline-from-left",
                MenuUrl : "search.html",
                MenuEvent : ""
            },
            {
                MenuId : 3,
                MenuName : "Iniciar sesión",
                MenuClass : "nav-item",
                MenuAHrefClass : "nav-link hvr-underline-from-left",
                MenuUrl : "login.html",
                MenuEvent : ""
            },
            {
                MenuId : 4,
                MenuName : "Publicar",
                MenuClass : "nav-item",
                MenuAHrefClass : "nav-link hvr-underline-from-left",
                MenuUrl : "publish.html",
                MenuEvent : ""
            }
        ]
    };

    var menuCounter = 0;

    MenuPrincipalData.results.map((index) => {

        if(menuSelected == index.MenuId){
            MenuPrincipalData.results[menuCounter].MenuUrl = "#";
            MenuPrincipalData.results[menuCounter].MenuClass = "nav-item active";

            if(index.MenuId == 3){
                if(isSessionIniciazate("emailSession") == true){
                    MenuPrincipalData.results[menuCounter].MenuName = "Cerrar sesión";
                    MenuPrincipalData.results[menuCounter].MenuUrl = "#";
                    MenuPrincipalData.results[menuCounter].MenuAHrefClass = "nav-link hvr-underline-from-left close-session";
                    MenuPrincipalData.results[menuCounter].MenuEvent = "closeSession();";
                }
            }
        }
        else{
            if(index.MenuId == 3){
                if(isSessionIniciazate("emailSession") == true){
                    MenuPrincipalData.results[menuCounter].MenuName = "Cerrar sesión";
                    MenuPrincipalData.results[menuCounter].MenuUrl = "#";
                    MenuPrincipalData.results[menuCounter].MenuAHrefClass = "nav-link hvr-underline-from-left close-session";
                    MenuPrincipalData.results[menuCounter].MenuEvent = "closeSession();";
                }
            }
        }

        menuCounter++;

    });

    return MenuPrincipalData;

}

//Construye el cuerpo HTML del Menu Principal
let buildMenuBar = (menuItems, elementMenu) => {

    elementMenu[0].innerHTML = "";

    var menuLi = '';

    menuItems.results.map((index) => {

        var headerMenu = '', bodyMenu = '', footerMenu = '';

        headerMenu = "<li class=\""+ index.MenuClass +"\">"
        if(index.MenuEvent === ''){
            bodyMenu = "<a class=\"" + index.MenuAHrefClass +"\" href=\"" + index.MenuUrl + "\">" + index.MenuName + "</a>";
        }
        else{
            bodyMenu = "<a class=\"" + index.MenuAHrefClass +"\" onclick=\""+index.MenuEvent+"\" href=\"" + index.MenuUrl + "\">" + index.MenuName + "</a>";
        }
        footerMenu = "</li>";

        //Generamos el cuerpo de nuestras imagenes en codigo JS.
        menuLi = menuLi + (headerMenu + bodyMenu + footerMenu);
    });

    elementMenu[0].innerHTML = menuLi;

};

let messageAlert = (element, typeAlert, messageAlert) => {

    var headerAlert = "<div class=\"" + typeAlert + "\" role=\"alert\">";
    var bodyAlert = messageAlert + "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>";
    var footerAlert = "</div>";

    element.innerHTML = headerAlert + bodyAlert + footerAlert;

};

//Crea la variable de sesión
let createSession = (name, value) => {
    sessionStorage.setItem(name, value);
}

let destroySession = (name) => {
    sessionStorage.clear();
}

//Nos permite consultar la sesión que deseeamos
let getSession = (name) => {
    console.log(sessionStorage.getItem(name));
    return sessionStorage.getItem(name);
}

let isSessionIniciazate = (name) => {
    if(getSession(name) !== undefined && getSession(name) !== null){
        return true;
    }
    return false;
}

let closeSession = () =>{
    destroySession("emailSession");
    window.location.href = 'login.html';
}