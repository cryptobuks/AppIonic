import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {App} from "ionic-angular";
import {HomePage} from "../pages/home/home";

@Injectable()
export class TokenProvider {

  public cont;

  private iss = {
    login: 'http://172.104.211.233/ettcurumaniServe/public/api/login',
    signup: 'http://172.104.211.233/ettcurumaniServe/public/api/signup'
  };

  constructor(public http: HttpClient, public app: App
  ) {

  }

  handle($token, $data) {
    this.set($token, $data);
    console.log(this.isValid());
    return this.isValid();
  }

  set($token, $data) {
    localStorage.setItem('token', $token);
    localStorage.setItem('idUser', $data.userData.id);
    localStorage.setItem('name', $data.userData.name);
    localStorage.setItem('email', $data.userData.email);
    localStorage.setItem('password', $data.userData.password);
    localStorage.setItem('telefono', $data.userData.telefono);
    localStorage.setItem('direccion', $data.userData.direccion);
    localStorage.setItem('placa', $data.userData.placa);
  }

  get() {
    return localStorage.getItem('token');
  }

  getDataUser() {
    const $array = {
      id: localStorage.getItem('idUser'),
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password'),
      telefono: localStorage.getItem('telefono'),
      direccion: localStorage.getItem('direccion'),
      placa: localStorage.getItem('placa')
    };
    return $array;
  }

  remove() {
    localStorage.removeItem('token');
  }

  removeAll() {
    localStorage.clear();
  }

  locationTo($page): void {
    let nav = this.app.getActiveNav();
    nav.push($page);
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return this.objectKeys(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload($token) {
    const payload = $token.split('.')[1];
    return this.decode(payload);
  }

  decode($payload) {
    return JSON.parse(atob($payload));
  }

  objectKeys($keys) {
    const values = Object.keys($keys).map(key => $keys[key]);
    const union = values.join(",");
    return union;
  }

  isLogged() {
    return this.isValid();
  }

  public backToLogin() {
    if (this.cont == 2) {
      const $token = this.get();
      if ($token === null) {
        this.locationTo(HomePage);
      }
    }
    this.cont = 2;
  }

}
