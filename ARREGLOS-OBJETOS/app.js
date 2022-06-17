/******
 * Arreglos en JavaScript 
 */
var nombre=['Pablo', 'Carlos', 'Ana', 'Teresa'];
var vegetables =new Array('Tomate', 'Lechuga', 'Zanahoria'); 

console.log(nombre[2]);
console.log(nombre[1]);
console.log(vegetables[1]);


nombre[1] ='Jose'; 
console.log(nombre[1]);
vegetables[2]='Nabo';
console.log(vegetables[2]);

console. log(nombre.length);
console.log(vegetables.length);

/***********
 * Operaciones con arreglos 
 */
var frutas=['pera','manzana','uva','sandia'];
console.log(frutas); 
/*for(var i=0; i<=frutas.length-1;i++){
    console.log(frutas[i]);
} */

/*frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})*/

/*frutas.push('naranja');
console.log(frutas);
frutas.unshift('fresa');
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);

var pos=frutas.indexOf('uva');
console.log(pos);

frutas.splice(1,2);
console.log(frutas); */

//Arreglo con elementos de direntes tipos

//var persona =['Pablo', 'Vasquez',34, '99999999', 1.75];
//console.log(persona);

/** Objetos Literales 
var personas ={
    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos: ['Futboll','Peliculas','Inglés'],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(personas['gustos'])
personas.esCasado= false;
console.log(persona.esCasado); */

/*Objetos con la sintaxis Object*/
/*var persona2 = new Object();
persona2.nombre='Ana';
persona2.apellido ='Pinedo';
persona2['trabajo']='WebDeveloper';
console.log(persona2);*/

/*Objetos y Metodos */

var personas ={
    //Propuedades 
    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos: ['Futboll','Peliculas','Inglés'],
    trabajo: 'Instructor',
    esCasado: true,
    yearNacimiento: 1985,

    //Métodos 
    calcularEdad: function(){
        this.edad = 2019- this.yearNacimiento;
    }
};
personas.calcularEdad();
console.log(personas);
