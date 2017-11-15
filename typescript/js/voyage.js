"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix + "$";
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [new Sejour('nantes', 12), new Sejour('paris', 20), new Sejour('tokyo', 40)];
    }
    SejourService.prototype.recherche = function (nom) {
        return this._sejours.filter(function (s) { return s.getNom() == nom; })[0];
    };
    return SejourService;
}());
var s = new SejourService();
console.log(s.recherche('paris').toString());
