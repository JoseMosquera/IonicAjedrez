import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Equipo } from '../../models/equipo';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  /*
  equipos = [];
  ref = firebase.database().ref('equipos/');
  inputText: string = '';
  */

  equipos: Observable<Equipo[]>;
  equiposList: AngularFireList<any>;
  myInput

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb:AngularFireDatabase, public alert: AlertController) {
    this.equiposList=fdb.list("/Equipo/");
    this.equipos= this.equiposList.snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>({key: c.payload.key, ...c.payload.val()}))
        )
    );
    console.log(this.equipos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

  addEquipo(){
    this.fdb.list("/Equipo/").push(this.myInput).then(data=>{
      console.log(this.myInput + " creado.");
      let alert = this.alert.create({
        title: 'Correcto!',
        subTitle: 'Tu equipo ha sido creado correctamente!',
        buttons: ['Aceptar']
      });
      alert.present();
      this.navCtrl.setRoot(EquipoPage);
    }).catch(data=>{
      let alert = this.alert.create({
        title: 'Error!',
        subTitle: 'Ha habido un error al crear el equipo!',
        buttons: ['Aceptar']
      });
      alert.present();
    });
  }

  volver(){
    this.navCtrl.setRoot(HomePage);
  }


}
