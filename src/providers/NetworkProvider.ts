import {Injectable} from '@angular/core';
import {Network} from '@ionic-native/network'
import {HttpClient} from "@angular/common/http";
import {AlertProvider} from "./AlertProvider";

@Injectable()
export class NetworkProvider {

  constructor(
    public network: Network,
    public httpClient: HttpClient,
    public alert: AlertProvider
  ) {}

  public isOnline() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(data => {
         // return this.alert.showAlert('Online');
        }, error => {
          return this.alert.showMsg('Sin Conexion', 'Verifique su conexion Wifi/Movil');
        }
      );
  }

  public isOnlineBool() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(data => {
          return true;
        }, error => {
          return false;
        }
      );
  }

}
