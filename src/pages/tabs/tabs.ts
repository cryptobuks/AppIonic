import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {HomePage} from "../home/home";
import {HelpPage} from "../help/help";
import {IndexPage} from "../index";
import {TokenProvider} from "../../providers/Token";
import {ConfPage} from "../conf/conf";
import {ChatPage} from "../chat/chat";
import {NavigationBar} from "@ionic-native/navigation-bar";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public isIos = false;
  public labelCount = localStorage.getItem('totalMsg');

  public TabHome = this.isLogged() ? IndexPage : HomePage;
  public TabChat = this.isLogged() ? ChatPage : HomePage;
  public TabHelp = this.isLogged() ? HelpPage : HomePage;
  public TabConf = this.isLogged() ? ConfPage : HomePage;

  constructor(public navCtrl: NavController,
              public Jarwis: JarwisProvider,
              public plataform : Platform,
              public alert : AlertProvider,
              public token: TokenProvider,
              public navigationBar : NavigationBar) {
    this.navigationBar.hideNavigationBar();
    this.timeout();
    if (this.plataform.is('ios')){
      this.isIos = true;
    }
  }

  timeout() {
    setTimeout(() => {
      this.getMensajes();
    }, 30000);
  }

  public getMensajes() {
    let $array = {
      idUser : localStorage.getItem('idUser')
    };
    this.Jarwis.getMensajes($array).subscribe(
      data => {
        this.labelCount = data['totalMsg'];
      },
      error => {
        this.alert.showMsg('Error', 'No se pudo obtener los mensajes');
      }
    )
  }

  public isLogged() {
    return this.token.isLogged();
  }
}
