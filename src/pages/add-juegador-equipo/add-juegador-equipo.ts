import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { EquipoPage } from '../equipo/equipo';
import { Jugador } from '../../interfaces/jugador';
import { EquipoJugador } from '../../interfaces/equipoJugador';
import { JugadoresEquipoProvider } from "../../providers/jugadores-equipo/jugadores-equipo";
import { EquiposPage } from '../equipos/equipos';

@IonicPage()
@Component({
  selector: 'page-add-juegador-equipo',
  templateUrl: 'add-juegador-equipo.html',
})
export class AddJuegadorEquipoPage {

  equipo: Equipo;
  jugadores: Array<any> = [];
  jugadoresList: AngularFireList<any>;
  equipoJugador: EquipoJugador={

    equipo:'',
    jugador:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase, private jugEquip: JugadoresEquipoProvider) {
    this.equipo=this.navParams.get("equipo");
    console.log(this.equipo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJuegadorEquipoPage-------------------------');
    let categoria = this.equipo.categoria;
    console.log(categoria);
    this.obtenerJugadores(categoria);
  }

  volver(){
    this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo});
  }

  obtenerJugadores(categoria: string){
    this.jugEquip.listarJugadores(categoria)
      .then(exist => {
        console.log("Variable jugadoresEquipo desde equipo.ts: "+this.jugEquip.jugadoresListEquipo);
        if (exist) {
          this.jugadores = this.jugEquip.jugadoresListEquipo;
          console.log("Variable equipoJugadores en equipo.ts: ")
          console.log(this.jugadores);
        } else {
          return null;
        }
      })
  }

  add(jugador:Jugador){
    console.log("entra");
    console.log(this.equipo.key);
    console.log(jugador.key);
    this.equipoJugador.equipo = this.equipo.key;
    this.equipoJugador.jugador = jugador.key;
    console.log(this.equipoJugador);
    this.afdb.list("/EquiposJugadores/").push(this.equipoJugador);
    let jugador1: Jugador = jugador;
    jugador1.equipo = true;
    this.afdb.list("/Jugadores/").update(jugador1.key, jugador1);
    this.navCtrl.setRoot(EquiposPage);
  }
}