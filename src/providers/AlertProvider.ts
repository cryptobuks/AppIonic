import {Injectable} from '@angular/core';
import {ToastController} from "ionic-angular";
import {AlertController} from "ionic-angular";

@Injectable()
export class AlertProvider {
  toastinstance: any;
  private error = null;

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl : AlertController
  ) {

  }

  handleResponse($title, $content) {
      return this.showMsg($title, $content);
  }

  handleError(error) {
    this.error = error.error.error ? error.error.error : error.message.message;
    this.showMsg('Error al salir', 'Verifique su conexion a internet.');
  }

  showAlert($msg) {
    this.toastinstance = this.toastCtrl.create(
      {
        message: $msg,
        position: 'buttom',
        duration: 3000
      }
    );
    this.toastinstance.present();
  }

  showMsg($title, $content) {
    const alert = this.alertCtrl.create({
      title: $title,
      subTitle: $content,
      buttons: ['OK']
    });
    alert.present();
  }
}
