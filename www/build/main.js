webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, alert, Token, Jarwis, network, navigationBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.Token = Token;
        this.Jarwis = Jarwis;
        this.network = network;
        this.navigationBar = navigationBar;
        this.form = {
            name: null,
            email: null,
            telefono: null,
            direccion: null,
            placa: null,
            password: null,
            password_confirmation: null,
        };
        this.error = null;
        this.success = null;
        this.network.isOnline();
        //this.navigationBar.hideNavigationBar();
    }
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.signup(this.form).subscribe(function (data) {
            _this.handleResponse(data);
        }, function (error) { return _this.handleError(error); });
    };
    SignupPage.prototype.handleResponse = function ($data) {
        var bool = this.Token.handle($data.access_token, $data);
        if (bool) {
            this.alert.showMsg('Registrado Correctamente', 'Gracias Por Registrarse Señor(a) ' + $data.user);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__index__["a" /* IndexPage */]);
            location.reload();
        }
    };
    SignupPage.prototype.handleError = function (error) {
        if (!this.network.isOnlineBool()) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al regitrar usuario", "Hubo un Error en el servidor.", "error");
        }
        else {
            if (error.error.errors.email) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al regitrar usuario", "El Email No es valido, No puede contener caracteres especiales.", "error");
            }
            else {
                if (error.error.error) {
                    this.error = error.error.error;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al regitrar usuario", this.error, "error");
                }
                else if (error.message.message) {
                    this.error = error.message.message;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al regitrar usuario", this.error, "error");
                }
                else if (error.error.message) {
                    this.error = error.error.message;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al regitrar usuario", this.error, "error");
                }
                else if (error.error.errors.password) {
                    this.error = error.error.errors.password;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al regitrar usuario", this.error, "error");
                }
            }
        }
    };
    SignupPage.prototype.onValidatePass = function () {
        var $pass = this.form.password;
        var $pass2 = this.form.password_confirmation;
        if ($pass != null && $pass2 != null) {
            if (!$pass.isEmpty && !$pass2.isEmpty) {
                if ($pass != $pass2 || $pass2 != $pass) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Contraseña Incorrecta", "Las contraseñas no coinciden", "warning");
                    this.form.password = null;
                    this.form.password_confirmation = null;
                }
            }
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/signup/signup.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/signup.png" width="220px;"/>\n        <br>\n        <label><b>Crea tu cuenta y empieza a disfrutar de todos nuestros servicios en línea.</b></label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form #signupForm=ngForm (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-input type="text" name="nombres" required [(ngModel)]="form.name" placeholder="Nombre Completo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="email" name="email" required [(ngModel)]="form.email" placeholder="Email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" name="telefono" required [(ngModel)]="form.telefono" placeholder="Telefono"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" name="direccion" required [(ngModel)]="form.direccion" placeholder="Dirección"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" name="placa" [(ngModel)]="form.placa" placeholder="Placa"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" (ionBlur)="onValidatePass()" name="password" required [(ngModel)]="form.password" placeholder="Contraseña"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" (ionBlur)="onValidatePass()" name="password_confirmation" required [(ngModel)]="form.password_confirmation" placeholder="Confirmar Contraseña"></ion-input>\n    </ion-item>\n    <ion-grid center text-center>\n      <ion-row center>\n        <ion-col>\n          <button style="height: 40px; width: 110px;" ion-button color="dark"\n                  [disabled]="!signupForm.valid">Registrarme\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SimitPage = /** @class */ (function () {
    function SimitPage(navCtrl, navParams, network, Token, navigationBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.network = network;
        this.Token = Token;
        this.navigationBar = navigationBar;
        this.network.isOnline();
        this.Token.backToLogin();
        this.navigationBar.hideNavigationBar();
    }
    SimitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simit',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/simit/simit.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Consultar Multas</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content has-header="true">\n  <iframe style="border: 0" width="100%" height="100%"\n          src="https://consulta.simit.org.co/Simit/verificar/contenido_verificar_pago_linea.jsp">\n  </iframe>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/simit/simit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], SimitPage);
    return SimitPage;
}());

//# sourceMappingURL=simit.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NovedadPage = /** @class */ (function () {
    function NovedadPage(navCtrl, navParams, Jarwis, network, alert, Token, navigationBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Jarwis = Jarwis;
        this.network = network;
        this.alert = alert;
        this.Token = Token;
        this.navigationBar = navigationBar;
        this.form = {
            asunto: null,
            contenido: null,
            nombre: localStorage.getItem('name'),
            remitente: localStorage.getItem('email')
        };
        this.network.isOnline();
        this.Token.backToLogin();
        this.navigationBar.hideNavigationBar();
    }
    NovedadPage.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.novedad(this.form).subscribe(function (data) { return _this.alert.showMsg('Novedad Enviada', 'Su Novedad ha sido enviada con exito!'); }, function (error) { return _this.alert.showMsg('Error', 'No se pudo enviar su novedad, revise su conexion.'); });
        this.form.asunto = null;
        this.form.contenido = null;
    };
    NovedadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novedad',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/novedad/novedad.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reportar Novedad</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/novedad-body.png" width="130px;"/>\n        <br>\n        <label><b>Reporte su novedad.</b></label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form #novedadForm=ngForm (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-textarea type="text" name="asunto" required [(ngModel)]="form.asunto" placeholder="Asunto"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-textarea type="text" name="contenido" required [(ngModel)]="form.contenido" placeholder="Novedad.."></ion-textarea>\n    </ion-item>\n    <ion-grid center text-center>\n      <ion-row center>\n        <ion-col>\n          <button style="height: 40px; width: 110px;" ion-button color="dark"\n                  [disabled]="!novedadForm.valid">Reportar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/novedad/novedad.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], NovedadPage);
    return NovedadPage;
}());

