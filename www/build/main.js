webpackJsonp([9],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_equipo_edit_equipo__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipos_equipos__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EquipoPage = /** @class */ (function () {
    function EquipoPage(navCtrl, navParams, fdb, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.alert = alert;
        this.equipo = this.navParams.get("equipo");
        console.log(this.equipo);
    }
    EquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoPage');
    };
    EquipoPage.prototype.editarEquipo = function (equipo) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__edit_equipo_edit_equipo__["a" /* EditEquipoPage */], { 'equipo': equipo });
    };
    EquipoPage.prototype.eliminarEquipo = function (equipo) {
        console.log("Eliminar equipo: ", equipo.nombre);
        var key = equipo.key;
        console.log(equipo);
        this.fdb.database.ref('/Equipo/' + key).remove();
        console.log("Equipo eliminado");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__equipos_equipos__["a" /* EquiposPage */]);
    };
    EquipoPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__equipos_equipos__["a" /* EquiposPage */]);
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\equipo\equipo.html"*/'<ion-header>\n\n    <ion-buttons>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-navbar>\n\n      <ion-title>Perfil del equipo {{equipo.nombre}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <ion-item>\n\n      {{equipo.nombre}}\n\n    </ion-item>\n\n    <button ion-button (click)=editarEquipo(equipo)>Editar Equipo</button>\n\n    <button ion-button (click)=eliminarEquipo(equipo)>Eliminar Equipo</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], EquipoPage);
    return EquipoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_jugador_edit_jugador__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the JugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JugadorPage = /** @class */ (function () {
    function JugadorPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.jugador = this.navParams.get("jugador");
        console.log(this.jugador);
    }
    JugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadorPage');
    };
    JugadorPage.prototype.editarJugador = function (jugador) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__edit_jugador_edit_jugador__["a" /* EditJugadorPage */], { 'jugador': jugador });
    };
    JugadorPage.prototype.eliminarJugador = function (jugador) {
        console.log("Eliminar jugador: ", jugador.nombre);
        var key = jugador.key;
        console.log(jugador);
        this.afdb.database.ref('/Jugadores/' + key).remove();
        console.log("Jugador eliminado");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    JugadorPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    JugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\jugador\jugador.html"*/'<ion-header>\n\n  <ion-buttons>\n\n    <button ion-button\n\n      icon-only (click)="volver()">\n\n      <ion-icon name="md-arrow-back"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  <ion-navbar>\n\n    <ion-title>Perfil del jugador {{jugador.nombre}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    {{jugador.nombre}}\n\n  </ion-item>\n\n  <button ion-button (click)=editarJugador(jugador)>Editar Jugador</button>\n\n  <button ion-button (click)=eliminarJugador(jugador)>Eliminar Jugador</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\jugador\jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], JugadorPage);
    return JugadorPage;
}());

//# sourceMappingURL=jugador.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipos_equipos__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddEquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEquipoPage = /** @class */ (function () {
    function AddEquipoPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.equipo = {
            nombre: ''
        };
    }
    AddEquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEquipoPage');
    };
    AddEquipoPage.prototype.add = function () {
        this.afdb.list("/Equipo/").push(this.equipo);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipos_equipos__["a" /* EquiposPage */]);
    };
    AddEquipoPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipos_equipos__["a" /* EquiposPage */]);
    };
    AddEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\add-equipo\add-equipo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button\n\n          icon-only (click)="volver()">\n\n            <ion-icon name="md-arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      <ion-title>Añadir Equipo</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input name="nombre" [(ngModel)]="equipo.nombre"></ion-input>\n\n    </ion-item>\n\n  \n\n    <button ion-button block clear (click)="add()">Add</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\add-equipo\add-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddEquipoPage);
    return AddEquipoPage;
}());

//# sourceMappingURL=add-equipo.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipos_equipos__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEquipoPage = /** @class */ (function () {
    function EditEquipoPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.equipo = this.navParams.get("equipo");
        console.log(this.equipo);
    }
    EditEquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEquipoPage');
    };
    EditEquipoPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipo_equipo__["a" /* EquipoPage */], { 'equipo': this.equipo });
    };
    EditEquipoPage.prototype.update = function () {
        console.log("Equipo antes de ser actualizado: " + this.equipo.nombre);
        this.afdb.list("/Equipo/").update(this.equipo.key, this.equipo);
        console.log("Equipo despues de ser actualizado: " + this.equipo.nombre);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__equipos_equipos__["a" /* EquiposPage */]);
    };
    EditEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\edit-equipo\edit-equipo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button\n\n          icon-only (click)="volver()">\n\n            <ion-icon name="md-arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      <ion-title>Editar Equipo</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input name="nombre" [(ngModel)]="equipo.nombre" value="{{equipo.nombre}}"></ion-input>\n\n    </ion-item>\n\n  \n\n    <button ion-button block clear (click)="update()">Actualizar</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\edit-equipo\edit-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], EditEquipoPage);
    return EditEquipoPage;
}());

