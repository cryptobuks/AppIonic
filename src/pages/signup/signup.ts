import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import swal from "sweetalert";
import {JarwisProvider} from '../../providers/JarwisProvider';
import {NetworkProvider} from "../../providers/NetworkProvider";
import {IndexPage} from "../index";
import {TokenProvider} from "../../providers/Token";
import {AlertProvider} from "../../providers/AlertProvider";
import {NavigationBar} from "@ionic-native/navigation-bar";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  public form = {
    name: null,
    email: null,
    telefono: null,
    direccion: null,
    placa: null,
    password: null,
    password_confirmation: null,
  };

  public error = null;
  public success = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alert: AlertProvider,
              public Token: TokenProvider,
              private Jarwis: JarwisProvider,
              public network: NetworkProvider,
              public navigationBar : NavigationBar
  ) {
    this.network.isOnline();
    //this.navigationBar.hideNavigationBar();
  }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => {
        this.handleResponse(data);
      },
      error => this.handleError(error)
    );
  }

  handleResponse($data) {
    let bool = this.Token.handle($data.access_token, $data);
    if (bool) {
      this.alert.showMsg('Registrado Correctamente', 'Gracias Por Registrarse Señor(a) ' + $data.user);
      this.navCtrl.push(IndexPage);
      location.reload();
    }
  }

  handleError(error) {
    if (!this.network.isOnlineBool()) {
      swal("Error al regitrar usuario", "Hubo un Error en el servidor.", "error");
    } else {
      if (error.error.errors.email) {
        swal("Error al regitrar usuario", "El Email No es valido, No puede contener caracteres especiales.", "error");
      } else {
        if (error.error.error) {
          this.error = error.error.error;
          swal("Error al regitrar usuario", this.error, "error");
        } else if (error.message.message) {
          this.error = error.message.message;
          swal("Error al regitrar usuario", this.error, "error");
        } else if (error.error.message) {
          this.error = error.error.message;
          swal("Error al regitrar usuario", this.error, "error");
        } else if (error.error.errors.password) {
          this.error = error.error.errors.password;
          swal("Error al regitrar usuario", this.error, "error");
        }
      }
    }
  }

  onValidatePass() {
    let $pass = this.form.password;
    let $pass2 = this.form.password_confirmation;
    if ($pass != null && $pass2 != null) {
      if (!$pass.isEmpty && !$pass2.isEmpty) {
        if ($pass != $pass2 || $pass2 != $pass) {
          swal("Contraseña Incorrecta", "Las contraseñas no coinciden", "warning");
          this.form.password = null;
          this.form.password_confirmation = null;
        }
      }
    }
  }
}
