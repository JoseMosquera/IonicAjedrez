import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../models/equipo';
import { AngularFireDatabase } from 'angularfire2/database';
import { EquiposPage } from '../equipos/equipos';

/**
 * Generated class for the AddEquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-equipo',
  templateUrl: 'add-equipo.html',
})
export class AddEquipoPage {

  equipo: Equipo = {
    nombre: '',
    categoria: '',
  }
  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEquipoPage');
  }

  add(){
    this.afdb.list("/Equipos/").push(this.equipo);
    this.navCtrl.setRoot(EquiposPage, {'rol':this.rol});
  }

  volver(){
    this.navCtrl.setRoot(EquiposPage, {'rol':this.rol});
  }

}
