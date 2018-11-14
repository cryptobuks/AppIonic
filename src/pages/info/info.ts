import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";
import {TokenProvider} from "../../providers/Token";
import {NavigationBar} from "@ionic-native/navigation-bar";
import {GeoProvider} from "../../providers/GeoProvider";

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  public requisitos = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Jarwis: JarwisProvider,
              public network: NetworkProvider,
              public alert: AlertProvider,
              public Token: TokenProvider,
              public navigationBar: NavigationBar) {
    this.network.isOnline();
    this.Token.backToLogin();
    this.navigationBar.hideNavigationBar();
    this.getRequisitos();
  }

  getRequisitos() {
    let data = {
      id: '14'
    };
    this.Jarwis.getRequisitos(data).subscribe(
      data => {
        this.requisitos = data;
        //this.alert.showMsg('Novedad Enviada', 'Su Novedad ha sido enviada con exito!')
      },
      error => {
        //this.alert.showMsg('Error', 'No se pudo enviar su novedad, revise su conexion.')
      }
    );
  }

}
