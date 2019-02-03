import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { Equipo } from '../../models/equipo';
import { EditEquipoPage } from '../edit-equipo/edit-equipo';
import { EquiposPage } from '../equipos/equipos';

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  equipo:Equipo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb:AngularFireDatabase, public alert: AlertController) {
    this.equipo=this.navParams.get("equipo");
    console.log(this.equipo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

  editarEquipo(equipo){
    this.navCtrl.setRoot(EditEquipoPage, {'equipo': equipo});
  }

  eliminarEquipo(equipo){
      console.log("Eliminar equipo: ",equipo.nombre);
      let key = equipo.key;
      console.log(equipo);
      this.fdb.database.ref('/Equipos/'+key).remove();
      console.log("Equipo eliminado")
      this.navCtrl.setRoot(EquiposPage);
    }

  volver(){
    this.navCtrl.setRoot(EquiposPage);
  }


}
