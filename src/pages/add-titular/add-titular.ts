import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { EquipoPage } from '../equipo/equipo';
import { Jugador } from '../../models/jugador';
import { JugadoresEquipoProvider } from "../../providers/jugadores-equipo/jugadores-equipo";
import { EquiposPage } from '../equipos/equipos';
import { Jornada } from '../../models/jornada';
import { JornadaJugador } from '../../models/jornadaJugador';
import { JornadasPage } from '../jornadas/jornadas';

@IonicPage()
@Component({
  selector: 'page-add-titular',
  templateUrl: 'add-titular.html',
})
export class AddTitularPage {

  equipo: string;
  jornada: Jornada;
  titulares: Array<any> = [];
  jugadoresList: AngularFireList<any>;
  jornadaJugador: JornadaJugador={
    jornada:'',
    jugador:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase, private jugEquip: JugadoresEquipoProvider) {
    this.equipo=this.navParams.get("equipo");
    console.log(this.equipo);
    this.jornada=this.navParams.get("jornada");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJuegadorEquipoPage-------------------------');
    let clave = this.equipo;
    console.log(clave);
    this.obtenerTitulares(clave);
  }

  volver(){
    this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo});
  }

  obtenerTitulares(clave: string){
    this.jugEquip.titulares(clave)
      .then(exist => {
        console.log("Variable jugadoresEquipo desde equipo.ts: "+this.jugEquip.jugadoresEquipos);
        if (exist) {
          this.titulares = this.jugEquip.jugadoresEquipos;
          console.log("Variable titulares en equipo.ts: ")
          console.log(this.titulares);
        } else {
          return null;
        }
      })
  }

  add(jugador:Jugador){
    console.log("entra");
    console.log(this.jornada.key);
    console.log(jugador.key);
    this.jornadaJugador.jornada = this.jornada.key;
    this.jornadaJugador.jugador = jugador.key;
    console.log(this.jornadaJugador);
    this.afdb.list("/JornadasJugadores/").push(this.jornadaJugador);
    let jugador1: Jugador = jugador;
    jugador1.titular = 't';
    this.afdb.list("/Jugadores/").update(jugador1.key, jugador1);
    this.navCtrl.setRoot(JornadasPage);
  }

  delete(jugador:Jugador){
    console.log("entra");
    console.log(this.jornada.key);
    console.log(jugador.key);
    this.jornadaJugador.jornada = this.jornada.key;
    this.jornadaJugador.jugador = jugador.key;
    console.log(this.jornadaJugador);
    this.afdb.list("/JornadasJugadores/").push(this.jornadaJugador);
    //buscar una
    let jugador1: Jugador = jugador;
    jugador1.titular = 'f';
    this.afdb.list("/Jugadores/").update(jugador1.key, jugador1);
    this.navCtrl.setRoot(JornadasPage);
  }
}