import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jugador } from "../../interfaces/jugador";
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

  constructor(public navCtrl: NavController, private afdb: AngularFireDatabase) {
    this.jugadoresList = afdb.list('/Jugadores/', ref => ref.orderByChild('elo'));
    this.jugadores =  this.jugadoresList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse()
     )
    );
   console.log(this.jugadores);
  }

  addJugador(){
    this.navCtrl.setRoot(AddJugadorPage);
  }

  irJugador(jugador: Jugador){
    this.navCtrl.setRoot(JugadorPage, {'jugador': jugador});
  }

  volver(){
    this.navCtrl.setRoot(HomePage);
  }

  

}
