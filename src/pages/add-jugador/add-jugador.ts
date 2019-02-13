import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jugador } from "../../interfaces/jugador";
import { JugadoresPage } from '../jugadores/jugadores';

@IonicPage()
@Component({
  selector: 'page-add-jugador',
  templateUrl: 'add-jugador.html',
})
export class AddJugadorPage {

  
  jugador: Jugador = {
    nombre:'',
    j:0,
    g:0,
    e:0,
    p:0,
    c:0,
    f:0,
    elo:0,
    rol:''
  };
  nombre:string;
  j:number;
  g:number;
  e:number;
  p:number;
  c:number;
  f:number;
  elo:number;

  constructor(public navCtrl: NavController, private afdb: AngularFireDatabase) {
  }

  add(){
    this.jugador.nombre = this.nombre;
    this.jugador.j = 0;
    this.jugador.g = 0;
    this.jugador.e = 0;
    this.jugador.p = 0;
    this.jugador.c = 0;
    this.jugador.f = 0;
    this.jugador.elo = 0;
    this.jugador.rol = "user";
    this.afdb.list("/Jugadores/").push(this.jugador);
    this.navCtrl.setRoot(JugadoresPage);
  }

  volver(){
    this.navCtrl.setRoot(JugadoresPage);
  }
}
