//localStorage.setItem('nombreUsuario','Judith');
//localStorage.setItem('ubicacion','Aguascalientes');
//console.log(localStorage.getItem('nombreUsuario'));
//console.log(localStorage.getItem('ubicacion'));

//localStorage.removeItem('nombreUsuario');
//localStorage.clear();

//NOTACION JSON//
const usuario={
    nombre:'Judith',
    edad: '30'
}

const usuarioJSON =JSON.stringify(usuario);
localStorage.setItem('usuario',usuarioJSON);

const userJSON = localStorage.getItem('usuario');
const usuario2 = JSON.parse(userJSON);
console.log(`${usuario2.nombre}: ${usuario2.edad}`);