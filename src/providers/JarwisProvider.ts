import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class JarwisProvider {

  //private baseUrl = 'http://localhost:8888/ettcurumaniServe/public/api';
  private baseUrlServer = 'http://172.104.211.233/ettcurumaniServe/public/api';

  constructor(public http: HttpClient) {

  }

  signup($data) {
    return this.http.post(`${this.baseUrlServer}/signup`, $data, {headers: {'Content-Type': 'application/json'}});
  }

  login($data) {
    return this.http.post(`${this.baseUrlServer}/login`, $data, {headers: {'Content-Type': 'application/json'}});
  }

  novedad($data) {
    return this.http.post(`${this.baseUrlServer}/novedad`, $data, {headers: {'Content-Type': 'application/json'}});
  }

  mensaje($data) {
    return this.http.post(`${this.baseUrlServer}/mensaje`, $data, {headers: {'Content-Type': 'application/json'}});
  }

  getMensajes($data){
    return this.http.post(`${this.baseUrlServer}/getMensajes`, $data, {headers: {'Content-Type': 'application/json'}})
  }

  getRequisitos($data){
    return this.http.post(`${this.baseUrlServer}/getRequisitos`, $data, {headers: {'Content-Type': 'application/json'}})
  }

  validateResetPass($data) {
    return this.http.post(`${this.baseUrlServer}/validateResetPass`, $data, {headers: {'Content-Type': 'application/json'}});
  }

  resetPass($data) {
    return this.http.post(`${this.baseUrlServer}/resetPassword`, $data, {headers: {'Content-Type': 'application/json'}});
  }

  setViewItem($data){
    return this.http.post(`${this.baseUrlServer}/setViewItem`, $data, {headers: {'Content-Type': 'application/json'}});
  }

  getBanners(){
    return this.http.get(`${this.baseUrlServer}/getBanners`, {headers: {'Content-Type': 'application/json'}});
  }

  getDerechos($data){
    return this.http.post(`${this.baseUrlServer}/getDerechos`, $data,  {headers: {'Content-Type': 'application/json'}});
  }
}
