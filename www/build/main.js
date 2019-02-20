webpackJsonp([13],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_jugador_edit_jugador__ = __webpack_require__(198);
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
            selector: 'page-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\jugador\jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Perfil del jugador {{jugador.nombre}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    {{jugador.nombre}}\n\n  </ion-item>\n\n  <button ion-button (click)=editarJugador(jugador)>Editar Jugador</button>\n\n  <button ion-button (click)=eliminarJugador(jugador)>Eliminar Jugador</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\jugador\jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], JugadorPage);
    return JugadorPage;
}());

//# sourceMappingURL=jugador.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_jornada_add_jornada__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(24);
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






/**
 * Generated class for the JornadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JornadasPage = /** @class */ (function () {
    function JornadasPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.jornadasList = afdb.list("Jornada");
        this.jornadas = this.jornadasList.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        console.log(this.jornadas);
    }
    JornadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasPage');
    };
    JornadasPage.prototype.addJornada = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__add_jornada_add_jornada__["a" /* AddJornadaPage */]);
    };
    JornadasPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\jornadas\jornadas.html"*/'<!--\n\n  Generated template for the JornadasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Jornadas</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="addJornada()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jornada of jornadas | async">\n\n    {{jornada.nombre}} \n\n    <ion-buttons left>\n\n        <button ion-button small >Agregar jugador</button>\n\n      </ion-buttons>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
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
            nombre: '',
            categoria: ''
        };
    }
    AddEquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEquipoPage');
    };
    AddEquipoPage.prototype.add = function () {
        this.afdb.list("/Equipos/").push(this.equipo);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipos_equipos__["a" /* EquiposPage */]);
    };
    AddEquipoPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipos_equipos__["a" /* EquiposPage */]);
    };
    AddEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-equipo\add-equipo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button\n\n          icon-only (click)="volver()">\n\n            <ion-icon name="md-arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      <ion-title>Añadir Equipo</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input name="nombre" [(ngModel)]="equipo.nombre"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Categoria</ion-label>\n\n      <ion-input name="nombre" [(ngModel)]="equipo.categoria"></ion-input>\n\n    </ion-item>\n\n  \n\n    <button ion-button block clear (click)="add()">Add</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-equipo\add-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddEquipoPage);
    return AddEquipoPage;
}());

//# sourceMappingURL=add-equipo.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__ = __webpack_require__(87);
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
        this.afdb.list("/Equipos/").update(this.equipo.key, this.equipo);
        console.log("Equipo despues de ser actualizado: " + this.equipo.nombre);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__equipos_equipos__["a" /* EquiposPage */]);
    };
    EditEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\edit-equipo\edit-equipo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button\n\n          icon-only (click)="volver()">\n\n            <ion-icon name="md-arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      <ion-title>Editar Equipo</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input name="nombre" [(ngModel)]="equipo.nombre" value="{{equipo.nombre}}"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Categoria</ion-label>\n\n      <ion-input name="nombre" [(ngModel)]="equipo.categoria" value="{{equipo.categoria}}"></ion-input>\n\n    </ion-item>\n\n  \n\n    <button ion-button block clear (click)="update()">Actualizar</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\edit-equipo\edit-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], EditEquipoPage);
    return EditEquipoPage;
}());

//# sourceMappingURL=edit-equipo.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJuegadorEquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(24);
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





