/************
 * SENTENCIA IF/ELSE

var nombre= 'Pablo';
var estadoCivil= 'soltero';
var estaCasado=true;

if(estaCasado){
    //si es verdadera la condicion
    console.log(nombre + ' esta casado');
} else{
    console.log(nombre + ' esta soltero');
} */

/* Sentencias Condicionales 
var nombre= 'Pablo';
var edad=70;
//edad <12 es un niño. 
//edad <11, es >18, es un adolescente. 
//edad > 17, es <60, es un adulto
//edad >60, es un anciano. 

if (edad<12){
    console.log(nombre + ' es un niño. '); 
}
else if ((edad>11) && (edad<18)){
    console.log(nombre + ' es un adolescente');
}
else if ((edad >17)&& (edad<60)){
    console.log(nombre + ' es un adulto');
}
else{
    console.log(nombre + ' es un anciano');
} */

/* OPERADOR TERNARIO 
var nombre= 'Pablo';
var edad=16; 
edad >= 18 ? console.log (nombre + ' es mayor de edad') : console.log(nombre + ' es un adolescente'); 
*/

/* sentencia switch 
var mes = 3; 
switch (mes){
     case 1: 
        console.log ('Enero');
        break; 
     case 2: 
        console.log ('Febrero');
         break;
     case 3:
         console.log ('Marzo');
         break;
     case 4: 
        console.log ('Abril');
        break;
} */

/* BUCLES 
//SENTENCIA FOR
for (var i=10; i>=1; i--){
    console.log(i);
} */

/*SENTENCIA WHILE
var i=10; 
while(i>=1){
    console.log(i);
    i--;
} */

/* SENTENCIA DO WHILE 
var i=12;
do{
    console.log(i);
    i++;
}while (i<=10) */

/*VALORES VERDADEROS Y FALSOS 
VALORES FALSOS: UNDEFINED, NULL, 0, ''
VALORES VERDADEROS: NOT valores falses 

var edad; 
edad=10;
if(edad){
    console.log('Variable esta definida');
} else{
    console.log('Variable no definida');
}

//operadores de igualdad 
if(edad===10){
    console.log('Variable con coersion');
} else{
    console.log('Variable sin coersion');
} */

/* EJERCICIO DE SENTENCIAS 
Tienes dos alumnos, Pablo y Maria. 
Pablo tiene las siguientes notas en el curso de JavaScript: 14, 8 y 16
Maria tiene las siguientes notas del mismo curso: 12, 18 y 10. 
Calcular el promedio de cada alumno, ademas indicar quien tiene el promedio superior
e indica si el alumno esta aprobado, para ello su promedio
debe ser superior a 13. */

var promPablo, promMaria;
promPablo=((14+8+16)/3);
promMaria=((12+18+10)/3);
if(promPablo>promMaria){
    console.log('El promedio de Pablo es superior al de Maria con un promedio de: ',promPablo);
} else if(promMaria>promPablo){
    console.log('El promedio de Maria es superior al de Pablo con un promedio de: ',promMaria);
} else{
    console.log('Pablo y Maria tiene los promedios iguales');
}
if(promMaria>13){
    console.log('Maria aprobo el curso con un promedio de: ', promMaria);
} else{
    console.log('Maria no aprobo el curso con un promedio de: ',promMaria);
}
if(promPablo>13){
    console.log('Pablo aprobo el curso con un promedio de: ', promPablo);
} else{
    console.log('Pablo no aprobo el curso con un promedio de: ',promPablo);
}