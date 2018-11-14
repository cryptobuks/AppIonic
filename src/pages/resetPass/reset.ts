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
  selector: 'page-reset',
  templateUrl: 'reset.html'
})
export class ResetPage {

  public form = {
    email: localStorage.getItem('email'),
    password: null,
    password_new: null,
    password_confirmation: null,
  };

  public error = null;
  public success = null;

  constructor(public navCtrl: NavController,
              public alert: AlertProvider,
              public Token: TokenProvider,
              private Jarwis: JarwisProvider,
              public network: NetworkProvider,
              public navigationBar : NavigationBar
  ) {
    this.network.isOnline();
    this.navigationBar.hideNavigationBar();
  }

  onSubmit() {
    this.Jarwis.resetPass(this.form).subscribe(
      data => {
        this.handleResponse();
      },
      error => this.handleError(error)
    );
  }

  onValidateResetPass(){
    let $pass = this.form.password;
    if ($pass != null){
      this.Jarwis.validateResetPass(this.form).subscribe(
        data => {
          console.log("Clave Correcta!")
        },
        error => this.handleError(error)
      );
    }
  }

  handleResponse() {
      this.alert.showMsg('Proceso Completado', 'Su Clave ha sido Actualizada Correctamente!');
  }

  handleError(error) {
    if (error.error.error) {
      swal("Clave Erronea", error.error.error, "error");
      this.form.password = null;
    } else {
      if (error.error.errors.email) {
        swal("Error al cambiar clave", "El Email No es valido, No puede contener caracteres especiales.", "error");
      } else {
        if (error.error.error) {
          this.error = error.error.error;
          swal("Error al cambiar clave", this.error, "error");
        } else if (error.message.message) {
          this.error = error.message.message;
          swal("Error al cambiar clave", this.error, "error");
        } else if (error.error.message) {
          this.error = error.error.message;
          swal("Error al cambiar clave", this.error, "error");
        } else if (error.error.errors.password) {
          this.error = error.error.errors.password;
          swal("Error al cambiar clave", this.error, "error");
        }
      }
    }
  }

  onValidatePass() {
    let $pass = this.form.password_new;
    let $pass2 = this.form.password_confirmation;
    if ($pass != null && $pass2 != null) {
      if (!$pass.isEmpty && !$pass2.isEmpty) {
        if ($pass != $pass2 || $pass2 != $pass) {
          swal("Contraseña Incorrecta", "Las contraseñas no coinciden", "warning");
          this.form.password_new = null;
          this.form.password_confirmation = null;
        }
      }
    }
  }
}
