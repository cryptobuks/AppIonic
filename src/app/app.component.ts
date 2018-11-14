import {Component, ViewChild} from '@angular/core';
import {Keyboard, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {SignupPage} from "../pages/signup/signup";
import {IndexPage} from "../pages/index";
import {NetworkProvider} from "../providers/NetworkProvider";
import {SimitPage} from "../pages/simit/simit";
import {TokenProvider} from "../providers/Token";
import {AlertProvider} from "../providers/AlertProvider";
import {NovedadPage} from "../pages/novedad/novedad";
import {TraficoPage} from "../pages/trafico/trafico";
import {NavigationBar} from '@ionic-native/navigation-bar';
import {HelpPage} from "../pages/help/help";
import {TabsPage} from "../pages/tabs/tabs";
import {DerechosPage} from "../pages/derechos/derechos";
import {JarwisProvider} from "../providers/JarwisProvider";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = this.isLogged() ? TabsPage : HomePage;

  //rootPage: any = this.isLogged() ? IndexPage : HomePage;

  pages: Array<{ title: string, component: any }>;
  pagesLogged: Array<{ title: string, component: any }>;
  public totalMsg = null;

  constructor(public platform: Platform,
              private navigationBar: NavigationBar,
              public statusBar: StatusBar,
              public Jarwis: JarwisProvider,
              public splashScreen: SplashScreen,
              public network: NetworkProvider,
              public token: TokenProvider,
              public alert: AlertProvider,
              public Keyboard: Keyboard
  ) {
    this.navigationBar.hideNavigationBar();
    this.initializeApp();

    this.pages = [
      {title: 'Login', component: HomePage},
      {title: 'Regristrarse', component: SignupPage},
    ];

    this.pagesLogged = [
      {title: 'Servicios', component: IndexPage},
      {title: 'Consultar Multas', component: SimitPage},
      {title: 'Derechos de transito', component: DerechosPage},
      {title: 'Reportar Novedad', component: NovedadPage},
      {title: 'Trafico Curumaní', component: TraficoPage},
      {title: 'Centro de Ayuda', component: HelpPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#FAC800');
      this.statusBar.show();
      this.splashScreen.hide();
      this.network.isOnline();

      this.navigationBar.hideNavigationBar();
    });
  }

  openPage(page) {
    this.token.locationTo(page.component);
  }

  public isLogged() {
    return this.token.isLogged();
  }

  public logout() {
    const $name = localStorage.getItem('name');
    this.alert.handleResponse('Sesion Cerrada', 'Vuelva Pronto Señor(a) ' + $name);
    this.token.removeAll();
    this.token.locationTo(HomePage);
    location.reload();
  }

}
