import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";
import {TokenProvider} from "../../providers/Token";
import {ShowPage} from "../showItem/show";
import {NavigationBar} from "@ionic-native/navigation-bar";
import {TabsPage} from "../tabs/tabs";
import {GeoProvider} from "../../providers/GeoProvider";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  public totalMsg;
  public items;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Jarwis: JarwisProvider,
              public network: NetworkProvider,
              public alert: AlertProvider,
              public Token: TokenProvider,
              public navigationBar: NavigationBar,
  ) {
    this.network.isOnline();
    this.Token.backToLogin();
    localStorage.removeItem('totalMsg');
    this.getMensajes();
    this.navigationBar.hideNavigationBar();
    this.timeout();
  }

  timeout() {
    setInterval(() => {
      console.log('hide');
      this.getMensajes();
    }, 30000);
  }

  public getMensajes() {
    let $array = {
      idUser: localStorage.getItem('idUser')
    };
    this.Jarwis.getMensajes($array).subscribe(
      data => {
        localStorage.removeItem('totalMsg');
        localStorage.setItem('totalMsg', data['totalMsg']);
        this.totalMsg = localStorage.getItem('totalMsg');
        this.items = data['mensajes'];
      },
      error => {
        this.alert.showMsg('Error', 'No se pudo obtener los mensajes');
      }
    )
  }

  toItem($item) {
    localStorage.removeItem('id_received');
    localStorage.removeItem('asunto');
    localStorage.removeItem('pregunta');
    localStorage.removeItem('contenido');
    localStorage.setItem('id_received', $item.id);
    localStorage.setItem('asunto', $item.asunto);
    localStorage.setItem('pregunta', $item.pregunta);
    localStorage.setItem('contenido', $item.contenido);
    this.navCtrl.push(ShowPage);
  }

}
