import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";
import {TokenProvider} from "../../providers/Token";
import {NavigationBar} from "@ionic-native/navigation-bar";
import {GeoProvider} from "../../providers/GeoProvider";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  public isIos = false;
  public user = this.getUserName();

  public form = {
    asunto: null,
    contenido: null,
    idUser: localStorage.getItem('idUser'),
    nombre: localStorage.getItem('name'),
    remitente: localStorage.getItem('email')
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public plataform: Platform,
              private Jarwis: JarwisProvider,
              public network: NetworkProvider,
              public alert: AlertProvider,
              public Token: TokenProvider,
              public navigationBar: NavigationBar,
              public Geo: GeoProvider
  ) {
    this.Geo.Getgeolocation();
    this.network.isOnline();
    this.Token.backToLogin();
    this.navigationBar.hideNavigationBar();
    if (this.plataform.is('ios')) {
      this.isIos = true;
    }
  }

  onSubmit() {
    let newForm = {
      asunto: this.form.asunto,
      contenido: this.form.contenido,
      idUser: localStorage.getItem('idUser'),
      nombre: localStorage.getItem('name'),
      remitente: localStorage.getItem('email'),
      userlocation: localStorage.getItem('location')
    };

    this.Jarwis.mensaje(newForm).subscribe(
      data => this.alert.showMsg('Mensaje Enviado', 'Su Mensaje ha sido enviado con exito!'),
      error => {
        if (error.error.error) {
          this.alert.showMsg('Error', error.error.error);
        } else {
          this.alert.showMsg('Error', 'No se pudo enviar su mensaje, revise su conexion.');
        }
      }
    );

    this.form.asunto = null;
    this.form.contenido = null;
  }

  getUserName() {
    let $name = [];
    $name = localStorage.getItem('name').split(' ');
    return $name['0'];
  }

}
