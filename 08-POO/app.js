//Manejo de Clases en JavaScript

class Persona{
    constructor(nombre,edad, profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones=profesiones;

    }

    getBiografia(){
        let biografia =`${this.nombre}, tiene ${this.edad}. Profesiones: `;

        this.profesiones.forEach((profesion) =>{
            biografia += `${profesion},`;
        })
        return biografia;
    }
}

class Empleado extends Persona{
    constructor(nombre,edad,profesiones = [],sueldo,puesto){
        super(nombre,edad,profesiones);
        this.sueldo=sueldo;
        this.puesto=puesto;
    }

    getBiografia(){
        return super.getBiografia()+ `Puesto: ${this.puesto}, Salario: ${this.sueldo}`;
    }
    
    set sueldo(monto){
        this._sueldo = monto;
    }
    get sueldo(){
        return this._sueldo;
    }
}

const persona1= new Empleado('Judith', 21,['arquitecta','doctora'],1500, 'Gerente');
const persona2= new Empleado('Hector', 23,['programador','secretario'], 1000, 'RRHH');
const persona3=new Persona('Blanca', 33,['Administradora'],1000,'Administracion');

persona1.sueldo =2000;

console.log(persona1.getBiografia());
console.log(persona1.sueldo);
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());

/*const datos ={
    get ubicacion(){
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor;
    }
}

datos.ubicacion='Buenos Aires';
console.log(datos.ubicacion);
console.log(datos);*/