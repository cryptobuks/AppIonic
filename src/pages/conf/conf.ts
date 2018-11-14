import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";
import {TokenProvider} from "../../providers/Token";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {HomePage} from "../home/home";
import {ResetPage} from "../resetPass/reset";
import {NavigationBar} from "@ionic-native/navigation-bar";

@Component({
  selector: 'page-conf',
  templateUrl: 'conf.html'
})
export class ConfPage {
  public nombre;
  public email;

  constructor(public navCtrl: NavController,
              public network: NetworkProvider,
              public alert: AlertProvider,
              public Token: TokenProvider,
              public inAppBrowser: InAppBrowser,
              public navigationBar : NavigationBar
  ) {
    this.network.isOnline();
    this.Token.backToLogin();
    this.getDataUser();
    this.navigationBar.hideNavigationBar();
  }

  getDataUser() {
    let $data = this.Token.getDataUser();
    this.nombre = $data.name;
    this.email = $data.email;
  }

  public isLogged(){
    return this.Token.isLogged();
  }

  toResetPass(){
    this.navCtrl.push(ResetPage);
  }

  toFB() {
    let $url = 'www.facebook.com/transitocuruman/';
    let win = location.href;
    let url2 = win.replace('http://localhost:8080/', '');
    let urlfinal = url2 + 'https://' + $url;
    this.inAppBrowser.create(urlfinal, '_system');
  }

  toInsta() {
    let $url = 'www.instagram.com/transitocurumani/';
    let win = location.href;
    let url2 = win.replace('http://localhost:8080/', '');
    let urlfinal = url2 + 'https://' + $url;
    this.inAppBrowser.create(urlfinal, '_system');
  }

  public logout() {
    const $name = localStorage.getItem('name');
    this.alert.handleResponse('Sesion Cerrada', 'Vuelva Pronto Señor(a) ' + $name);
    this.Token.removeAll();
    this.Token.locationTo(HomePage);
    location.reload();
  }

}
