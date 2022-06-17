/*let miLibroA = {
    titulo:'El Libro de JavaScript',
    autor:'Grover Pablo Vazquez',
    paginas:400,
    publicado:false
}

let miLibroB ={
    titulo:'Programacion en PHP',
    autor:'Pablo Vazquez',
    paginas:700,
    publicado:true
}


console.log(miLibroA.publicado);
console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);
miLibroA.paginas=500;
console.log(miLibroA.paginas);

let getResumen = (libro) =>{
    return{
        resumen:`${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas:`${libro.titulo} tiene ${libro.paginas} paginas`
    }
}

let libroAResumen=getResumen(miLibroA);
let libroBResumen=getResumen(miLibroB);

console.log(libroBResumen.resumen);
console.log(libroBResumen.resumenPaginas);

console.log(libroAResumen.resumen);
console.log(libroAResumen.resumenPaginas);

//Ejercicio, crear un objeto persona que tenga las siguientes prop: 
//nombre, edad, ciudad
//cambiar la edad
//mostrar datos de la persona

let persona={
    nombre:'Judith',
    edad:21,
    ciudad:'Aguascalientes'
}
console.log(persona);
console.log(`${persona.nombre} tiene ${persona.edad} años y vive en la ciudad ${persona.ciudad}`);
persona.edad=22;
console.log(persona);*/

//Referencia de Objetos//

/*let persona={
    nomnbre:'Eli',
    edad:30,
    sueldo:1200
}

let otraPersona=persona;
otraPersona.sueldo=1500;
console.log(otraPersona);

let cambiarSueldo =(p,monto) => {
    p.sueldo = p.sueldo+monto;
    //console.log(p);
}

cambiarSueldo(persona,500);
console.log(otraPersona);
console.log(persona);*/

//Metodos
/*let persona={
    nomnbre:'Eli',
    edad:30,
    sueldo:1200,
    metodoPrueba: function(){
        //console.log('Escribiendo desde el metodo Prueba');
        return 'Resultado desde prueba';
    },
    cambiarEdad: function(e){
        this.edad = this.edad+e;
    }
}

let result = persona.metodoPrueba();
console.log(result);
persona.cambiarEdad(3);
console.log(persona.edad);*/


// OBJETO String //

/*let nombre = 'Grover Vasquez';
let clave='12309clave567.e';

console.log(nombre.length);
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.trim());

console.log(clave.includes('clave',5));*/

//DESTRUCTURACION DE OBJETOS //


const getPersonaDatos=() =>{
    const respuesta = [
        {
            codigo:200,
            data:{
                persona:{
                    nombre:'Eli',
                    direccion:{
                        ciudad: 'Ags',
                        pais:'Mexico'
                    }
                }
            }
        },
        {
        codigo:300,
            data:{
                persona:{
                    nombre:'Ana',
                    direccion:{
                        ciudad: 'Santiago',
                        pais:'Chile'
                    }
                }
            }
        },
        {
        codigo:400,
            data:{
                persona:{
                    nombre:'Jose',
                    direccion:{
                        ciudad: 'Bogota',
                        pais:'Colombia'
                    }
                }
            }
        },
    ]
    return respuesta;
}



let{codigo: status,data: {persona:{nombre: name}} }= getPersonaDatos()[0];

for(const{codigo:status,data:{persona:{nombre:name}}}of getPersonaDatos()){
    console.log(name);
}