//# sourceMappingURL=novedad.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraficoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TraficoPage = /** @class */ (function () {
    function TraficoPage(navCtrl, navParams, network, Token, navigationBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.network = network;
        this.Token = Token;
        this.navigationBar = navigationBar;
        this.network.isOnline();
        this.Token.backToLogin();
        this.navigationBar.hideNavigationBar();
    }
    TraficoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trafico',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/trafico/trafico.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Trafico Curumaní</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content has-header="true">\n  <iframe src="https://embed.waze.com/es/iframe?zoom=14&lat=9.2010613&lon=-73.5447548,17"\n          width="100%" height="95%" frameborder="0" style="border:0" allowfullscreen>\n  </iframe>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/trafico/trafico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], TraficoPage);
    return TraficoPage;
}());

//# sourceMappingURL=trafico.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DerechosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DerechosPage = /** @class */ (function () {
    function DerechosPage(navCtrl, navParams, Jarwis, network, alert, Token, navigationBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Jarwis = Jarwis;
        this.network = network;
        this.alert = alert;
        this.Token = Token;
        this.navigationBar = navigationBar;
        this.query = true;
        this.placa_cedula = null;
        this.items = null;
        this.totalFINAL = null;
        this.network.isOnline();
        this.Token.backToLogin();
        this.navigationBar.hideNavigationBar();
    }
    DerechosPage.prototype.getDerechos = function () {
        var _this = this;
        var $form = {
            placa_cedula: this.placa_cedula
        };
        this.Jarwis.getDerechos($form).subscribe(function (data) {
            _this.items = data['0']['data'];
            _this.totalFINAL = data['0']['totalFINAL'];
            _this.query = false;
        }, function (error) {
            _this.alert.showMsg('Error', 'No se pudo obtener los derechos de transito.');
        });
    };
    DerechosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-derechos',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/derechos/derechos.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Derechos de Transito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid center text-center *ngIf="query">\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/search.png" width="130px;"/>\n        <br>\n        <br>\n        <label><b>Consulte Sus Derechos de transito</b></label>\n        <br><br>\n        <label><b>Digite Placa O Cedula</b></label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>\n      <ion-col>\n        <form #derechosForm=ngForm (ngSubmit)="getDerechos()">\n          <ion-item>\n            <ion-input type="text" name="placa_cedula" required [(ngModel)]="placa_cedula"></ion-input>\n          </ion-item>\n          <br>\n          <button style="height: 40px; width: 110px;" ion-button color="dark"\n                  [disabled]="!derechosForm.valid">Consultar\n          </button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf="!query">\n    <ion-grid center text-center>\n\n      <h5><b>Placa/Cedula:</b> {{placa_cedula.toUpperCase()}} </h5>\n\n    </ion-grid>\n    <table style="width:100%">\n      <thead>\n      <tr>\n        <th>Año</th>\n        <th>Vlr DT</th>\n        <th>Intereses</th>\n        <th>Sistematización</th>\n        <th>Honorarios</th>\n        <th>Total</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor="let item of items">\n        <td>{{item.ano}}</td>\n        <td>{{item.valor_dt}}</td>\n        <td>{{item.intereses}}</td>\n        <td>{{item.sistematizacion}}</td>\n        <td>{{item.honorarios}}</td>\n        <td>{{item.total}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <br>\n    <ion-grid center text-center>\n      Total A Pagar: <b>{{totalFINAL}}</b>\n    </ion-grid>\n  </div>\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/derechos/derechos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], DerechosPage);
    return DerechosPage;
}());

//# sourceMappingURL=derechos.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenProvider = /** @class */ (function () {
    function TokenProvider(http, app) {
        this.http = http;
        this.app = app;
        this.iss = {
            login: 'http://172.104.211.233/ettcurumaniServe/public/api/login',
            signup: 'http://172.104.211.233/ettcurumaniServe/public/api/signup'
        };
    }
    TokenProvider.prototype.handle = function ($token, $data) {
        this.set($token, $data);
        console.log(this.isValid());
        return this.isValid();
    };
    TokenProvider.prototype.set = function ($token, $data) {
        localStorage.setItem('token', $token);
        localStorage.setItem('idUser', $data.userData.id);
        localStorage.setItem('name', $data.userData.name);
        localStorage.setItem('email', $data.userData.email);
        localStorage.setItem('password', $data.userData.password);
        localStorage.setItem('telefono', $data.userData.telefono);
        localStorage.setItem('direccion', $data.userData.direccion);
        localStorage.setItem('placa', $data.userData.placa);
    };
    TokenProvider.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenProvider.prototype.getDataUser = function () {
        var $array = {
            id: localStorage.getItem('idUser'),
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
            telefono: localStorage.getItem('telefono'),
            direccion: localStorage.getItem('direccion'),
            placa: localStorage.getItem('placa')
        };
        return $array;
    };
    TokenProvider.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenProvider.prototype.removeAll = function () {
        localStorage.clear();
    };
    TokenProvider.prototype.locationTo = function ($page) {
        var nav = this.app.getActiveNav();
        nav.push($page);
    };
    TokenProvider.prototype.isValid = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return this.objectKeys(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    };
    TokenProvider.prototype.payload = function ($token) {
        var payload = $token.split('.')[1];
        return this.decode(payload);
    };
    TokenProvider.prototype.decode = function ($payload) {
        return JSON.parse(atob($payload));
    };
    TokenProvider.prototype.objectKeys = function ($keys) {
        var values = Object.keys($keys).map(function (key) { return $keys[key]; });
        var union = values.join(",");
        return union;
    };
    TokenProvider.prototype.isLogged = function () {
        return this.isValid();
    };
    TokenProvider.prototype.backToLogin = function () {
        if (this.cont == 2) {
            var $token = this.get();
            if ($token === null) {
                this.locationTo(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            }
        }
        this.cont = 2;
    };
    TokenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], TokenProvider);
    return TokenProvider;
}());

