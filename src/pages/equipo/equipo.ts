import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { Equipo } from '../../models/equipo';
import { EditEquipoPage } from '../edit-equipo/edit-equipo';
import { EquiposPage } from '../equipos/equipos';
import { AddJuegadorEquipoPage } from '../add-juegador-equipo/add-juegador-equipo';
import { JugadoresEquipoProvider } from "../../providers/jugadores-equipo/jugadores-equipo";
import { Jugador } from '../../models/jugador';

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  equipo:Equipo;
  equipoJugadores = [];
  equiposJugadoresList: AngularFireList<any>;
  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase, public alert: AlertController,
              private jugEquip: JugadoresEquipoProvider, private toast: ToastController) {
    this.equipo=this.navParams.get("equipo");
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
    //vaciar el array equipoJugadores aqui
    this.equipoJugadores.length = 0;
    console.log("----------------vaciar array------------------")
    console.log(this.equipoJugadores);
    let clave = this.equipo.key;
    console.log("Clave equipo equipo.ts: "+clave);
    this.jugadores(clave);
  }

  editarEquipo(equipo: Equipo){
    this.navCtrl.setRoot(EditEquipoPage, {'equipo': equipo, 'rol': this.rol});
  }

  eliminarEquipo(equipo: Equipo){
    console.log("Eliminar equipo: ",equipo.nombre);
    let key = equipo.key;
    console.log(equipo);
    this.afdb.database.ref('/Equipos/'+key).remove();
    console.log("Equipo eliminado")
    this.navCtrl.setRoot(EquiposPage, {'rol':this.rol});
  }

  volver(){
    this.navCtrl.setRoot(EquiposPage, {'rol':this.rol});
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
    this.navCtrl.setRoot(AddJuegadorEquipoPage, {'equipo': equipo, 'equiposJugadores': equiposJugadores, 'rol':this.rol});
  }

  capitan(jugador: Jugador){
    console.log("entra en la funcion capitan");
    console.log(jugador);
    let capitanes = 0;
    for (let i = 0; i < this.equipoJugadores.length; i++) {
      console.log("entra en for de jugadores de la funcion");
      console.log(this.equipoJugadores[i]);
      console.log(this.equipoJugadores[i].rol);
      if(this.equipoJugadores[i].rol == 'capitan'){
        capitanes += 1;
      }
    }

    if (jugador.rol=='user') {
      console.log(capitanes)
      if(capitanes>0){
        this.toast.create({
          message: 'Solo puede haber un capitan por equipo.',
          duration: 2000,
          position: 'middle'
        }).present();
      } else if (capitanes<1) {
        console.log("capitan = user");
        jugador.rol='capitan';
        this.afdb.list("/Jugadores/").update(jugador.key, jugador);
        this.equipoJugadores.splice(0, this.equipoJugadores.length);
        this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo, 'rol':this.rol});
      }
    } else if (jugador.rol=='capitan'){
      console.log("capitan = capitan");
      jugador.rol='user';
      this.afdb.list("/Jugadores/").update(jugador.key, jugador);
      this.equipoJugadores.splice(0, this.equipoJugadores.length);
      this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo, 'rol':this.rol});
    }
  }

  expulsar(jugador: Jugador){
    let clave = this.equipo.key;
    let jug = jugador.key
    this.jugEquip.expulsarJugador(jugador, this.equipoJugadores)
      .then(exist => {
        console.log("Variable jugadoresEquipo desde equipo.ts: "+this.jugEquip.jugadores);
        if (exist) {
          console.log("Variable equipoJugadores en equipo.ts: ")
        } else {
          return null;
        }
      })
    this.navCtrl.setRoot(EquiposPage, {'rol':this.rol});
  }
}