//# sourceMappingURL=edit-equipo.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugador_jugador__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditJugadorPage = /** @class */ (function () {
    function EditJugadorPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.jugador = this.navParams.get("jugador");
        console.log(this.jugador);
    }
    EditJugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditJugadorPage');
    };
    EditJugadorPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__jugador_jugador__["a" /* JugadorPage */], { 'jugador': this.jugador });
    };
    EditJugadorPage.prototype.update = function () {
        console.log("Jugador antes de ser actualizado: " + this.jugador.nombre);
        this.afdb.list("/Jugadores/").update(this.jugador.key, this.jugador);
        console.log("Jugador despues de ser actualizado: " + this.jugador.nombre);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    EditJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\edit-jugador\edit-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-title>Editar Jugador</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input name="nombre" [(ngModel)]="jugador.nombre" value="{{jugador.nombre}}"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block clear (click)="update()">Actualizar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\edit-jugador\edit-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], EditJugadorPage);
    return EditJugadorPage;
}());

//# sourceMappingURL=edit-jugador.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddJugadorPage = /** @class */ (function () {
    function AddJugadorPage(navCtrl, afdb) {
        this.navCtrl = navCtrl;
        this.afdb = afdb;
        this.jugador = {
            nombre: ''
        };
    }
    AddJugadorPage.prototype.add = function () {
        this.afdb.list("/Jugadores/").push(this.jugador);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    AddJugadorPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    AddJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\add-jugador\add-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-title>Añadir Jugador</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input name="nombre" [(ngModel)]="jugador.nombre"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block clear (click)="add()">Add</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\add-jugador\add-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddJugadorPage);
    return AddJugadorPage;
}());