//# sourceMappingURL=Token.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AlertProvider__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(network, httpClient, alert) {
        this.network = network;
        this.httpClient = httpClient;
        this.alert = alert;
    }
    NetworkProvider.prototype.isOnline = function () {
        var _this = this;
        this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
            .subscribe(function (data) {
            // return this.alert.showAlert('Online');
        }, function (error) {
            return _this.alert.showMsg('Sin Conexion', 'Verifique su conexion Wifi/Movil');
        });
    };
    NetworkProvider.prototype.isOnlineBool = function () {
        this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
            .subscribe(function (data) {
            return true;
        }, function (error) {
            return false;
        });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__AlertProvider__["a" /* AlertProvider */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=NetworkProvider.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertProvider = /** @class */ (function () {
    function AlertProvider(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.error = null;
    }
    AlertProvider.prototype.handleResponse = function ($title, $content) {
        return this.showMsg($title, $content);
    };
    AlertProvider.prototype.handleError = function (error) {
        this.error = error.error.error ? error.error.error : error.message.message;
        this.showMsg('Error al salir', 'Verifique su conexion a internet.');
    };
    AlertProvider.prototype.showAlert = function ($msg) {
        this.toastinstance = this.toastCtrl.create({
            message: $msg,
            position: 'buttom',
            duration: 3000
        });
        this.toastinstance.present();
    };
    AlertProvider.prototype.showMsg = function ($title, $content) {
        var alert = this.alertCtrl.create({
            title: $title,
            subTitle: $content,
            buttons: ['OK']
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=AlertProvider.js.map

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JarwisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JarwisProvider = /** @class */ (function () {
    function JarwisProvider(http) {
        this.http = http;
        //private baseUrl = 'http://localhost:8888/ettcurumaniServe/public/api';
        this.baseUrlServer = 'http://172.104.211.233/ettcurumaniServe/public/api';
    }
    JarwisProvider.prototype.signup = function ($data) {
        return this.http.post(this.baseUrlServer + "/signup", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.login = function ($data) {
        return this.http.post(this.baseUrlServer + "/login", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.novedad = function ($data) {
        return this.http.post(this.baseUrlServer + "/novedad", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.mensaje = function ($data) {
        return this.http.post(this.baseUrlServer + "/mensaje", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.getMensajes = function ($data) {
        return this.http.post(this.baseUrlServer + "/getMensajes", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.getRequisitos = function ($data) {
        return this.http.post(this.baseUrlServer + "/getRequisitos", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.validateResetPass = function ($data) {
        return this.http.post(this.baseUrlServer + "/validateResetPass", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.resetPass = function ($data) {
        return this.http.post(this.baseUrlServer + "/resetPassword", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.setViewItem = function ($data) {
        return this.http.post(this.baseUrlServer + "/setViewItem", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.getBanners = function () {
        return this.http.get(this.baseUrlServer + "/getBanners", { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider.prototype.getDerechos = function ($data) {
        return this.http.post(this.baseUrlServer + "/getDerechos", $data, { headers: { 'Content-Type': 'application/json' } });
    };
    JarwisProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], JarwisProvider);
    return JarwisProvider;
}());

//# sourceMappingURL=JarwisProvider.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeoProvider = /** @class */ (function () {
    function GeoProvider(geolocation, alert, nativeGeocoder) {
        this.geolocation = geolocation;
        this.alert = alert;
        this.nativeGeocoder = nativeGeocoder;
        this.options = {
            useLocale: true,
            maxResults: 5
        };
    }
    GeoProvider.prototype.Getgeolocation = function () {
        var _this = this;
        localStorage.removeItem('location');
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, _this.options)
                .then(function (result) {
                var $data = result[0];
                var $location = $data['countryName'] + ", " + $data['administrativeArea'] + ", " + $data['locality'] + ", " + $data['thoroughfare'] + " " + $data['subThoroughfare'];
                //this.alert.showMsg("Ciudad", $location)
                localStorage.setItem("location", $location);
            })
                .catch(function (error) { return console.log(error); });
        }).catch(function (error) {
            _this.alert.showMsg('Error', 'No se pudo obtener la ubicacion del usuario');
        });
    };
    GeoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1__AlertProvider__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], GeoProvider);
    return GeoProvider;
}());

//# sourceMappingURL=GeoProvider.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, Jarwis, network, alert, Token, navigationBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Jarwis = Jarwis;
        this.network = network;
        this.alert = alert;
        this.Token = Token;
        this.navigationBar = navigationBar;
        this.requisitos = null;
        this.network.isOnline();
        this.Token.backToLogin();
        this.navigationBar.hideNavigationBar();
        this.getRequisitos();
    }
    InfoPage.prototype.getRequisitos = function () {
        var _this = this;
        var data = {
            id: '14'
        };
        this.Jarwis.getRequisitos(data).subscribe(function (data) {
            _this.requisitos = data;
            //this.alert.showMsg('Novedad Enviada', 'Su Novedad ha sido enviada con exito!')
        }, function (error) {
            //this.alert.showMsg('Error', 'No se pudo enviar su novedad, revise su conexion.')
        });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/info/info.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Informacion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/tramite.png" width="110px;"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid center text-center>\n    <ion-row center>\n      <h4><b>Tramite: </b> Radicacion Matricula Moto</h4>\n    </ion-row>\n  </ion-grid>\n  <h5>Requisitos:</h5>\n  <ul *ngFor="let item of requisitos">\n    <li>\n      <p>\n        {{ item.nombre }}\n      </p>\n    </li>\n  </ul>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/info/info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conf_conf__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_navigation_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_AlertProvider__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, Jarwis, plataform, alert, token, navigationBar) {
        this.navCtrl = navCtrl;
        this.Jarwis = Jarwis;
        this.plataform = plataform;
        this.alert = alert;
        this.token = token;
        this.navigationBar = navigationBar;
        this.isIos = false;
        this.labelCount = localStorage.getItem('totalMsg');
        this.TabHome = this.isLogged() ? __WEBPACK_IMPORTED_MODULE_4__index__["a" /* IndexPage */] : __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.TabChat = this.isLogged() ? __WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */] : __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.TabHelp = this.isLogged() ? __WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */] : __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.TabConf = this.isLogged() ? __WEBPACK_IMPORTED_MODULE_6__conf_conf__["a" /* ConfPage */] : __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.navigationBar.hideNavigationBar();
        this.timeout();
        if (this.plataform.is('ios')) {
            this.isIos = true;
        }
    }
    TabsPage.prototype.timeout = function () {
        var _this = this;
        setTimeout(function () {
            _this.getMensajes();
        }, 30000);
    };
    TabsPage.prototype.getMensajes = function () {
        var _this = this;
        var $array = {
            idUser: localStorage.getItem('idUser')
        };
        this.Jarwis.getMensajes($array).subscribe(function (data) {
            _this.labelCount = data['totalMsg'];
        }, function (error) {
            _this.alert.showMsg('Error', 'No se pudo obtener los mensajes');
        });
    };
    TabsPage.prototype.isLogged = function () {
        return this.token.isLogged();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0" tabsPlacement="top" primary>\n  <ion-tab [root]="TabHome" tabIcon="home"></ion-tab>\n  <ion-tab [root]="TabChat" tabIcon="chatboxes" tabBadge="{{labelCount}}"></ion-tab>\n  <ion-tab [root]="TabHelp" tabIcon="help"></ion-tab>\n  <ion-tab [root]="TabConf" tabIcon="contact"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetPass_reset__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfPage = /** @class */ (function () {
    function ConfPage(navCtrl, network, alert, Token, inAppBrowser, navigationBar) {
        this.navCtrl = navCtrl;
        this.network = network;
        this.alert = alert;
        this.Token = Token;
        this.inAppBrowser = inAppBrowser;
        this.navigationBar = navigationBar;
        this.network.isOnline();
        this.Token.backToLogin();
        this.getDataUser();
        this.navigationBar.hideNavigationBar();
    }
    ConfPage.prototype.getDataUser = function () {
        var $data = this.Token.getDataUser();
        this.nombre = $data.name;
        this.email = $data.email;
    };
    ConfPage.prototype.isLogged = function () {
        return this.Token.isLogged();
    };
    ConfPage.prototype.toResetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resetPass_reset__["a" /* ResetPage */]);
    };
    ConfPage.prototype.toFB = function () {
        var $url = 'www.facebook.com/transitocuruman/';
        var win = location.href;
        var url2 = win.replace('http://localhost:8080/', '');
        var urlfinal = url2 + 'https://' + $url;
        this.inAppBrowser.create(urlfinal, '_system');
    };
    ConfPage.prototype.toInsta = function () {
        var $url = 'www.instagram.com/transitocurumani/';
        var win = location.href;
        var url2 = win.replace('http://localhost:8080/', '');
        var urlfinal = url2 + 'https://' + $url;
        this.inAppBrowser.create(urlfinal, '_system');
    };
    ConfPage.prototype.logout = function () {
        var $name = localStorage.getItem('name');
        this.alert.handleResponse('Sesion Cerrada', 'Vuelva Pronto Señor(a) ' + $name);
        this.Token.removeAll();
        this.Token.locationTo(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        location.reload();
    };
    ConfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conf',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/conf/conf.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ajuste de la Cuenta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/man.png" width="130px;"/>\n        <br>\n        <label><b>{{nombre}}</b></label>\n        <br>\n        <label>{{email}}</label>\n      </ion-col>\n    </ion-row>\n    <ion-col>\n      <button style="height: 33px; width: 165px; background-color: #FAC800;color: black;"\n              ion-button (click)="toResetPass()">\n        Cambiar Contraseña\n      </button>\n    </ion-col>\n    <br><br>\n    <ion-grid center text-center *ngIf="isLogged()">\n      <ion-row center>\n        <ion-col>\n          <button style="height: 33px; width: 115px; background-color: #FAC800;color: black; margin-top: 110px;"\n                  ion-button (click)="logout()">\n            Cerrar Sesion\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-footer>\n      <ion-row center>\n        <ion-col>\n          <img src="../../assets/imgs/fb.svg" height="40px" (click)="toFB()">\n          <img src="../../assets/imgs/insta.png" height="45px" (click)="toInsta()">\n        </ion-col>\n      </ion-row>\n    </ion-footer>\n\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/conf/conf.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], ConfPage);
    return ConfPage;
}());

//# sourceMappingURL=conf.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPage = /** @class */ (function () {
    function ResetPage(navCtrl, alert, Token, Jarwis, network, navigationBar) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.Token = Token;
        this.Jarwis = Jarwis;
        this.network = network;
        this.navigationBar = navigationBar;
        this.form = {
            email: localStorage.getItem('email'),
            password: null,
            password_new: null,
            password_confirmation: null,
        };
        this.error = null;
        this.success = null;
        this.network.isOnline();
        this.navigationBar.hideNavigationBar();
    }
    ResetPage.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.resetPass(this.form).subscribe(function (data) {
            _this.handleResponse();
        }, function (error) { return _this.handleError(error); });
    };
    ResetPage.prototype.onValidateResetPass = function () {
        var _this = this;
        var $pass = this.form.password;
        if ($pass != null) {
            this.Jarwis.validateResetPass(this.form).subscribe(function (data) {
                console.log("Clave Correcta!");
            }, function (error) { return _this.handleError(error); });
        }
    };
    ResetPage.prototype.handleResponse = function () {
        this.alert.showMsg('Proceso Completado', 'Su Clave ha sido Actualizada Correctamente!');
    };
    ResetPage.prototype.handleError = function (error) {
        if (error.error.error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Clave Erronea", error.error.error, "error");
            this.form.password = null;
        }
        else {
            if (error.error.errors.email) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al cambiar clave", "El Email No es valido, No puede contener caracteres especiales.", "error");
            }
            else {
                if (error.error.error) {
                    this.error = error.error.error;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al cambiar clave", this.error, "error");
                }
                else if (error.message.message) {
                    this.error = error.message.message;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al cambiar clave", this.error, "error");
                }
                else if (error.error.message) {
                    this.error = error.error.message;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al cambiar clave", this.error, "error");
                }
                else if (error.error.errors.password) {
                    this.error = error.error.errors.password;
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Error al cambiar clave", this.error, "error");
                }
            }
        }
    };
    ResetPage.prototype.onValidatePass = function () {
        var $pass = this.form.password_new;
        var $pass2 = this.form.password_confirmation;
        if ($pass != null && $pass2 != null) {
            if (!$pass.isEmpty && !$pass2.isEmpty) {
                if ($pass != $pass2 || $pass2 != $pass) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()("Contraseña Incorrecta", "Las contraseñas no coinciden", "warning");
                    this.form.password_new = null;
                    this.form.password_confirmation = null;
                }
            }
        }
    };
    ResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/resetPass/reset.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cambiar Contraseña</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/reset.png" width="146px;"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form #ResetForm=ngForm (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-input type="password" name="password" (ionBlur)="onValidateResetPass()" required [(ngModel)]="form.password" placeholder="Contraseña Actual"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" (ionBlur)="onValidatePass()" name="password" required [(ngModel)]="form.password_new" placeholder="Nueva Contraseña"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" (ionBlur)="onValidatePass()" name="password_confirmation" required [(ngModel)]="form.password_confirmation" placeholder="Confirmar Contraseña"></ion-input>\n    </ion-item>\n    <ion-grid center text-center>\n      <ion-row center>\n        <ion-col>\n          <button style="height: 40px; width: 110px;" ion-button color="dark"\n                  [disabled]="!ResetForm.valid">Enviar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/resetPass/reset.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], ResetPage);
    return ResetPage;
}());

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__showItem_show__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, Jarwis, network, alert, Token, navigationBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Jarwis = Jarwis;
        this.network = network;
        this.alert = alert;
        this.Token = Token;
        this.navigationBar = navigationBar;
        this.network.isOnline();
        this.Token.backToLogin();
        localStorage.removeItem('totalMsg');
        this.getMensajes();
        this.navigationBar.hideNavigationBar();
        this.timeout();
    }
    ChatPage.prototype.timeout = function () {
        var _this = this;
        setInterval(function () {
            console.log('hide');
            _this.getMensajes();
        }, 30000);
    };
    ChatPage.prototype.getMensajes = function () {
        var _this = this;
        var $array = {
            idUser: localStorage.getItem('idUser')
        };
        this.Jarwis.getMensajes($array).subscribe(function (data) {
            localStorage.removeItem('totalMsg');
            localStorage.setItem('totalMsg', data['totalMsg']);
            _this.totalMsg = localStorage.getItem('totalMsg');
            _this.items = data['mensajes'];
        }, function (error) {
            _this.alert.showMsg('Error', 'No se pudo obtener los mensajes');
        });
    };
    ChatPage.prototype.toItem = function ($item) {
        localStorage.removeItem('id_received');
        localStorage.removeItem('asunto');
        localStorage.removeItem('pregunta');
        localStorage.removeItem('contenido');
        localStorage.setItem('id_received', $item.id);
        localStorage.setItem('asunto', $item.asunto);
        localStorage.setItem('pregunta', $item.pregunta);
        localStorage.setItem('contenido', $item.contenido);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__showItem_show__["a" /* ShowPage */]);
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/chat/chat.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mensajes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/chat-icon.svg" width="130px;"/>\n        <br>\n        <label><b>Mensajes Pendientes</b></label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br>\n\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <br>\n        <label><b>Usted Tiene {{totalMsg}} Mensaje(s) Actualmente.</b></label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list ion-item >\n\n  </ion-list>\n\n  <ion-item *ngFor="let item of items">\n    <ion-icon name="chatbubbles" item-start></ion-icon>\n    {{item.asunto}}\n    <button ion-button item-end style="width: 60px; height: 26px;" (click)="toItem(item)">Ver</button>\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowPage = /** @class */ (function () {
    function ShowPage(navCtrl, network, alert, Token, Jarwis, navigationBar) {
        this.navCtrl = navCtrl;
        this.network = network;
        this.alert = alert;
        this.Token = Token;
        this.Jarwis = Jarwis;
        this.navigationBar = navigationBar;
        this.asunto = localStorage.getItem('asunto');
        this.pregunta = localStorage.getItem('pregunta');
        this.contenido = localStorage.getItem('contenido');
        this.network.isOnline();
        this.Token.backToLogin();
        this.navigationBar.hideNavigationBar();
        this.SetViewItem();
    }
    ShowPage.prototype.SetViewItem = function () {
        var _this = this;
        var $id = localStorage.getItem('id_received');
        if ($id != null) {
            var form = {
                id: $id
            };
            this.Jarwis.setViewItem(form).subscribe(function (data) {
                console.log("Item Oculto OKOK!");
            }, function (error) {
                _this.alert.showMsg('Error', 'Ocurrio un error a la hora de cambiar el estado del item.');
            });
        }
    };
    ShowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/showItem/show.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contenido del Mensaje</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <h4><b>Asunto:</b> {{asunto}}</h4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="banner-chat" item-start>\n    <ion-icon name="quote" item-start style="margin-right: -7px;     transform: rotate(180deg);"></ion-icon>\n    <label class="center-font"><b>Usted:</b> {{pregunta}}</label>\n  </div>\n  <br>\n  <div class="banner-chat-black" item-end>\n    <label class="center-font"><b>Nosotros:</b> {{contenido}}</label>\n    <ion-icon name="quote" item-end style="margin-left: -7px;"></ion-icon>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/showItem/show.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], ShowPage);
    return ShowPage;
}());

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_simit_simit__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_novedad_novedad__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_trafico_trafico__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_navigation_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_help_help__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_conf_conf__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_chat_chat__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_showItem_show__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_resetPass_reset__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_info_info__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_derechos_derechos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_GeoProvider__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_geocoder__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_simit_simit__["a" /* SimitPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_novedad_novedad__["a" /* NovedadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_trafico_trafico__["a" /* TraficoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_conf_conf__["a" /* ConfPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_showItem_show__["a" /* ShowPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_resetPass_reset__["a" /* ResetPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_derechos_derechos__["a" /* DerechosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_simit_simit__["a" /* SimitPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_novedad_novedad__["a" /* NovedadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_trafico_trafico__["a" /* TraficoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_conf_conf__["a" /* ConfPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_showItem_show__["a" /* ShowPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_resetPass_reset__["a" /* ResetPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_derechos_derechos__["a" /* DerechosPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_JarwisProvider__["a" /* JarwisProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_Token__["a" /* TokenProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_NetworkProvider__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_GeoProvider__["a" /* GeoProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_16__providers_AlertProvider__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_navigation_bar__["a" /* NavigationBar */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_simit_simit__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_novedad_novedad__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_trafico_trafico__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_navigation_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_help_help__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_derechos_derechos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_JarwisProvider__ = __webpack_require__(17);
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
    function MyApp(platform, navigationBar, statusBar, Jarwis, splashScreen, network, token, alert, Keyboard) {
        this.platform = platform;
        this.navigationBar = navigationBar;
        this.statusBar = statusBar;
        this.Jarwis = Jarwis;
        this.splashScreen = splashScreen;
        this.network = network;
        this.token = token;
        this.alert = alert;
        this.Keyboard = Keyboard;
        this.rootPage = this.isLogged() ? __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */] : __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.totalMsg = null;
        this.navigationBar.hideNavigationBar();
        this.initializeApp();
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Regristrarse', component: __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */] },
        ];
        this.pagesLogged = [
            { title: 'Servicios', component: __WEBPACK_IMPORTED_MODULE_6__pages_index__["a" /* IndexPage */] },
            { title: 'Consultar Multas', component: __WEBPACK_IMPORTED_MODULE_8__pages_simit_simit__["a" /* SimitPage */] },
            { title: 'Derechos de transito', component: __WEBPACK_IMPORTED_MODULE_16__pages_derechos_derechos__["a" /* DerechosPage */] },
            { title: 'Reportar Novedad', component: __WEBPACK_IMPORTED_MODULE_11__pages_novedad_novedad__["a" /* NovedadPage */] },
            { title: 'Trafico Curumaní', component: __WEBPACK_IMPORTED_MODULE_12__pages_trafico_trafico__["a" /* TraficoPage */] },
            { title: 'Centro de Ayuda', component: __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#FAC800');
            _this.statusBar.show();
            _this.splashScreen.hide();
            _this.network.isOnline();
            _this.navigationBar.hideNavigationBar();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.token.locationTo(page.component);
    };
    MyApp.prototype.isLogged = function () {
        return this.token.isLogged();
    };
    MyApp.prototype.logout = function () {
        var $name = localStorage.getItem('name');
        this.alert.handleResponse('Sesion Cerrada', 'Vuelva Pronto Señor(a) ' + $name);
        this.token.removeAll();
        this.token.locationTo(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header style="padding-top: 24px;">\n    <ion-toolbar>\n      <img src="../assets/imgs/trans.png" height="80px">\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list *ngIf="!isLogged()">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}} <!--<div><ion-icon name="car"></ion-icon></div>-->\n      </button>\n    </ion-list>\n\n    <ion-list *ngIf="isLogged()">\n      <button menuClose ion-item *ngFor="let p of pagesLogged" (click)="openPage(p)">\n        {{p.title}} <!--<div><ion-icon name="car"></ion-icon></div>-->\n      </button>\n    </ion-list>\n\n    <ion-grid center text-center *ngIf="isLogged()">\n      <ion-row center>\n        <ion-col>\n          <button style="height: 33px; width: 115px; background-color: #FAC800;color: black; margin-top: 110px;" ion-button (click)="logout()">\n            Cerrar Sesion\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true">\n</ion-nav>\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_navigation_bar__["a" /* NavigationBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_navigation_bar__ = __webpack_require__(13);
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
    function HomePage(Jarwis, navCtrl, Token, alertCtrl, network, navigationBar) {
        this.Jarwis = Jarwis;
        this.navCtrl = navCtrl;
        this.Token = Token;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.navigationBar = navigationBar;
        this.form = {
            email: null,
            password: null
        };
        this.error = null;
        this.success = null;
        this.splash = true;
        //this.navigationBar.hideNavigationBar();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    HomePage.prototype.toLogin = function () {
        this.navCtrl.push(HomePage_1);
    };
    HomePage.prototype.toSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.login(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    HomePage.prototype.handleResponse = function ($data) {
        var bool = this.Token.handle($data.access_token, $data);
        if (bool) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index__["a" /* IndexPage */]);
            location.reload();
        }
        //this.isReloadPage();
    };
    HomePage.prototype.isReloadPage = function () {
        if (performance.navigation.type == 1) {
            this.showAlert('Pagina Reload', '.........');
        }
    };
    HomePage.prototype.handleError = function (error) {
        this.error = error.error.error ? error.error.error : error.message.message;
        this.showAlert('Error al iniciar', this.error);
    };
    HomePage.prototype.showAlert = function ($title, $content) {
        var alert = this.alertCtrl.create({
            title: $title,
            subTitle: $content,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="../../assets/imgs/trans.svg" height="300px">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="page-home">\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/trans.png" width="280px;"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form #loginForm=ngForm (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input type="email" name="email" (focus)="network.isOnline()" required [(ngModel)]="form.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contraseña</ion-label>\n      <ion-input type="password" name="password" required [(ngModel)]="form.password"></ion-input>\n    </ion-item>\n    <ion-grid center text-center>\n      <ion-row center>\n        <ion-col>\n          <button style="height: 40px; width: 90px;" ion-button color="dark"\n                  [disabled]="!loginForm.valid">Entrar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <br><br>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <label><b>No Tienes Cuenta? </b></label>\n        <button style="height: 33px; width: 105px; background-color: #FAC800; margin-bottom: 12px;" ion-button\n                color="light" id="sendData" (click)="toSignup()">Registrate!\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simit_simit__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__novedad_novedad__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trafico_trafico__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_navigation_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__info_info__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__derechos_derechos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_JarwisProvider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var IndexPage = /** @class */ (function () {
    function IndexPage(network, token, alert, inAppBrowser, plataform, navCtl, nav, Jarwis, navigationBar) {
        this.network = network;
        this.token = token;
        this.alert = alert;
        this.inAppBrowser = inAppBrowser;
        this.plataform = plataform;
        this.navCtl = navCtl;
        this.nav = nav;
        this.Jarwis = Jarwis;
        this.navigationBar = navigationBar;
        this.contOff = 1;
        this.imgs = {
            img1: null,
            img2: null,
        };
        this.getBanners();
        this.plataform = plataform;
        if (this.contOff === 2) {
            this.network.isOnline();
        }
        this.contOff = 2;
        this.token.backToLogin();
        //this.isReloadPage();
        this.navigationBar.hideNavigationBar();
    }
    IndexPage.prototype.toSimit = function () {
        this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_3__simit_simit__["a" /* SimitPage */]);
    };
    IndexPage.prototype.isReloadPage = function () {
        if (performance.navigation.type == 1) {
            this.alert.showMsg('Pagina Reload', '.........');
        }
    };
    IndexPage.prototype.toInfo = function ($id) {
        this.navCtl.push(__WEBPACK_IMPORTED_MODULE_11__info_info__["a" /* InfoPage */]);
    };
    IndexPage.prototype.toDerechos = function () {
        this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_12__derechos_derechos__["a" /* DerechosPage */]);
    };
    IndexPage.prototype.toRunt = function () {
        var $url = 'www.runt.com.co/consultaCiudadana/#/consultaVehiculo';
        var win = location.href;
        var url2 = win.replace('http://localhost:8080/', '');
        var urlfinal = url2 + 'https://' + $url;
        this.inAppBrowser.create(urlfinal, '_system');
    };
    IndexPage.prototype.toFB = function () {
        var $url = 'www.facebook.com/transitocuruman/';
        var win = location.href;
        var url2 = win.replace('http://localhost:8080/', '');
        var urlfinal = url2 + 'https://' + $url;
        this.inAppBrowser.create(urlfinal, '_system');
    };
    IndexPage.prototype.toInsta = function () {
        var $url = 'www.instagram.com/transitocurumani/';
        var win = location.href;
        var url2 = win.replace('http://localhost:8080/', '');
        var urlfinal = url2 + 'https://' + $url;
        this.inAppBrowser.create(urlfinal, '_system');
    };
    IndexPage.prototype.toNovedad = function () {
        this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_4__novedad_novedad__["a" /* NovedadPage */]);
    };
    IndexPage.prototype.toTrafico = function () {
        this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_5__trafico_trafico__["a" /* TraficoPage */]);
    };
    IndexPage.prototype.toHelp = function () {
        this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_8__help_help__["a" /* HelpPage */]);
    };
    IndexPage.prototype.getBanners = function () {
        var _this = this;
        this.Jarwis.getBanners().subscribe(function (data) {
            _this.imgs.img1 = data['0'].imgURL1;
            _this.imgs.img2 = data['0'].imgURL2;
        }, function (error) {
            _this.alert.showMsg('Error', 'No se pudieron obtener los banners.');
        });
    };
    IndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/index/index.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Servicios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="{{imgs.img1}}" style="height: 110px; width: 100%" (click)="toInfo(1)">\n      </ion-col>\n      <ion-col>\n        <img src="{{imgs.img2}}" style="height: 110px; width: 100%" (click)="toInfo(2)">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid center text-center  has-header="true" class="card-background-page">\n    <ion-row center>\n      <ion-col>\n        <div>\n          <img src="../../assets/imgs/5.png" class="img-menu" (click)="toSimit()">\n          <div class="banner">\n            <label class="yellow">Consultar Multas</label>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <img src="../../assets/imgs/7.png" class="img-menu" (click)="toRunt()">\n          <div class="banner">\n            <label class="yellow">Tu Vehiculo</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <img src="../../assets/imgs/14.png" class="img-menu" (click)="toNovedad()">\n          <div class="banner">\n            <label class="yellow">Reportar Novedad</label>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <img src="../../assets/imgs/12.png" class="img-menu" (click)="toTrafico()">\n          <div class="banner">\n            <label class="yellow">Trafico Curumaní</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <img src="../../assets/imgs/13.png" class="img-menu" (click)="toHelp()">\n          <div class="banner">\n            <label class="yellow">Centro De Ayuda</label>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <img src="../../assets/imgs/2.png" class="img-menu" (click)="toDerechos()">\n          <div class="banner">\n            <label class="yellow">Derechos de Transito</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row center>\n      <ion-col>\n        <img src="../../assets/imgs/fb.svg" height="40px" (click)="toFB()">\n        <img src="../../assets/imgs/insta.png" height="45px" (click)="toInsta()">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/index/index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_13__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_navigation_bar__["a" /* NavigationBar */]])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Token__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_GeoProvider__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, plataform, Jarwis, network, alert, Token, navigationBar, Geo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plataform = plataform;
        this.Jarwis = Jarwis;
        this.network = network;
        this.alert = alert;
        this.Token = Token;
        this.navigationBar = navigationBar;
        this.Geo = Geo;
        this.isIos = false;
        this.user = this.getUserName();
        this.form = {
            asunto: null,
            contenido: null,
            idUser: localStorage.getItem('idUser'),
            nombre: localStorage.getItem('name'),
            remitente: localStorage.getItem('email')
        };
        this.Geo.Getgeolocation();
        this.network.isOnline();
        this.Token.backToLogin();
        this.navigationBar.hideNavigationBar();
        if (this.plataform.is('ios')) {
            this.isIos = true;
        }
    }
    HelpPage.prototype.onSubmit = function () {
        var _this = this;
        var newForm = {
            asunto: this.form.asunto,
            contenido: this.form.contenido,
            idUser: localStorage.getItem('idUser'),
            nombre: localStorage.getItem('name'),
            remitente: localStorage.getItem('email'),
            userlocation: localStorage.getItem('location')
        };
        this.Jarwis.mensaje(newForm).subscribe(function (data) { return _this.alert.showMsg('Mensaje Enviado', 'Su Mensaje ha sido enviado con exito!'); }, function (error) {
            if (error.error.error) {
                _this.alert.showMsg('Error', error.error.error);
            }
            else {
                _this.alert.showMsg('Error', 'No se pudo enviar su mensaje, revise su conexion.');
            }
        });
        this.form.asunto = null;
        this.form.contenido = null;
    };
    HelpPage.prototype.getUserName = function () {
        var $name = [];
        $name = localStorage.getItem('name').split(' ');
        return $name['0'];
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/help/help.html"*/'<ion-header>\n  <br>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Centro de Ayuda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid center text-center>\n    <ion-row center>\n      <ion-col>\n        <img src="assets/imgs/helpdesk.png" width="130px;"/>\n        <br>\n        <label>Hola {{user}} ¿En Qué Podemos Ayudarte?</label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form #novedadForm=ngForm (ngSubmit)="onSubmit()">\n\n    <ion-item *ngIf="isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="navigate" item-start></ion-icon>\n      <label class="font-native">Curumaní, Cesar.</label>\n    </ion-item>\n\n    <ion-item *ngIf="!isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="navigate" item-start style="margin-right: -15px !important; "></ion-icon>\n      <label class="font-native">Curumaní, Cesar.</label>\n    </ion-item>\n\n    <ion-item *ngIf="isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="locate" item-start></ion-icon>\n      <label class="font-native">Carretera Troncal #22-136</label>\n    </ion-item>\n\n    <ion-item *ngIf="!isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="locate" item-start style="margin-right: -15px !important; "></ion-icon>\n      <label class="font-native">Carretera Troncal #22-136</label>\n    </ion-item>\n\n    <ion-item *ngIf="isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="clock" item-start></ion-icon>\n      <label class="font-native">Lun-Vie: 8am a 1pm - 2pm a 5pm</label>\n    </ion-item>\n\n    <ion-item  *ngIf="!isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="clock" item-start style="margin-right: -15px !important; "></ion-icon>\n      <label class="font-native">Lun-Vie: 8am a 1pm - 2pm a 5pm</label>\n    </ion-item>\n\n    <ion-item *ngIf="isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="at" item-start></ion-icon>\n      <label class="font-native">tramites@ettcurumani.com</label>\n    </ion-item>\n\n    <ion-item *ngIf="!isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="at" item-start style="margin-right: -15px !important; "></ion-icon>\n      <label class="font-native">tramites@ettcurumani.com</label>\n    </ion-item>\n\n    <ion-item *ngIf="isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark" name="call" item-start></ion-icon>\n      <label class="font-native">3174384579</label>\n    </ion-item>\n\n    <ion-item *ngIf="!isIos" style="padding-left: 9px !important;">\n      <ion-icon class="native-dark"  name="call" item-start style="margin-right: -15px !important; "></ion-icon>\n      <label class="font-native">3174384579</label>\n    </ion-item>\n\n    <ion-grid center text-center>\n      <ion-row center>\n        <ion-col>\n          <div class="banner-native">\n            <p style="padding-top: 4px">Escriba Aquí Cualquier inquietud </p>\n          </div>\n          <ion-icon name="arrow-down" item-start></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item>\n      <ion-textarea type="text" name="asunto" required [(ngModel)]="form.asunto" placeholder="Asunto"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-textarea type="text" name="contenido" required [(ngModel)]="form.contenido" placeholder="Su Mensaje.."></ion-textarea>\n    </ion-item>\n    <ion-grid center text-center>\n      <ion-row center>\n        <ion-col>\n          <button style="height: 36px; width: 110px;" ion-button color="dark"\n                  [disabled]="!novedadForm.valid">Enviar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br><br><br>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ettcurumaniAppV2/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_JarwisProvider__["a" /* JarwisProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NetworkProvider__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_AlertProvider__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_navigation_bar__["a" /* NavigationBar */],
            __WEBPACK_IMPORTED_MODULE_7__providers_GeoProvider__["a" /* GeoProvider */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map