import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jornada } from '../../interfaces/jornada';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { JornadasPage } from '../jornadas/jornadas';
import { JornadaInfoPage } from '../jornada-info/jornada-info';
import { Observable } from 'rxjs';
import { Equipo } from '../../interfaces/equipo';
import { map } from 'rxjs/operators';

/**
 * Generated class for the EditJornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-jornada',
  templateUrl: 'edit-jornada.html',
})
export class EditJornadaPage {

  jornada:Jornada;
  nombre:string;
  fecha:string;
  equipo:string;
  casa:string;
  equipos: Observable<Equipo[]>;
  equiposList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.jornada = this.navParams.get("jornada");
    console.log(this.jornada);
    this.equiposList = afdb.list('/Equipos/', ref => ref.orderByChild('nombre'));
    this.equipos =  this.equiposList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse()
     )
    );
   console.log(this.equipos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditJornadaPage');
  }

  update(){
    this.jornada.nombre=this.nombre;
    this.jornada.casa = this.casa;
    this.jornada.equipo = this.equipo;
    this.jornada.fecha = this.fecha;
    this.afdb.list("/Jornada/").update(this.jornada.key, this.jornada);
    console.log("Jornada despues de ser actualizada: "+this.jornada.nombre);
    this.navCtrl.setRoot(JornadasPage);
  }

  volver(jornada:Jornada){
    this.navCtrl.setRoot(JornadaInfoPage, {'jornada':jornada});
  }

}
