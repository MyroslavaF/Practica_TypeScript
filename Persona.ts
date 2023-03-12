import {Direccion} from "./Direccion";
import {Mail} from "./Mail";
import {Telefono} from "./Telefono";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _DNI: string;
    private _cumpleanios: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion;
    private _mails: Mail;
    private _telefonos: Telefono;
    private _notas: string;


    constructor(nombre: string, apellidos: string, edad: number, DNI: string, cumpleanios: Date, colorFavorito: string, sexo: string, direcciones: Direccion, mails: Mail, telefonos: Telefono, notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleanios = cumpleanios;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }


    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    set apellidos(value: string) {
        this._apellidos = value;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get DNI(): string {
        return this._DNI;
    }

    set DNI(value: string) {
        this._DNI = value;
    }

    get cumpleanios(): Date {
        return this._cumpleanios;
    }

    set cumpleanios(value: Date) {
        this._cumpleanios = value;
    }

    get colorFavorito(): string {
        return this._colorFavorito;
    }

    set colorFavorito(value: string) {
        this._colorFavorito = value;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        this._sexo = value;
    }

    get direcciones(): Direccion {
        return this._direcciones;
    }

    set direcciones(value: Direccion) {
        this._direcciones = value;
    }

    get mails(): Mail {
        return this._mails;
    }

    set mails(value: Mail) {
        this._mails = value;
    }

    get telefonos(): Telefono {
        return this._telefonos;
    }

    set telefonos(value: Telefono) {
        this._telefonos = value;
    }

    get notas(): string {
        return this._notas;
    }

    set notas(value: string) {
        this._notas = value;
    }

    toString(): string {
        return  `
                 Nombre: ${this._nombre} 
                 Apellidos: ${this._apellidos} 
                 Edad: ${this._edad} 
                 DNI: ${this._DNI} 
                 Cumleaños: ${this._cumpleanios}
                 Color Favorito: ${this._colorFavorito}
                 Sexo: ${this._sexo}
                 Direcciones:
                 --calle: ${this.direcciones.calle}
                 --numero: ${this.direcciones.numero} 
                 --piso: ${this.direcciones.piso} 
                 --letra: ${this.direcciones.letra}
                 --código postal: ${this.direcciones.codigopostal} 
                 --poblacion: ${this.direcciones.poblacion} 
                 --provincia: ${this.direcciones.provincia} 
                 Telefonos: 
                 --tipo: ${this.telefonos.tipo} 
                 --numero: ${this.telefonos.numero} 
                 Email: 
                 --tipo: ${this.mails.tipo} 
                 --direccion: ${this.mails.direccion} 
                 Notas:  ${this._notas} 

                 `;

    }




}