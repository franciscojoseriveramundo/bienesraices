// Menu.js
/** Clase que representa a un menu de la plataforma*/
class menu {
    constructor(id, namemenu, menuclass, menuahref, menuurl, menuevent)
    {
      this.id = id;
      this.namemenu = namemenu;
      this.menuclass = menuclass;
      this.menuahref = menuahref;
      this.menuurl = menuurl;
      this.menuevent = menuevent;
    }
}

module.exports = menu;