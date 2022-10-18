var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Motor = /** @class */ (function () {
    function Motor(parametroCombustible, parametroTemperatura) {
        this.tipoDeCombustible = parametroCombustible;
        this.temperatura = parametroTemperatura;
    }
    Motor.prototype.setTemperatura = function (paramTemp) {
        this.temperatura = paramTemp;
    };
    Motor.prototype.getTemperatura = function () {
        return this.temperatura;
    };
    Motor.prototype.setCombustible = function (paramCombustible) {
        this.tipoDeCombustible = paramCombustible;
    };
    Motor.prototype.getCombustible = function () {
        return this.tipoDeCombustible;
    };
    return Motor;
}());
var Auto = /** @class */ (function () {
    function Auto(pMotor, pCantidadPuertas, pMarca, pChasis, pRodado, pColor) {
        this.motor = pMotor;
        this.cantidadPuertas = pCantidadPuertas;
        this.marca = pMarca;
        this.chasis = pChasis;
        this.rodado = pRodado;
        this.color = pColor;
        this.aceleracion = 10;
    }
    Auto.prototype.setMotor = function (parametroMotor) {
        this.motor = parametroMotor;
    };
    Auto.prototype.getMotor = function () {
        return this.motor;
    };
    Auto.prototype.setCantidadPuertas = function (pCantidadPuertas) {
        this.cantidadPuertas = pCantidadPuertas;
    };
    Auto.prototype.getCantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    Auto.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setChasis = function (pChasis) {
        this.chasis = pChasis;
    };
    Auto.prototype.getChasis = function () {
        return this.chasis;
    };
    Auto.prototype.setRodado = function (pRodado) {
        this.rodado = pRodado;
    };
    Auto.prototype.getRodado = function () {
        return this.rodado;
    };
    Auto.prototype.setColor = function (pColor) {
        this.color = pColor;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.acelerar = function () {
        this.aceleracion = this.aceleracion + 10;
        console.log("El auto PADRE acelera a " + this.aceleracion);
    };
    return Auto;
}());
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(pMotor, pCantidadPuertas, pMarca, pChasis, pRodado, pColor, pCantidadCambios, pMaxVelocidad) {
        var _this = _super.call(this, pMotor, pCantidadPuertas, pMarca, pChasis, pRodado, pColor) || this;
        _this.cantidadCambios = pCantidadCambios;
        _this.maxVelocidad = pMaxVelocidad;
        return _this;
    }
    AutoCarreras.prototype.acelerar = function () {
        this.aceleracion = this.aceleracion + 50;
        console.log("Auto de carreras acelera a " + this.aceleracion);
    };
    return AutoCarreras;
}(Auto));
var motorAutoGenerico = new Motor("Nafta", 100);
var motorAutoCarreras = new Motor("Nafta", 200);
var AutoBase = new Auto(motorAutoGenerico, 4, "Gol Power", 12233445, 18, "Rojo");
var AutoCarreraBase = new AutoCarreras(motorAutoCarreras, 2, "Ferrari", 122344, 20, "Negro", 6, 300);
console.log("La marca del auto de carreras " + AutoCarreraBase.getMarca());
console.log("Cantidad de puertas del auto de carreras " + AutoCarreraBase.getCantidadPuertas());
AutoCarreraBase.acelerar();
console.log("La marca del auto base " + AutoBase.getMarca());
console.log("Cantidad de puertas del auto base " + AutoBase.getCantidadPuertas());
AutoBase.acelerar();
