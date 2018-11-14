import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";
import {TokenProvider} from "../../providers/Token";
import {NavigationBar} from "@ionic-native/navigation-bar";

@Component({
  selector: 'page-novedad',
  templateUrl: 'novedad.html'
})
export class NovedadPage {

  public form = {
    asunto: null,
    contenido: null,
    nombre: localStorage.getItem('name'),
    remitente: localStorage.getItem('email')
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Jarwis: JarwisProvider,
              public network: NetworkProvider,
              public alert: AlertProvider,
              public Token : TokenProvider,
              public navigationBar : NavigationBar
  ) {
    this.network.isOnline();
    this.Token.backToLogin();
    this.navigationBar.hideNavigationBar();
  }

  onSubmit() {
    this.Jarwis.novedad(this.form).subscribe(
      data => this.alert.showMsg('Novedad Enviada', 'Su Novedad ha sido enviada con exito!'),
      error => this.alert.showMsg('Error', 'No se pudo enviar su novedad, revise su conexion.')
    );

    this.form.asunto = null;
    this.form.contenido = null;
  }

}
