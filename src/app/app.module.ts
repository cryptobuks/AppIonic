import { BrowserModule } from '@angular/platform-browser';
import {ElementRef, ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, Nav, NavController} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage} from '../pages/signup/signup';
import { IndexPage} from '../pages/index';
import { FormsModule } from "@angular/forms";

import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { JarwisProvider } from '../providers/JarwisProvider';
import { TokenProvider } from '../providers/Token';
import { NetworkProvider } from '../providers/NetworkProvider';
import {Network} from "@ionic-native/network";
import { HTTP } from "@ionic-native/http";
import {AlertProvider} from "../providers/AlertProvider";
import {SimitPage} from "../pages/simit/simit";
import {NovedadPage} from "../pages/novedad/novedad";
import {TraficoPage} from "../pages/trafico/trafico";
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {NavigationBar} from "@ionic-native/navigation-bar";
import {HelpPage} from "../pages/help/help";
import {TabsPage} from "../pages/tabs/tabs";
import {ConfPage} from "../pages/conf/conf";
import {ChatPage} from "../pages/chat/chat";
import {ShowPage} from "../pages/showItem/show";
import {ResetPage} from "../pages/resetPass/reset";
import {InfoPage} from "../pages/info/info";
import {DerechosPage} from "../pages/derechos/derechos";
import {Geolocation} from "@ionic-native/geolocation";
import {GeoProvider} from "../providers/GeoProvider";
import {NativeGeocoder} from "@ionic-native/native-geocoder";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    IndexPage,
    SimitPage,
    NovedadPage,
    TraficoPage,
    HelpPage,
    TabsPage,
    ConfPage,
    ChatPage,
    ShowPage,
    ResetPage,
    InfoPage,
    DerechosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    IndexPage,
    SimitPage,
    NovedadPage,
    TraficoPage,
    HelpPage,
    TabsPage,
    ConfPage,
    ChatPage,
    ShowPage,
    ResetPage,
    InfoPage,
    DerechosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JarwisProvider,
    TokenProvider,
    NetworkProvider,
    GeoProvider,
    Network,
    HTTP,
    AlertProvider,
    InAppBrowser,
    NavigationBar,
    Geolocation,
    NativeGeocoder,
  ]
})
export class AppModule {}
