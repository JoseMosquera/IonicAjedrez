import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Equipo } from "../../models/equipo";
import { EquipoPage } from '../equipo/equipo';
import { AddEquipoPage } from '../add-equipo/add-equipo';
import { HomePage } from '../home/home';
import { JugadoresEquipoProvider } from "../../providers/jugadores-equipo/jugadores-equipo";

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {

  equipos: Observable<Equipo[]>;
  equiposList: AngularFireList<any>;
  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase, private jugEquip: JugadoresEquipoProvider) {
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
    this.equiposList = afdb.list("/Equipos/");
    this.equipos =  this.equiposList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
     )
   );
   console.log(this.equipos);
  }

  addEquipo(){
    this.navCtrl.setRoot(AddEquipoPage, {'rol':this.rol});
  }

  irEquipo(equipo: Equipo){
    this.navCtrl.setRoot(EquipoPage, {'equipo': equipo, 'rol':this.rol});
  }

  volver(){
    this.navCtrl.setRoot(HomePage, {'rol':this.rol});
  }

}