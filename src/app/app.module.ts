import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Angular
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import * as firebase from 'firebase';

//Paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//Jugadores
import { JugadorPage } from '../pages/jugador/jugador';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { AddJugadorPage } from '../pages/add-jugador/add-jugador';
import { EditJugadorPage } from '../pages/edit-jugador/edit-jugador';
import { CapitanesPage } from "../pages/capitanes/capitanes";

//Equipos
import { EquiposPage } from '../pages/equipos/equipos';
import { EditEquipoPage } from '../pages/edit-equipo/edit-equipo';
import { AddEquipoPage } from '../pages/add-equipo/add-equipo';
import { AddJuegadorEquipoPage } from '../pages/add-juegador-equipo/add-juegador-equipo';
import { EquipoPage } from '../pages/equipo/equipo';
import { JugadoresEquipoProvider } from '../providers/jugadores-equipo/jugadores-equipo';

//Jornadas
import {JornadasPage} from '../pages/jornadas/jornadas';
import {AddJornadaPage} from '../pages/add-jornada/add-jornada';
import {JornadaInfoPage} from '../pages/jornada-info/jornada-info';
import {EditJornadaPage} from '../pages/edit-jornada/edit-jornada';
import { AddTitularPage } from "../pages/add-titular/add-titular";
import { AddResultadoPage } from "../pages/add-resultado/add-resultado";


var FirebaseConfig = {
  apiKey: "AIzaSyBOgG67GAPCRSOke2r_24VQ-SPaF6wy6ko",
  authDomain: "ionic-d2a40.firebaseapp.com",
  databaseURL: "https://ionic-d2a40.firebaseio.com",
  projectId: "ionic-d2a40",
  storageBucket: "ionic-d2a40.appspot.com",
  messagingSenderId: "328071149034"
};

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
    AddEquipoPage,
    AddJuegadorEquipoPage,
    JornadasPage,
    AddJornadaPage,
    CapitanesPage,
    RegisterPage,
    JornadaInfoPage,
    EditJornadaPage,
    AddTitularPage,
    AddResultadoPage
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
    AddEquipoPage,
    AddJuegadorEquipoPage,
    JornadasPage,
    AddJornadaPage,
    JornadaInfoPage,
    CapitanesPage,
    RegisterPage,
    EditJornadaPage,
    AddTitularPage,
    AddResultadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JugadoresEquipoProvider,
  ]
})
export class AppModule {}
