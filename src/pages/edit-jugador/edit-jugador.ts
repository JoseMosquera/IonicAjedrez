import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { Jugador } from "../../interfaces/jugador";
import { JugadoresPage } from '../jugadores/jugadores';
import { JugadorPage } from '../jugador/jugador';

@IonicPage()
@Component({
  selector: 'page-edit-jugador',
  templateUrl: 'edit-jugador.html',
})
export class EditJugadorPage {

  jugador:Jugador;
  nombre:string;
  j:number;
  g:number;
  e:number;
  p:number;
  c:number;
  f:number;
  elo:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.jugador = this.navParams.get("jugador");
    console.log(this.jugador);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditJugadorPage');
  }

  volver(){
    this.navCtrl.setRoot(JugadorPage, {'jugador': this.jugador});
  }

  update(){
    console.log("Jugador antes de ser actualizado: "+this.jugador.elo);
    this.jugador.nombre=this.nombre;
    this.jugador.j = Number(this.j);
    this.jugador.g = Number(this.g);
    this.jugador.e = Number(this.e);
    this.jugador.p = Number(this.p);
    this.jugador.c = Number(this.c);
    this.jugador.f = Number(this.f);
    this.jugador.elo = Number(this.elo);
    this.afdb.list("/Jugadores/").update(this.jugador.key, this.jugador);
    console.log("Jugador despues de ser actualizado: "+this.jugador.elo);
    this.navCtrl.setRoot(JugadoresPage);
  }

}
