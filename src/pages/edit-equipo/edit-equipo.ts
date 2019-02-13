import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.equipo = this.navParams.get("equipo");
    console.log(this.equipo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEquipoPage');
  }

  volver(){
    this.navCtrl.setRoot(EquipoPage, {'equipo': this.equipo});
  }

  update(){
    console.log("Equipo antes de ser actualizado: "+this.equipo.nombre);
    this.afdb.list("/Equipos/").update(this.equipo.key, this.equipo);
    console.log("Equipo despues de ser actualizado: "+this.equipo.nombre);
    this.navCtrl.setRoot(EquiposPage);
  }

}
