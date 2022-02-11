// Usuarios.js
/** Clase que representa a un usuario de la plataforma*/
class usuarios {
    constructor(id, username, nombre, apellido, email, password)
    {
      this.id = id;
      this.username = username;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
    }
}

module.exports = usuarios;