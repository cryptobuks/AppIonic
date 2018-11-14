import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";
import {TokenProvider} from "../../providers/Token";
import {NavigationBar} from "@ionic-native/navigation-bar";

@Component({
  selector: 'page-derechos',
  templateUrl: 'derechos.html'
})
export class DerechosPage {

  public query = true;
  public placa_cedula = null;
  public items = null;
  public totalFINAL = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Jarwis: JarwisProvider,
              public network: NetworkProvider,
              public alert: AlertProvider,
              public Token: TokenProvider,
              public navigationBar: NavigationBar
  ) {
    this.network.isOnline();
    this.Token.backToLogin();
    this.navigationBar.hideNavigationBar();
  }

  getDerechos() {
    let $form = {
      placa_cedula: this.placa_cedula
    };

    this.Jarwis.getDerechos($form).subscribe(
      data => {
        this.items = data['0']['data'];
        this.totalFINAL = data['0']['totalFINAL'];
        this.query = false;
      }, error => {
        this.alert.showMsg('Error', 'No se pudo obtener los derechos de transito.');
      }
    );
  }

}
