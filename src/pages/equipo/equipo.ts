import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo';
import { EditEquipoPage } from '../edit-equipo/edit-equipo';
import { EquiposPage } from '../equipos/equipos';
import { AddJuegadorEquipoPage } from '../add-juegador-equipo/add-juegador-equipo';
import { EquipoJugador } from '../../interfaces/equipoJugador';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  equipo:Equipo;
  equipoJugadores: Observable<any>;
  equiposJugadoresList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase, public alert: AlertController) {
    this.equipo=this.navParams.get("equipo");

    this.equiposJugadoresList=this.afdb.list('/EquiposJugadores/', ref => ref.child('equipo').equalTo(this.equipo.key));

    this.equipoJugadores = this.equiposJugadoresList.snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
    console.log(this.equipo);
    console.log(this.equipoJugadores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
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

  addJugadores(equipo: Equipo){
    var equiposJugadores = this.afdb.list('/EquiposJugadores/', ref => ref.orderByChild('equipo').equalTo(this.equipo.key));
    this.navCtrl.setRoot(AddJuegadorEquipoPage, {'equipo': equipo, 'equiposJugadores': equiposJugadores});
  }
}
