import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jugador } from "../../models/jugador";
import { JugadorPage } from '../jugador/jugador';
import { AddJugadorPage } from '../add-jugador/add-jugador';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  jugadores: Observable<Jugador[]>;
  jugadoresList: AngularFireList<any>;

  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.jugadoresList = afdb.list('/Jugadores/', ref => ref.orderByChild('elo'));
    this.jugadores =  this.jugadoresList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse()
     )
    );
   console.log(this.jugadores);
   this.rol=this.navParams.get("rol");
   console.log(this.rol);
  }

  addJugador(){
    this.navCtrl.setRoot(AddJugadorPage, {'rol':this.rol});
  }

  irJugador(jugador: Jugador){
    this.navCtrl.setRoot(JugadorPage, {'jugador': jugador, 'rol':this.rol});
  }

  volver(){
    this.navCtrl.setRoot(HomePage, {'rol':this.rol});
  }

  

}
