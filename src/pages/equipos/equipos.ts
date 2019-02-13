import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Equipo } from "../../interfaces/equipo";
import { EquipoPage } from '../equipo/equipo';
import { AddEquipoPage } from '../add-equipo/add-equipo';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {

  equipos: Observable<Equipo[]>;
  equiposList: AngularFireList<any>;

  constructor(public navCtrl: NavController, private afdb: AngularFireDatabase) {
    this.equiposList = afdb.list("/Equipos/");
    this.equipos =  this.equiposList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
     )
   );
   console.log(this.equipos);
  }

  addEquipo(){
    this.navCtrl.setRoot(AddEquipoPage);
  }

  irEquipo(equipo: Equipo){
    this.navCtrl.setRoot(EquipoPage, {'equipo': equipo});
  }

  volver(){
    this.navCtrl.setRoot(HomePage);
  }

}