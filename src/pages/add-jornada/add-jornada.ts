import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jornada } from '../../interfaces/jornada';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { JornadasPage } from '../jornadas/jornadas';
import { Equipo } from '../../interfaces/equipo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-add-jornada',
  templateUrl: 'add-jornada.html',
})
export class AddJornadaPage {

  jornada:Jornada={
    nombre:'',
    equipo:'',
    casa:'',
    fecha:'',
  };
  
  nombre:string;
  casa:string;
  fecha:string;
  equip:string;
  equipos: Observable<Equipo[]>;
  equiposList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private afdb: AngularFireDatabase) {
    this.equiposList = afdb.list('/Equipos/', ref => ref.orderByChild('convocado').equalTo(false));
    this.equipos =  this.equiposList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse()
     )
    );
   console.log(this.equipos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJornadaPage');
  }

  addJornada(){
    console.log("entra")
    this.jornada.nombre=this.nombre;
    console.log(this.jornada.nombre);
    this.jornada.equipo=this.equip;
    console.log(this.jornada.equipo);
    this.jornada.casa=this.casa;
    console.log(this.jornada.casa);
    this.jornada.fecha=this.fecha;
    console.log(this.jornada.fecha);
    this.afdb.list("/Jornada/").push(this.jornada);
    console.log(this.jornada);
    this.navCtrl.setRoot(JornadasPage);
  }

  volver(){
    this.navCtrl.setRoot(JornadasPage);
  }

}
