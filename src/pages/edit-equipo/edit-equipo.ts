import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../models/equipo';
import { AngularFireDatabase } from 'angularfire2/database';
import { EquipoPage } from '../equipo/equipo';
import { EquiposPage } from '../equipos/equipos';

@IonicPage()
@Component({
  selector: 'page-edit-equipo',
  templateUrl: 'edit-equipo.html',
})
export class EditEquipoPage {

  equipo:Equipo;

  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.equipo = this.navParams.get("equipo");
    console.log(this.equipo);
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEquipoPage');
  }

  volver(){
    this.navCtrl.setRoot(EquipoPage, {'equipo': this.equipo, 'rol':this.rol});
  }

  update(){
    console.log("Equipo antes de ser actualizado: "+this.equipo.nombre);
    this.afdb.list("/Equipos/").update(this.equipo.key, this.equipo);
    console.log("Equipo despues de ser actualizado: "+this.equipo.nombre);
    this.navCtrl.setRoot(EquiposPage, {'rol':this.rol});
  }

}
