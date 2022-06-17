/*function bienvenido(){
    return 'Hola Bienvenido a la seccion de funciones';
}
var mensaje= bienvenido();
console.log(mensaje);

//Partes de una funcion 
//entradas(parametros), código, salida(return)

function cuadradoNumero(num){
   var resultado=num*num;
   return resultado;
}

var numero=3;
 var valor= cuadradoNumero(numero);
 console.log(valor);
console.log(cuadradoNumero(5));

//Funcion que convierte de grados Fahtenheit a Celsius
//32F=0C, 68F=20C.
// C=(F-32)*5/9
function convertirFAC(gradoFah){
    var celsius=(gradoFah-32)*5/9;
    return celsius;
}

var tempUno= convertirFAC(32);
var tempDOS =convertirFAC(68);
console.log(tempUno);
console.log(tempDOS);


// CALCULAR EDAD
function calcularEdad(yearNacimiento){
    return 2022-yearNacimiento;
}

var edad= calcularEdad(1990);
var edad2= calcularEdad(2001);
var edad3= calcularEdad(2008);
console.log(edad);
console.log(edad2);
console.log(edad3);

//EJERCICIO DE CODIFICACION 3
Calcular cuantos años le falta a una persona para quw se jubile 
una persona se jubila a los 65 años de edad. 
Enviar como datos a la funcion su año de nacimiento y nombre. 


function jubilacion(yearNacimiento, nombre){
    var edad= calcularEdad(yearNacimiento); 
    var yearJubilacion= 65-edad;
    console.log(nombre+ ' Le faltan '+ yearJubilacion+ ' años para su jubilación');
}
jubilacion(1990, 'Pablo');
jubilacion(1978, 'Jose'); */


/*FUNCIONES COMO EXPRESIONES */
//Argumento UNDEFINED
var nombre;
var prueba = function(n){
    return 'Hola ' + n;
}
nombre='Eli';
console.log(prueba(nombre));

//ARGUMENTOS NULOS

var a; 
a = null; 
var valorNulo = function(){
    return a; 
}
console.log(valorNulo(a));

//Argumentos por default 

var sumar=function(a=5,b=3,c=3){
    return a+b+c;
}
console.log(sumar());

//Plantillas de cadenas (template string)
var nombre='Pablo';
console.log(`El nombre es: ${nombre}`); 

var a=5; 
var b=10; 
console.log(`La suma es : ${a+b}`); 

/************
 * EJERCICIO 4
 * Implementar una funcion que nos permita evaluar 
 * el procentaje de respuestas positivas y negativas de un examen 
 * La funcion debe recibir el nombre, la cantidad de 
 * respuestas positivas y negativa 
 * 
 * La funcion debe calcular el porcentaje que representa cada 
 * tipo de respuesta, en una base de 100 preguntas. 
 * 
 * De las respuestas positivas se define el score de la persona en: 
 * A(>90%), B(70% -89%),C(45%-69%), D(<45%)
 */

var calcularScore = function(nomnbre, pos, neg){
    var porPos=(pos /100)*100; 
    var porNeg=(neg/100)*100; 
    var score= '';
    if(porPos >90){
        score='A';
    } else if(porPos>=70){
        score='B';
    } else if (porPos>=45){
        score='C';
    }else{
        score='D';
    }
    return `${nombre} tiene el score ${score}, Positivas: ${porPos}%, Negativas: ${porNeg}%`;
}

var resultado =calcularScore('Pablo', 65, 35);
console.log(resultado);