var AddJuegadorEquipoPage = /** @class */ (function () {
    function AddJuegadorEquipoPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.equipoJugador = {
            equipo: '',
            jugador: ''
        };
        this.equipo = this.navParams.get("equipo");
        console.log(this.equipo);
        if (this.equipo.categoria == "A") {
            this.jugadoresList = this.afdb.list('/Jugadores/', function (ref) { return ref.orderByChild('elo').startAt('1500'); });
        }
        else if (this.equipo.categoria == "B") {
            this.jugadoresList = this.afdb.list('/Jugadores/', function (ref) { return ref.orderByChild('elo').startAt('1250').endAt('1499'); });
        }
        else if (this.equipo.categoria == "C") {
            this.jugadoresList = this.afdb.list('/Jugadores/', function (ref) { return ref.orderByChild('elo').startAt('1000').endAt('1249'); });
        }
        else if (this.equipo.categoria == "D") {
            this.jugadoresList = this.afdb.list('/Jugadores/', function (ref) { return ref.orderByChild('elo').startAt('0750').endAt('0999'); });
        }
        this.jugadores = this.jugadoresList.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    AddJuegadorEquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddJuegadorEquipoPage');
    };
    AddJuegadorEquipoPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipo_equipo__["a" /* EquipoPage */], { 'equipo': this.equipo });
    };
    AddJuegadorEquipoPage.prototype.add = function (jugador) {
        console.log("entra");
        console.log(this.equipo.key);
        console.log(jugador.key);
        this.equipoJugador.equipo = this.equipo.key;
        this.equipoJugador.jugador = jugador.key;
        console.log(this.equipoJugador);
        this.afdb.list("/EquiposJugadores/").push(this.equipoJugador);
        var equipoJugadores = this.afdb.list("/EquiposJugadores/");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__equipo_equipo__["a" /* EquipoPage */], { 'equipo': this.equipo, 'equipoJugadores': equipoJugadores });
    };
    AddJuegadorEquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-juegador-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-juegador-equipo\add-juegador-equipo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n      <button ion-button\n\n        icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n        {{equipo.nombre}}\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let jugador of jugadores | async">\n\n        {{jugador.nombre}}, {{jugador.elo}}\n\n        <button ion-button (click)="add(jugador)">Añadir al equipo</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-juegador-equipo\add-juegador-equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddJuegadorEquipoPage);
    return AddJuegadorEquipoPage;
}());

//# sourceMappingURL=add-juegador-equipo.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugador_jugador__ = __webpack_require__(113);
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
        console.log("Jugador antes de ser actualizado: " + this.jugador.elo);
        this.jugador.nombre = this.nombre;
        this.jugador.j = Number(this.j);
        this.jugador.g = Number(this.g);
        this.jugador.e = Number(this.e);
        this.jugador.p = Number(this.p);
        this.jugador.c = Number(this.c);
        this.jugador.f = Number(this.f);
        this.jugador.elo = Number(this.elo);
        this.afdb.list("/Jugadores/").update(this.jugador.key, this.jugador);
        console.log("Jugador despues de ser actualizado: " + this.jugador.elo);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    EditJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\edit-jugador\edit-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-title>Editar Jugador</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input type="text" [(ngModel)]="nombre" name="nombre" value="{{ jugador.nombre }}"></ion-input>\n\n  </ion-item>\n\n    \n\n  <ion-item>\n\n    <ion-label floating>Partidos jugados:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="j" name="equipo" value="{{ jugador.j }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos ganados:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="g" name="equipo" value="{{ jugador.g }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos empatados:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="e" name="equipo" value="{{ jugador.e }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos perdidos:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="p" name="equipo" value="{{ jugador.p }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos en casa:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="c" name="equipo" value="{{ jugador.c }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Partidos fuera de casa:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="f" name="equipo" value="{{ jugador.f }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Elo:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="elo" name="equipo" value="{{ jugador.elo }}"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block clear (click)="update()">Actualizar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\edit-jugador\edit-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], EditJugadorPage);
    return EditJugadorPage;
}());

//# sourceMappingURL=edit-jugador.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJugadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugadores_jugadores__ = __webpack_require__(52);
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





var AddJugadorPage = /** @class */ (function () {
    function AddJugadorPage(navCtrl, afdb) {
        this.navCtrl = navCtrl;
        this.afdb = afdb;
        this.jugador = {
            nombre: '',
            j: 0,
            g: 0,
            e: 0,
            p: 0,
            c: 0,
            f: 0,
            elo: 0,
            rol: '',
        };
    }
    AddJugadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddJugadorPage');
        this.equiposList = this.afdb.list("/Equipos/");
        this.equipos = this.equiposList.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        console.log(this.equipos);
    };
    AddJugadorPage.prototype.add = function () {
        this.jugador.nombre = this.nombre;
        this.jugador.j = 0;
        this.jugador.g = 0;
        this.jugador.e = 0;
        this.jugador.p = 0;
        this.jugador.c = 0;
        this.jugador.f = 0;
        this.jugador.elo = 0;
        this.jugador.rol = "user";
        console.log(this.jugador);
        this.afdb.list("/Jugadores/").push(this.jugador);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    AddJugadorPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    AddJugadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-jugador',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-jugador\add-jugador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-title>Añadir Jugador</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input name="nombre" [(ngModel)]="nombre"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block clear (click)="add()">Add</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-jugador\add-jugador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddJugadorPage);
    return AddJugadorPage;
}());

