import {Component} from '@angular/core';

import {NavController} from "ionic-angular";

import {AlertController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {IndexPage} from "../index";
import {JarwisProvider} from "../../providers/JarwisProvider";
import {TokenProvider} from "../../providers/Token";
import {NetworkProvider} from "../../providers/NetworkProvider";
import {NavigationBar} from "@ionic-native/navigation-bar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public form = {
    email: null,
    password: null
  };

  public error = null;
  public success = null;
  public splash = true;

  constructor(
    private Jarwis: JarwisProvider,
    public navCtrl: NavController,
    private Token: TokenProvider,
    public alertCtrl: AlertController,
    public network: NetworkProvider,
    public navigationBar: NavigationBar) {
    //this.navigationBar.hideNavigationBar();
  }


  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  public toLogin() {
    this.navCtrl.push(HomePage);
  }

  toSignup() {
    this.navCtrl.push(SignupPage);
  }

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse($data) {
    let bool = this.Token.handle($data.access_token, $data);
    if (bool) {
      this.navCtrl.push(IndexPage);
      location.reload();
    }
    //this.isReloadPage();
  }

  isReloadPage() {
    if (performance.navigation.type == 1) {
      this.showAlert('Pagina Reload', '.........');
    }
  }

  handleError(error) {
      this.error = error.error.error ? error.error.error : error.message.message;
      this.showAlert('Error al iniciar', this.error);
  }

  showAlert($title, $content) {
    const alert = this.alertCtrl.create({
      title: $title,
      subTitle: $content,
      buttons: ['OK']
    });
    alert.present();
  }

  /* onGet() {
     return this.http.get('http://localhost:8888/ettcurumaniServe/public/api/getData', {headers: {'Content-Type': 'application/json'}})
       .subscribe(
         data => console.log("Success " + data),
         error => console.log(error)
       );
   }*/

}
