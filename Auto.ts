
class Motor {
    protected tipoDeCombustible: string;
    protected temperatura: number;

    constructor(parametroCombustible: string, parametroTemperatura: number) {
        this.tipoDeCombustible = parametroCombustible;
        this.temperatura = parametroTemperatura;
    }

    public setTemperatura(paramTemp: number): void {
        this.temperatura = paramTemp;
    }
    public getTemperatura(): number {
        return this.temperatura;
    }
    public setCombustible(paramCombustible: string): void {
        this.tipoDeCombustible = paramCombustible;
    }
    public getCombustible(): string {
        return this.tipoDeCombustible;
    }
}

class Auto {
    protected motor: Motor;
    protected cantidadPuertas: number;
    protected marca: string;
    protected chasis: number;
    protected rodado: number;
    protected color: string;
    protected aceleracion: number;

    constructor(pMotor: Motor, pCantidadPuertas: number, pMarca: string, pChasis: number, pRodado: number, pColor: string) {
        this.motor = pMotor;
        this.cantidadPuertas = pCantidadPuertas;
        this.marca = pMarca;
        this.chasis = pChasis;
        this.rodado = pRodado;
        this.color = pColor;
        this.aceleracion = 10;
    }


    public setMotor(parametroMotor): void {
        this.motor = parametroMotor;
    }
    public getMotor(): Motor {
        return this.motor;
    }
    public setCantidadPuertas(pCantidadPuertas: number): void {
        this.cantidadPuertas = pCantidadPuertas;
    }
    public getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }
    public setMarca(pMarca: string): void {
        this.marca = pMarca;
    }
    public getMarca(): string {
        return this.marca;
    }
    public setChasis(pChasis: number): void {
        this.chasis = pChasis;
    }
    public getChasis(): number {
        return this.chasis;
    }
    public setRodado(pRodado: number): void {
        this.rodado = pRodado;
    }
    public getRodado(): number {
        return this.rodado;
    }
    public setColor(pColor: string): void {
        this.color = pColor;
    }
    public getColor(): string {
        return this.color;
    }
    public acelerar(): void {
        this.aceleracion = this.aceleracion + 10;
        console.log("El auto PADRE acelera a " + this.aceleracion)
    }
}

class AutoCarreras extends Auto {
    protected cantidadCambios: number;
    protected maxVelocidad: number;

    constructor(pMotor: Motor, pCantidadPuertas: number, pMarca: string,
        pChasis: number, pRodado: number, pColor: string,
        pCantidadCambios: number, pMaxVelocidad: number) {
        super(pMotor, pCantidadPuertas, pMarca, pChasis, pRodado, pColor);
        this.cantidadCambios = pCantidadCambios;
        this.maxVelocidad = pMaxVelocidad;
    }

    public acelerar(): void {
        this.aceleracion = this.aceleracion + 50;
        console.log("Auto de carreras acelera a " + this.aceleracion)
    }
}

let motorAutoGenerico: Motor = new Motor("Nafta", 100);
let motorAutoCarreras: Motor = new Motor("Nafta", 200);
let AutoBase: Auto = new Auto(motorAutoGenerico, 4, "Gol Power", 12233445, 18, "Rojo");
let AutoCarreraBase: AutoCarreras = new AutoCarreras(motorAutoCarreras, 2, "Ferrari", 122344, 20, "Negro", 6, 300);

console.log("La marca del auto de carreras " + AutoCarreraBase.getMarca());
console.log("Cantidad de puertas del auto de carreras " + AutoCarreraBase.getCantidadPuertas());
AutoCarreraBase.acelerar();
console.log("La marca del auto base " + AutoBase.getMarca());
console.log("Cantidad de puertas del auto base " + AutoBase.getCantidadPuertas());
AutoBase.acelerar();