//# sourceMappingURL=add-jugador.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(88);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, afdb, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.alert = alert;
        this.usuario = {
            nombre: '',
            email: "",
            password: "",
        };
        this.jugador = {
            nombre: '',
            j: 0,
            g: 0,
            e: 0,
            p: 0,
            c: 0,
            f: 0,
            elo: 0,
            rol: '',
            email: '',
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (usuario) {
        var _this = this;
        if (this.usuario.nombre === null || this.usuario.email === null || this.usuario.password === null) {
            var alert_1 = this.alert.create({
                title: 'Error!',
                subTitle: 'Rellena todos los campos',
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(usuario.email, usuario.password).then(function (data) {
                _this.jugador.nombre = _this.usuario.nombre;
                _this.jugador.j = 0;
                _this.jugador.g = 0;
                _this.jugador.e = 0;
                _this.jugador.p = 0;
                _this.jugador.c = 0;
                _this.jugador.f = 0;
                _this.jugador.elo = 0;
                _this.jugador.rol = "user";
                _this.jugador.email = _this.usuario.email;
                _this.afdb.list("/Jugadores/").push(_this.jugador);
                var alert = _this.alert.create({
                    title: 'Correcto!',
                    subTitle: 'Te has registrado correctamente!',
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }
    };
    RegisterPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\register\register.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-buttons left>\n\n			<button ion-button\n\n					icon-only (click)="volver()">\n\n				<ion-icon name="md-arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title>Register</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Nombre:</ion-label>\n\n		<ion-input type="text" [(ngModel)]="usuario.nombre"></ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Email:</ion-label>\n\n		<ion-input type="email" [(ngModel)]="usuario.email"></ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Password:</ion-label>\n\n		<ion-input type="password" [(ngModel)]="usuario.password"></ion-input>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<button ion-button (click)="register(usuario)">Registrarse</button><br>\n\n	</ion-item>'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJornadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jornadas_jornadas__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddJornadaPage = /** @class */ (function () {
    function AddJornadaPage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.jornada = {
            nombre: '',
            partido: [],
            casa: true,
            fecha: '',
        };
    }
    AddJornadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddJornadaPage');
    };
    AddJornadaPage.prototype.addJornada = function () {
        console.log("entra");
        this.jornada.nombre = this.nombre;
        console.log(this.jornada.nombre);
        this.jornada.partido = [];
        console.log(this.jornada.partido);
        this.jornada.casa = this.casa;
        console.log(this.jornada.casa);
        this.jornada.fecha = this.fecha;
        console.log(this.jornada.fecha);
        this.afdb.list("/Jornada/").push(this.jornada);
        console.log(this.jornada);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jornadas_jornadas__["a" /* JornadasPage */]);
    };
    AddJornadaPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__jornadas_jornadas__["a" /* JornadasPage */]);
    };
    AddJornadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-jornada',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-jornada\add-jornada.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-title>Añadir Jornada</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-label>Nombre</ion-label>\n\n    <ion-input name="nombre" [(ngModel)]="nombre"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Fuera o en casa:</ion-label>\n\n      <ion-select [(ngModel)]="casa">\n\n        <ion-option value=True>En casa</ion-option>\n\n        <ion-option value=False>Fuera</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label>Fecha:</ion-label>\n\n    <ion-datetime name="fecha" [(ngModel)]="fecha" display-format="D/MM/YYYY" picker-format="D MMMM YYYY"></ion-datetime>\n\n  </ion-item>\n\n  <button ion-button block clear (click)="addJornada()">Añadir Jornada</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\add-jornada\add-jornada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddJornadaPage);
    return AddJornadaPage;
}());

//# sourceMappingURL=add-jornada.js.map

/***/ }),

