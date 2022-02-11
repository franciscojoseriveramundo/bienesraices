const Usuario = require('../models/usuarios')

function createUser(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario

  console.log(req.body);

  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(1, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2017@gmail.com')
  var usuario2 = new Usuario(2, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2018@gmail.com')
  var usuario3 = new Usuario(3, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2019@gmail.com')
  var usuario4 = new Usuario(4, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2020@gmail.com')


  var usuarios = [];

  usuarios.push(usuario1);
  usuarios.push(usuario2);
  usuarios.push(usuario3);
  usuarios.push(usuario4);

  var usuarioNew = req.body;

  var max = 0;

  if(usuarios.length == 0){
    max = 0;
  }
  else{
    for(var i = 0; i<usuarios.length; i++){
      if(usuarios[i].id>max){
        max = usuarios[i].id;
      }
    }
  }

  usuarioNew.id = max + 1;

  usuarios.push(usuarioNew);

  res.status(200).send(usuarios)
}

function getUser(req, res) {
  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(1, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2017@gmail.com')
  var usuario2 = new Usuario(2, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2018@gmail.com')
  var usuario3 = new Usuario(3, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2019@gmail.com')
  var usuario4 = new Usuario(4, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2020@gmail.com')

  var usuarios = [];

  usuarios.push(usuario1);
  usuarios.push(usuario2);
  usuarios.push(usuario3);
  usuarios.push(usuario4);

  console.log(req);

  res.send(usuarios);
}

function updateUser(req, res) {

  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(1, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2017@gmail.com')
  var usuario2 = new Usuario(2, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2018@gmail.com')
  var usuario3 = new Usuario(3, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2019@gmail.com')
  var usuario4 = new Usuario(4, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2020@gmail.com')

  var usuarios = [];

  usuarios.push(usuario1);
  usuarios.push(usuario2);
  usuarios.push(usuario3);
  usuarios.push(usuario4);

  var found = false;

  var usuarioUpd;

  for(var i = 0; i<usuarios.length; i++){
    if(usuarios[i].id==req.params.id){
      found = true;

      usuarioUpd = req.body;

    }
  }

  if(found === false){
    res.status(200).send(`Usuario ${req.params.id} no fue encontrado para ser eliminado`);
  }
  else{
    usuarioUpd = { ...usuario1, ...usuarioUpd }
    res.send(usuarioUpd)
  }
}

function deleteUser(req, res) {

  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(1, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2017@gmail.com')
  var usuario2 = new Usuario(2, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2018@gmail.com')
  var usuario3 = new Usuario(3, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2019@gmail.com')
  var usuario4 = new Usuario(4, 'Francisco Jose', 'Rivera Mundo', 'pacoriveram2020@gmail.com')

  var usuarios = [];

  usuarios.push(usuario1);
  usuarios.push(usuario2);
  usuarios.push(usuario3);
  usuarios.push(usuario4);

  var found = false;

  for(var i = 0; i<usuarios.length; i++){
    if(usuarios[i].id==req.params.id){
      found = true;
    }
  }

  if(found === false){
    res.status(200).send(`Usuario ${req.params.id} no fue encontrado para ser eliminado`);
  }
  else{
    res.status(200).send(`El usuario ${req.params.id} eliminado`);
  }


}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}