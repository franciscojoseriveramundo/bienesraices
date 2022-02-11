const Menu = require('../models/menu')

function getMenu(req, res) {

  var menu = [];

  menu.push(new Menu(1,"Página principal","nav-item","nav-link hvr-underline-from-left","index.html",""));
  menu.push(new Menu(2,"Buscar","nav-item","nav-link hvr-underline-from-left","search.html",""));
  menu.push(new Menu(3,"Iniciar sesión","nav-item","nav-link hvr-underline-from-left","login.html",""));
  menu.push(new Menu(4,"Publicar","nav-item","nav-link hvr-underline-from-left","publish.html",""));

  res.send(menu);

}

module.exports = {
    getMenu
}