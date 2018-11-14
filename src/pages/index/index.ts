import {Component} from '@angular/core';
import {Nav, NavController, Platform} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {SimitPage} from "../simit/simit";
import {NovedadPage} from "../novedad/novedad";
import {TraficoPage} from "../trafico/trafico";
import {TokenProvider} from "../../providers/Token";
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {HelpPage} from "../help/help";
import {AlertProvider} from "../../providers/AlertProvider";
import {NavigationBar} from "@ionic-native/navigation-bar";
import {InfoPage} from "../info/info";
import {DerechosPage} from "../derechos/derechos";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {GeoProvider} from "../../providers/GeoProvider";

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  public contOff = 1;

  public imgs = {
    img1 : null,
    img2 : null,
  };

  constructor(public network: NetworkProvider,
              public token: TokenProvider,
              public alert: AlertProvider,
              public inAppBrowser: InAppBrowser,
              public plataform: Platform,
              public navCtl: NavController,
              public nav: Nav,
              public Jarwis: JarwisProvider,
              public navigationBar: NavigationBar) {

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

  public toSimit() {
    this.navCtl.setRoot(SimitPage);
  }

  isReloadPage() {
    if (performance.navigation.type == 1) {
      this.alert.showMsg('Pagina Reload', '.........');
    }
  }

  toInfo($id) {
    this.navCtl.push(InfoPage);
  }

  toDerechos() {
    this.navCtl.setRoot(DerechosPage);
  }

  toRunt() {
    let $url = 'www.runt.com.co/consultaCiudadana/#/consultaVehiculo';
    let win = location.href;
    let url2 = win.replace('http://localhost:8080/', '');
    let urlfinal = url2 + 'https://' + $url;
    this.inAppBrowser.create(urlfinal, '_system');
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

  public toNovedad() {
    this.navCtl.setRoot(NovedadPage);
  }

  public toTrafico() {
    this.navCtl.setRoot(TraficoPage);
  }

  public toHelp() {
    this.navCtl.setRoot(HelpPage);
  }

  getBanners() {
    this.Jarwis.getBanners().subscribe(
      data => {
         this.imgs.img1 = data['0'].imgURL1;
         this.imgs.img2 = data['0'].imgURL2;
      },
      error => {
          this.alert.showMsg('Error', 'No se pudieron obtener los banners.')
      }
    );
  }
}
