//MANEJO DE FECHA Y HORA 
//Unix Epoch - 01 Enero 1970 00:00:00 - 0
/*const ahora=new Date();
const timestamp = ahora.getTime();
console.log(timestamp.toString());

const FechaActual = new Date(timestamp);
console.log(FechaActual.getFullYear());

const fecha1 = new Date("December 17,1995 06:20:25");
console.log(ahora.toString());
console.log(fecha1.toString());

console.log(`Año ${ahora.getFullYear()}`);
console.log(`Mes: ${ahora.getMonth()}`);
console.log(`Dia: ${ahora.getDate()}`);
console.log(`Dia: ${ahora.getDay()}`);
console.log(`Hora: ${fecha1.getHours()}`);
console.log(`Minutos: ${fecha1.getMinutes()}`);
console.log(`Segundos: ${fecha1.getSeconds()}`); */

/* Ejercicio de comparación de fechas 
Crear dos objetos Date, uno con una fecha cualquiera y el siguiente
con la fecha actual, luego comparar ambos valores, 
visualizar cual es la fecha menor a la otra. */

const fechaPasado = new Date("April 04,2001 06:20:25");
console.log(fechaPasado.toString());

const FechaHoy = new Date();
console.log(FechaHoy.toString());

if(fechaPasado<FechaHoy){
    console.log(`Fecha: ${fechaPasado.toString()} es menor a la fecha ${FechaHoy.toString()}`);
} else{
    console.log(`Fecha: ${FechaHoy.toString()} es menor a la fecha ${fechaPasado.toString()}`);
}