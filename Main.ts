import {Persona} from "./Persona";
import {Telefono} from "./Telefono";
import {Mail} from "./Mail";
import {Direccion} from "./Direccion";

console.log('-------------- Iniciamos ejecucion del programa -------------------');

let direccion1 = new Direccion("Gloria Furetes", 23, 1, "A", 28342, "Valdemoro", "Madrid");
let mail1 = new Mail("trabajo", "vero@mail.com");
let telefono1 = new Telefono("movil", 234545647);

let persona1 = new Persona('Veronika', 'Del Castillo Fernandez', 30,
    '12345678P', new Date('1993, 4, 2'), 'azul', 'M',
    direccion1, mail1, telefono1, 'Cualquier nota');

let direccion2 = new Direccion("Agatha Cristie", 23, 1, "A", 28342, "Valdemoro", "Madrid");
let mail2 = new Mail("trabajo", "ivan@mail.com");
let telefono2 = new Telefono("movil", 6309876543);

let persona2 = new Persona('Ivan', 'Cuesta', 35,
    '2343455W', new Date('1987, 6, 12'), 'rojo', 'H',
    direccion2, mail2, telefono2, 'Otra nota');

let direccion3 = new Direccion("Marie Curie", 2, 1, "C", 28342, "Valdemoro", "Madrid");
let mail3 = new Mail("trabajo", "olga@mail.com");
let telefono3 = new Telefono("movil", 630123333);

let persona3 = new Persona('Olga', 'Fernandez Mercedez', 35,
    '22222222W', new Date('1987, 1, 1'), 'amarillo', 'M',
    direccion3, mail3, telefono3, 'Algo de nota');

console.log('Los datos de Persona 1: ' + persona1.toString());
console.log('Los datos de Persona 2: ' + persona2.toString());
console.log('Los datos de Persona 3: ' + persona3.toString());

console.log('-------------- Cambiar informacion sobre Persona 1 -------------------');

cambiarDireccion("12345678P");
cambiarMail("12345678P");
cambiarTelefono("12345678P");

console.log('Los datos de Persona 1: ' + persona1.toString());

function cambiarDireccion(dni: string) {
    if (dni === persona1.DNI) {
        direccion1.calle = "Calle cambiado";
        direccion1.numero = 22;
        direccion1.piso = 5;
        direccion1.letra = "D";
        direccion1.codigopostal = 230001;
        direccion1.poblacion = "Aranjuez";
        direccion1.provincia = "Madrid";

    } else {
        console.log("El DNI no existe");
    }
}

function cambiarMail(dni: string) {
    if (dni === persona1.DNI) {
        mail1.tipo = "casa";
        mail1.direccion = "nuevoEmail@gmail.com";

    } else {
        console.log("El DNI no existe");
    }
}

function cambiarTelefono(dni: string) {
    if (dni === persona1.DNI) {
        telefono1.tipo = "fijo";
        telefono1.numero = 111111111111;

    } else {
        console.log("El DNI no existe");
    }
}