import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo';
import { EditEquipoPage } from '../edit-equipo/edit-equipo';
import { EquiposPage } from '../equipos/equipos';
import { AddJuegadorEquipoPage } from '../add-juegador-equipo/add-juegador-equipo';
import { JugadoresEquipoProvider } from "../../providers/jugadores-equipo/jugadores-equipo";
import { Jugador } from '../../interfaces/jugador';

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  equipo:Equipo;
  equipoJugadores = [];
  equiposJugadoresList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase, public alert: AlertController,
              private jugEquip: JugadoresEquipoProvider) {
    this.equipo=this.navParams.get("equipo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
    let clave = this.equipo.key;
    console.log("Clave equipo equipo.ts: "+clave)
    this.jugadores(clave);
  }

  editarEquipo(equipo: Equipo){
    this.navCtrl.setRoot(EditEquipoPage, {'equipo': equipo});
  }

  eliminarEquipo(equipo: Equipo){
    console.log("Eliminar equipo: ",equipo.nombre);
    let key = equipo.key;
    console.log(equipo);
    this.afdb.database.ref('/Equipos/'+key).remove();
    console.log("Equipo eliminado")
    this.navCtrl.setRoot(EquiposPage);
  }

  volver(){
    this.navCtrl.setRoot(EquiposPage);
  }

  jugadores(clave: string){
    this.jugEquip.obtenerJugadores(clave)
      .then(exist => {
        console.log("Variable jugadoresEquipo desde equipo.ts: "+this.jugEquip.jugadores);
        if (exist) {
          this.equipoJugadores = this.jugEquip.jugadores;
          console.log("Variable equipoJugadores en equipo.ts: ")
          console.log(this.equipoJugadores);
        } else {
          return null;
        }
      })
  }

  addJugadores(equipo: Equipo){
    var equiposJugadores = this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('equipo').equalTo(this.equipo.key));
    this.equipoJugadores.splice(0, this.equipoJugadores.length);
    this.navCtrl.setRoot(AddJuegadorEquipoPage, {'equipo': equipo, 'equiposJugadores': equiposJugadores});
  }

  capitan(jugador: Jugador){
    console.log("entra en la funcion capitan");
    console.log(jugador);
    if (jugador.rol=='user') {
      console.log("capitan = user");
      jugador.rol='capitan';
      this.afdb.list("/Jugadores/").update(jugador.key, jugador);
      this.equipoJugadores.splice(0, this.equipoJugadores.length);
      this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo});
    } else if (jugador.rol=='capitan'){
    console.log("capitan = capitan");
      jugador.rol='user';
      this.afdb.list("/Jugadores/").update(jugador.key, jugador);
      this.equipoJugadores.splice(0, this.equipoJugadores.length);
      this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo});
    }
  }
}