/***/ 234:
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
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-equipo/add-equipo.module": [
		576,
		12
	],
	"../pages/add-jornada/add-jornada.module": [
		577,
		11
	],
	"../pages/add-juegador-equipo/add-juegador-equipo.module": [
		578,
		10
	],
	"../pages/add-jugador/add-jugador.module": [
		579,
		9
	],
	"../pages/edit-equipo/edit-equipo.module": [
		580,
		8
	],
	"../pages/edit-jugador/edit-jugador.module": [
		581,
		7
	],
	"../pages/equipo/equipo.module": [
		582,
		6
	],
	"../pages/equipos/equipos.module": [
		583,
		5
	],
	"../pages/jornadas/jornadas.module": [
		584,
		4
	],
	"../pages/jugador/jugador.module": [
		585,
		3
	],
	"../pages/jugadores/jugadores.module": [
		586,
		2
	],
	"../pages/login/login.module": [
		587,
		1
	],
	"../pages/register/register.module": [
		588,
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
webpackAsyncContext.id = 275;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresEquipoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the JugadoresEquipoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JugadoresEquipoProvider = /** @class */ (function () {
    function JugadoresEquipoProvider(afdb) {
        this.afdb = afdb;
        this.jugadores = [];
        this.jugadoresList = [];
        console.log('Hello JugadoresEquipoProvider Provider');
    }
    JugadoresEquipoProvider.prototype.obtenerJugadores = function (clave) {
        var _this = this;
        this.jugadores = [];
        console.log("funcion obtenerJugadores recibe un key de equipo: " + clave);
        return new Promise(function (resolve) {
            _this.afdb.list('/EquiposJugadores/', function (ref) { return ref.orderByChild('equipo').equalTo(clave); }).valueChanges().subscribe(function (data) {
                if (data) {
                    console.log("Variable data en el povider, retorna objetos con el mismo key equipo: " + JSON.stringify(data));
                    var jugador = void 0;
                    data.forEach(function (element) {
                        console.log(element);
                        var clave = element.jugador;
                        _this.afdb.list('/Jugadores/', function (ref) { return ref.orderByChild('key').equalTo(clave); }).valueChanges().subscribe(function (data) {
                            console.log("Key del jugador provider: " + clave);
                            console.log("Variable data jugador en el povider funcion obtenerJugador: " + JSON.stringify(data));
                            var algo = {
                                nombre: data[0].nombre,
                                elo: data[0].elo,
                            };
                            _this.jugadores.push(algo);
                        });
                        // this.obtenerJugador(element.jugador)
                        // .then(exist => {
                        //   if (exist) {
                        //     this.jugadores.unshift(this.jugador)
                        //     console.log("Variable jugadores en provider dentro de foreach: "+this.jugadores);
                        //   } else {
                        //     return null;
                        //   }
                        // })
                    });
                    console.log(_this.jugadores);
                    // this.jugadoresEquipo = jugador;
                    // let jugadores = this.jugadoresEquipo['jugador'];
                    // console.log("Intento de obtener solo jugadores: "+jugadores);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    JugadoresEquipoProvider.prototype.listarJugadores = function () {
        this.jugadoresList = [];
    };
    JugadoresEquipoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], JugadoresEquipoProvider);
    return JugadoresEquipoProvider;
}());

//# sourceMappingURL=jugadores-equipo.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(461);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_jugador_jugador__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_jugador_add_jugador__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_jugador_edit_jugador__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_equipos_equipos__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_equipo_edit_equipo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_equipo_add_equipo__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_juegador_equipo_add_juegador_equipo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_equipo_equipo__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_jugadores_equipo_jugadores_equipo__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_equipos_equipos__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_jornadas_jornadas__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_jornada_add_jornada__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Angular


//Paginas




//Jugadores




//Equipos







//Jornadas


var FirebaseConfig = {
    apiKey: "AIzaSyBOgG67GAPCRSOke2r_24VQ-SPaF6wy6ko",
    authDomain: "ionic-d2a40.firebaseapp.com",
    databaseURL: "https://ionic-d2a40.firebaseio.com",
    projectId: "ionic-d2a40",
    storageBucket: "ionic-d2a40.appspot.com",
    messagingSenderId: "328071149034"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_jugador_jugador__["a" /* JugadorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_equipos_equipos__["a" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_equipo_edit_equipo__["a" /* EditEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_equipo_add_equipo__["a" /* AddEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_juegador_equipo_add_juegador_equipo__["a" /* AddJuegadorEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_jornada_add_jornada__["a" /* AddJornadaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-equipo/add-equipo.module#AddEquipoPageModule', name: 'AddEquipoPage', segment: 'add-equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-jornada/add-jornada.module#AddJornadaPageModule', name: 'AddJornadaPage', segment: 'add-jornada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-juegador-equipo/add-juegador-equipo.module#AddJuegadorEquipoPageModule', name: 'AddJuegadorEquipoPage', segment: 'add-juegador-equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-jugador/add-jugador.module#AddJugadorPageModule', name: 'AddJugadorPage', segment: 'add-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-equipo/edit-equipo.module#EditEquipoPageModule', name: 'EditEquipoPage', segment: 'edit-equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-jugador/edit-jugador.module#EditJugadorPageModule', name: 'EditJugadorPage', segment: 'edit-jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipos/equipos.module#EquiposPageModule', name: 'EquiposPage', segment: 'equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugador/jugador.module#JugadorPageModule', name: 'JugadorPage', segment: 'jugador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(FirebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabaseModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_jugador_jugador__["a" /* JugadorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_jugador_add_jugador__["a" /* AddJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_jugador_edit_jugador__["a" /* EditJugadorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_equipos_equipos__["a" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_equipo_edit_equipo__["a" /* EditEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_equipo_add_equipo__["a" /* AddEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_juegador_equipo_add_juegador_equipo__["a" /* AddJuegadorEquipoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_jornada_add_jornada__["a" /* AddJornadaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_jugadores_equipo_jugadores_equipo__["a" /* JugadoresEquipoProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_equipos_equipos__["a" /* EquiposProvider */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugador_jugador__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_jugador_add_jugador__ = __webpack_require__(199);
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
        this.jugadoresList = afdb.list('/Jugadores/', function (ref) { return ref.orderByChild('elo'); });
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
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\jugadores\jugadores.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n    <button ion-button\n\n      icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <button ion-button\n\n      icon-only (click)="volver()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Jugadores\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="addJugador()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jugador of jugadores | async" (click)="irJugador(jugador)">\n\n      {{jugador.nombre}}, {{jugador.elo}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _b || Object])
    ], JugadoresPage);
    return JugadoresPage;
    var _a, _b;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EquiposProvider = /** @class */ (function () {
    function EquiposProvider(afdb) {
        this.afdb = afdb;
        this.jugadores = [];
        console.log('Hello EquiposProvider Provider');
    }
    EquiposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], EquiposProvider);
    return EquiposProvider;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipo_equipo__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_equipo_add_equipo__ = __webpack_require__(195);
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
        this.equiposList = afdb.list("/Equipos/");
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
            selector: 'page-equipos',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\equipos\equipos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n    <button ion-button\n\n      icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <button ion-button\n\n      icon-only (click)="volver()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons> \n\n    <ion-title>\n\n      Equipos\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="addEquipo()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let equipo of equipos | async" (click)="irEquipo(equipo)">\n\n        {{equipo.nombre}}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\equipos\equipos.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_jugadores_jugadores__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipos_equipos__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jornadas_jornadas__ = __webpack_require__(114);
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
    HomePage.prototype.irPaginaJornadas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__jornadas_jornadas__["a" /* JornadasPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n        <button ion-button\n\n        icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item (click)="irPaginaEquipos()">\n\n      <ion-icon name="people" item-start></ion-icon>\n\n        Equipos\n\n    </ion-item>\n\n    <ion-item (click)="irPaginaJugadores()">\n\n      <ion-icon name="person" item-start></ion-icon>\n\n        Jugadores\n\n    </ion-item>\n\n    <ion-item (click)="irPaginaJornadas()">\n\n      <ion-icon name="clipboard"></ion-icon>\n\n        Jornadas\n\n    </ion-item>\n\n    <br>\n\n    <button ion-button icon-start (click)="logout()" round color="danger">\n\n      <ion-icon name="close"></ion-icon>\n\n      Cerrar Sesión\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_equipo_edit_equipo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipos_equipos__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_juegador_equipo_add_juegador_equipo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_jugadores_equipo_jugadores_equipo__ = __webpack_require__(295);
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
    function EquipoPage(navCtrl, navParams, afdb, alert, jugEquip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.alert = alert;
        this.jugEquip = jugEquip;
        this.equipoJugadores = [];
        this.equipo = this.navParams.get("equipo");
        // this.equiposJugadoresList=this.afdb.list('/EquiposJugadores/', ref => ref.child('equipo').equalTo(this.equipo.key));
        // this.equipoJugadores = this.equiposJugadoresList.snapshotChanges().pipe(
        //     map(changes =>
        //       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        //     )
        //   );
        // console.log(this.equipo);
        // console.log(this.equipoJugadores);
        // let jugadores:Array<any[]>;
        // console.log(33);
        // console.log( this.equipoJugadores);
        //   this.equipoJugadores.forEach(jugador => {
        //     console.log(2);
        //     jugadores.push(jugador);
        //   });
        // console.log(3);
        // jugadores = this.equipoJugadores = this.equiposJugadoresList.snapshotChanges().pipe(
        //               map(changes =>
        //                 changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        //               )
        //             );
        // console.log("jugadores--------------------"+jugadores);
        // jugadores.forEach(jugador => {
        // });
    }
    EquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoPage');
        var clave = this.equipo.key;
        console.log("Clave equipo equipo.ts: " + clave);
        this.jugadores(clave);
    };
    EquipoPage.prototype.editarEquipo = function (equipo) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__edit_equipo_edit_equipo__["a" /* EditEquipoPage */], { 'equipo': equipo });
    };
    EquipoPage.prototype.eliminarEquipo = function (equipo) {
        console.log("Eliminar equipo: ", equipo.nombre);
        var key = equipo.key;
        console.log(equipo);
        this.afdb.database.ref('/Equipos/' + key).remove();
        console.log("Equipo eliminado");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__equipos_equipos__["a" /* EquiposPage */]);
    };
    EquipoPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__equipos_equipos__["a" /* EquiposPage */]);
    };
    EquipoPage.prototype.jugadores = function (clave) {
        var _this = this;
        this.jugEquip.obtenerJugadores(clave)
            .then(function (exist) {
            console.log("Variable jugadoresEquipo desde equipo.ts: " + _this.jugEquip.jugadores);
            if (exist) {
                _this.equipoJugadores = _this.jugEquip.jugadores;
                console.log("Variable equipoJugadores en equipo.ts: ");
                console.log(_this.equipoJugadores);
            }
            else {
                return null;
            }
        });
    };
    EquipoPage.prototype.addJugadores = function (equipo) {
        var _this = this;
        var equiposJugadores = this.afdb.list('/EquiposJugadores/', function (ref) { return ref.orderByChild('equipo').equalTo(_this.equipo.key); });
        this.equipoJugadores = [];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__add_juegador_equipo_add_juegador_equipo__["a" /* AddJuegadorEquipoPage */], { 'equipo': equipo, 'equiposJugadores': equiposJugadores });
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\equipo\equipo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons>\n\n        <button ion-button\n\n          icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>Equipo, {{equipo.nombre}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header> \n\n  \n\n<ion-content padding>\n\n  <ion-item>\n\n    {{equipo.nombre}}\n\n    <p *ngFor="let jugador of equipoJugadores | async">{{jugador.nombre}}, {{jugador.elo}}</p>\n\n  </ion-item>\n\n  <ion-buttons>\n\n    <button ion-button (click)=editarEquipo(equipo)>Editar Equipo</button>\n\n    <button ion-button (click)=eliminarEquipo(equipo)>Eliminar Equipo</button>\n\n    <button ion-button (click)=addJugadores(equipo)>Añadir Jugadores</button>\n\n  </ion-buttons>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_jugadores_equipo_jugadores_equipo__["a" /* JugadoresEquipoProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(200);
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
    function LoginPage(navCtrl, navParams, fb, afdb, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
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
    LoginPage.prototype.goRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Log in</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Email:</ion-label>\n\n		<ion-input type="email" [(ngModel)]="usuario.email"></ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-label color="primary" stacked>Password:</ion-label>\n\n		<ion-input type="password" [(ngModel)]="usuario.password"></ion-input>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<button ion-button (click)="login(usuario)">Iniciar Sesion</button>\n\n		<button ion-button (click)="goRegister()">Registrarse</button><br>\n\n	</ion-item>\n\n'/*ion-inline-end:"C:\Users\Sergio\Desktop\IonicFinal4\IonicAjedrez\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map