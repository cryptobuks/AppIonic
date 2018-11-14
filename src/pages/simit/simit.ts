import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {TokenProvider} from "../../providers/Token";
import {NavigationBar} from "@ionic-native/navigation-bar";

@Component({
  selector: 'page-simit',
  templateUrl: 'simit.html'
})
export class SimitPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public network : NetworkProvider,
              public Token : TokenProvider,
              public navigationBar : NavigationBar) {
    this.network.isOnline();
    this.Token.backToLogin();
    this.navigationBar.hideNavigationBar();

  }

}