//# sourceMappingURL=add-jugador.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { AuthService } from '@ionic/cloud-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.usuario = {
            email: "",
            password: "",
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (usuario) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(usuario.email, usuario.password).then(function (data) {
            var alert = _this.alert.create({
                title: 'Correcto!',
                subTitle: 'Has iniciado sesión correctamente!',
                buttons: ['Aceptar']
            });
            alert.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }).catch(function (data) {
            var alert = _this.alert.create({
                title: 'Error!',
                subTitle: 'Usuario o contraseña no son válidos.',
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.register = function (usuario) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(usuario.email, usuario.password).then(function (data) {
            var alert = _this.alert.create({
                title: 'Correcto!',
                subTitle: 'Te has registrado correctamente!',
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.forgot = function (email) {
        console.log(email);
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().sendPasswordResetEmail(email.toString()).then(function (data) {
            // Email sent.
            console.log("Correcto.");
        }).catch(function (data) {
            // An error happened.
            console.log("Error.");
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Log in</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Email:</ion-label>\n\n		<ion-input type="email" [(ngModel)]="usuario.email"></ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Password:</ion-label>\n\n		<ion-input type="password" [(ngModel)]="usuario.password"></ion-input>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<button ion-button (click)="login(usuario)">Iniciar Sesion</button>\n\n		<button ion-button (click)="register(usuario)">Registrarse</button><br>\n\n		<button ion-button (click)="forgot(usuario.email)">Olvidaste la contraseña?</button>\n\n	</ion-item>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-equipo/add-equipo.module": [
		570,
		8
	],
	"../pages/add-jugador/add-jugador.module": [
		571,
		7
	],
	"../pages/edit-equipo/edit-equipo.module": [
		572,
		6
	],
	"../pages/edit-jugador/edit-jugador.module": [
		573,
		5
	],
	"../pages/equipo/equipo.module": [
		574,
		4
	],
	"../pages/equipos/equipos.module": [
		575,
		3
	],
	"../pages/jugador/jugador.module": [
		576,
		2
	],
	"../pages/jugadores/jugadores.module": [
		577,
		1
	],
	"../pages/login/login.module": [
		578,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 271;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_jugador_jugador__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_jugador_add_jugador__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_jugador_edit_jugador__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_equipo_equipo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_equipos_equipos__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_equipo_edit_equipo__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_equipo_add_equipo__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var FirebaseConfig = {
    apiKey: "AIzaSyDcjQu8mvn7IglBgFRO_Q8HKxgOm-kGcrE",
    authDomain: "ajedrez-825b6.firebaseapp.com",
    databaseURL: "https://ajedrez-825b6.firebaseio.com",
    projectId: "ajedrez-825b6",
    storageBucket: "ajedrez-825b6.appspot.com",
    messagingSenderId: "132712618727"
};
__WEBPACK_IMPORTED_MODULE_15_firebase__["initializeApp"](FirebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_jugador_jugador__["a" /* JugadorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_equipos_equipos__["a" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_equipo_edit_equipo__["a" /* EditEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_equipo_add_equipo__["a" /* AddEquipoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-equipo/add-equipo.module#AddEquipoPageModule', name: 'AddEquipoPage', segment: 'add-equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-jugador/add-jugador.module#AddJugadorPageModule', name: 'AddJugadorPage', segment: 'add-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-equipo/edit-equipo.module#EditEquipoPageModule', name: 'EditEquipoPage', segment: 'edit-equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-jugador/edit-jugador.module#EditJugadorPageModule', name: 'EditJugadorPage', segment: 'edit-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipos/equipos.module#EquiposPageModule', name: 'EquiposPage', segment: 'equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugador/jugador.module#JugadorPageModule', name: 'JugadorPage', segment: 'jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(FirebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabaseModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_jugador_jugador__["a" /* JugadorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_equipos_equipos__["a" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_equipo_edit_equipo__["a" /* EditEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_equipo_add_equipo__["a" /* AddEquipoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugador_jugador__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_jugador_add_jugador__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(86);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JugadoresPage = /** @class */ (function () {
    function JugadoresPage(navCtrl, afdb) {
        this.navCtrl = navCtrl;
        this.afdb = afdb;
        this.jugadoresList = afdb.list("/Jugadores/");
        this.jugadores = this.jugadoresList.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        console.log(this.jugadores);
    }
    JugadoresPage.prototype.addJugador = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__add_jugador_add_jugador__["a" /* AddJugadorPage */]);
    };
    JugadoresPage.prototype.irJugador = function (jugador) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__jugador_jugador__["a" /* JugadorPage */], { 'jugador': jugador });
    };
    JugadoresPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\jugadores\jugadores.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n    <button ion-button\n\n      icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <button ion-button\n\n      icon-only (click)="volver()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Jugadores\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="addJugador()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jugador of jugadores | async" (click)="irJugador(jugador)">\n\n      {{jugador.nombre}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.jugadores = __WEBPACK_IMPORTED_MODULE_4__pages_jugadores_jugadores__["a" /* JugadoresPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.abrirPagina = function (pagina) {
        this.rootPage = pagina;
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipo_equipo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_equipo_add_equipo__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(86);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EquiposPage = /** @class */ (function () {
    function EquiposPage(navCtrl, afdb) {
        this.navCtrl = navCtrl;
        this.afdb = afdb;
        this.equiposList = afdb.list("/Equipo/");
        this.equipos = this.equiposList.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        console.log(this.equipos);
    }
    EquiposPage.prototype.addEquipo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__add_equipo_add_equipo__["a" /* AddEquipoPage */]);
    };
    EquiposPage.prototype.irEquipo = function (equipo) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__equipo_equipo__["a" /* EquipoPage */], { 'equipo': equipo });
    };
    EquiposPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    EquiposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipos',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\equipos\equipos.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n      <button ion-button\n\n        icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n        Equipos\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="addEquipo()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let equipo of equipos | async" (click)="irEquipo(equipo)">\n\n        {{equipo.nombre}}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\equipos\equipos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], EquiposPage);
    return EquiposPage;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipos_equipos__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, alert) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.alert = alert;
    }
    HomePage.prototype.irPaginaJugadores = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    HomePage.prototype.mostrarMenu = function () {
        this.menuCtrl.toggle();
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut().then(function (data) {
            console.log("Deslogueado.");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            var alert = _this.alert.create({
                title: 'Deslogueado!',
                subTitle: 'Has cerrado sesión perfectamente!',
                buttons: ['Aceptar']
            });
            alert.present();
        }).catch(function (data) {
            console.log("Error.");
        });
    };
    HomePage.prototype.irPaginaEquipos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__equipos_equipos__["a" /* EquiposPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n        <button ion-button\n\n        icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item (click)="irPaginaEquipos()">\n\n      <ion-icon name="people" item-start></ion-icon>\n\n        Equipos\n\n    </ion-item>\n\n    <ion-item (click)="irPaginaJugadores()">\n\n      <ion-icon name="person" item-start></ion-icon>\n\n        Jugadores\n\n    </ion-item>\n\n    <br>\n\n    <button ion-button icon-start (click)="logout()" round color="danger">\n\n      <ion-icon name="close"></ion-icon>\n\n      Cerrar Sesión\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal2\IonicAjedrez\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map