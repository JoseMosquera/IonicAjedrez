import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jugador } from "../../models/jugador";
import { JugadoresPage } from '../jugadores/jugadores';

@IonicPage()
@Component({
  selector: 'page-add-jugador',
  templateUrl: 'add-jugador.html',
})
export class AddJugadorPage {

  jugador: Jugador = {
    nombre: ''
  };

  constructor(public navCtrl: NavController, private afdb: AngularFireDatabase) {
  }

  add(){
    this.afdb.list("/Jugadores/").push(this.jugador);
    this.navCtrl.setRoot(JugadoresPage);
  }

  volver(){
    this.navCtrl.setRoot(JugadoresPage);
  }
}
