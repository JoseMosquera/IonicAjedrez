import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jornada } from '../../interfaces/jornada';
import { AngularFireDatabase } from 'angularfire2/database';
import { JornadasPage } from '../jornadas/jornadas';

@IonicPage()
@Component({
  selector: 'page-add-jornada',
  templateUrl: 'add-jornada.html',
})
export class AddJornadaPage {

  jornada:Jornada={
    nombre:'',
    partido:[],
    casa: true,
    fecha:'',
  };
  
  nombre:string;
  casa:boolean;
  fecha:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private afdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJornadaPage');
  }

  addJornada(){
    console.log("entra")
    this.jornada.nombre=this.nombre;
    console.log(this.jornada.nombre);
    this.jornada.partido=[];
    console.log(this.jornada.partido);
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
