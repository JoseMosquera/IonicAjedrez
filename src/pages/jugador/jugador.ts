import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { JugadoresPage } from '../jugadores/jugadores';
import { EditJugadorPage } from '../edit-jugador/edit-jugador';
import { Jugador } from '../../interfaces/jugador';

/**
 * Generated class for the JugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugador',
  templateUrl: 'jugador.html',
})
export class JugadorPage {

  jugador:Jugador;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.jugador = this.navParams.get("jugador");
    console.log(this.jugador);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadorPage');
  }

  editarJugador(jugador){
    this.navCtrl.setRoot(EditJugadorPage, {'jugador': jugador});
  }

  eliminarJugador(jugador){
      console.log("Eliminar jugador: ",jugador.nombre);
      let key = jugador.key;
      console.log(jugador);
      this.afdb.database.ref('/Jugadores/'+key).remove();
      console.log("Jugador eliminado")
      this.navCtrl.setRoot(JugadoresPage);
    }

    volver(){
      this.navCtrl.setRoot(JugadoresPage);
    }
  }
