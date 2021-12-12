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
                MenuUrl : "index.html"
            },
            {
                MenuId : 2,
                MenuName : "Buscar",
                MenuClass : "nav-item",
                MenuAHrefClass : "nav-link hvr-underline-from-left",
                MenuUrl : "search.html"
            },
            {
                MenuId : 3,
                MenuName : "Iniciar sesión",
                MenuClass : "nav-item",
                MenuAHrefClass : "nav-link hvr-underline-from-left",
                MenuUrl : "login.html"
            },
            {
                MenuId : 4,
                MenuName : "Publicar",
                MenuClass : "nav-item",
                MenuAHrefClass : "nav-link hvr-underline-from-left",
                MenuUrl : "publish.html"
            }
        ]
    };

    var menuCounter = 0;

    MenuPrincipalData.results.map((index) => {
        
        if(menuSelected == index.MenuId){
            MenuPrincipalData.results[menuCounter].MenuUrl = "#";
            MenuPrincipalData.results[menuCounter].MenuClass = "nav-item active";
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
        bodyMenu = "<a class=\"" + index.MenuAHrefClass +"\" href=\"" + index.MenuUrl + "\">" + index.MenuName + "</a>";
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