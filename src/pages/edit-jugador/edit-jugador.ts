import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { Jugador } from "../../models/jugador";
import { JugadoresPage } from '../jugadores/jugadores';
import { JugadorPage } from '../jugador/jugador';

@IonicPage()
@Component({
  selector: 'page-edit-jugador',
  templateUrl: 'edit-jugador.html',
})
export class EditJugadorPage {

  jugador:Jugador;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.jugador = this.navParams.get("jugador");
    console.log(this.jugador);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditJugadorPage');
  }

  volver(){
    this.navCtrl.setRoot(JugadorPage, {'jugador': this.jugador});
  }

  update(){
    console.log("Jugador antes de ser actualizado: "+this.jugador.nombre);
    this.afdb.list("/Jugadores/").update(this.jugador.key, this.jugador);
    console.log("Jugador despues de ser actualizado: "+this.jugador.nombre);
    this.navCtrl.setRoot(JugadoresPage);
  }

}
