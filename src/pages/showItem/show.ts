import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {AlertProvider} from "../../providers/AlertProvider";
import {TokenProvider} from "../../providers/Token";
import {NavigationBar} from "@ionic-native/navigation-bar";
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})
export class ShowPage {
  public asunto = localStorage.getItem('asunto');
  public pregunta = localStorage.getItem('pregunta');
  public contenido = localStorage.getItem('contenido');

  public chat : ChatPage;

  constructor(public navCtrl: NavController,
              public network: NetworkProvider,
              public alert: AlertProvider,
              public Token: TokenProvider,
              public Jarwis: JarwisProvider,
              public navigationBar: NavigationBar
  ) {
    this.network.isOnline();
    this.Token.backToLogin();
    this.navigationBar.hideNavigationBar();
    this.SetViewItem();
  }

  public SetViewItem() {
    let $id = localStorage.getItem('id_received');
    if ($id != null) {
      let form = {
        id: $id
      };
      this.Jarwis.setViewItem(form).subscribe(
        data => {
          console.log("Item Oculto OKOK!");
        },
        error => {
          this.alert.showMsg('Error', 'Ocurrio un error a la hora de cambiar el estado del item.')
        }
      )
    }
  }


}
