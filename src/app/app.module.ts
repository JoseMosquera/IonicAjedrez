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

var FirebaseConfig = {
  apiKey: "AIzaSyD0pjhIC2kswDJuETZWUGx6_MWRF0UTFqI",
  authDomain: "idk3-a24c5.firebaseapp.com",
  databaseURL: "https://idk3-a24c5.firebaseio.com",
  projectId: "idk3-a24c5",
  storageBucket: "idk3-a24c5.appspot.com",
  messagingSenderId: "294146405285"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JugadorPage,
    JugadoresPage,
    AddJugadorPage,
    EditJugadorPage
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
    EditJugadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
