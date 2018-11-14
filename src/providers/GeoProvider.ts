import {Injectable} from '@angular/core';
import {AlertProvider} from "./AlertProvider";
import {Geolocation} from "@ionic-native/geolocation";
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult,
  NativeGeocoderOptions
} from '@ionic-native/native-geocoder';

@Injectable()
export class GeoProvider {

  public options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(public geolocation: Geolocation, public alert: AlertProvider, public nativeGeocoder: NativeGeocoder) {
  }


  public Getgeolocation() {
    localStorage.removeItem('location');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, this.options)
        .then((result: NativeGeocoderReverseResult[]) => {
          let $data = result[0];
          let $location = $data['countryName'] + ", "+ $data['administrativeArea'] + ", "+$data['locality'] + ", "+  $data['thoroughfare']+ " "+ $data['subThoroughfare'];
          //this.alert.showMsg("Ciudad", $location)
          localStorage.setItem("location", $location);
        })
        .catch((error: any) => console.log(error));
    }).catch((error) => {
      this.alert.showMsg('Error', 'No se pudo obtener la ubicacion del usuario');
    });
  }
}
