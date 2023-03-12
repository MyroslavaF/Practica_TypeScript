export class Telefono{
    private _tipo: string;
    private _numero: number;


    constructor(tipo: string, numero: number) {
        this._tipo = tipo;
        this._numero = numero;
    }


    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(value: number) {
        this._numero = value;
    }
}