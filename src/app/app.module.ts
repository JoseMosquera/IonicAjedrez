import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JugadorPage } from '../pages/jugador/jugador';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { AddJugadorPage } from '../pages/add-jugador/add-jugador';
import { EditJugadorPage } from '../pages/edit-jugador/edit-jugador';
import { EquipoPage } from '../pages/equipo/equipo';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
import { EquiposPage } from '../pages/equipos/equipos';
import { EditEquipoPage } from '../pages/edit-equipo/edit-equipo';
import { AddEquipoPage } from '../pages/add-equipo/add-equipo';

var FirebaseConfig = {
  apiKey: "AIzaSyDcjQu8mvn7IglBgFRO_Q8HKxgOm-kGcrE",
  authDomain: "ajedrez-825b6.firebaseapp.com",
  databaseURL: "https://ajedrez-825b6.firebaseio.com",
  projectId: "ajedrez-825b6",
  storageBucket: "ajedrez-825b6.appspot.com",
  messagingSenderId: "132712618727"
};
firebase.initializeApp(FirebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JugadorPage,
    JugadoresPage,
    AddJugadorPage,
    EditJugadorPage,
    LoginPage,
    EquipoPage,
    EquiposPage,
    EditEquipoPage,
    AddEquipoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JugadorPage,
    JugadoresPage,
    AddJugadorPage,
    EditJugadorPage,
    LoginPage,
    EquipoPage,
    EquiposPage,
    EditEquipoPage,
    AddEquipoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
