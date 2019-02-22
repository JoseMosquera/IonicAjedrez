import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Jugador } from "../../models/jugador";
import { JugadoresPage } from '../jugadores/jugadores';

@IonicPage()
@Component({
  selector: 'page-add-jugador',
  templateUrl: 'add-jugador.html',
})
export class AddJugadorPage {

  
  jugador : Jugador = {
    nombre:'',
    j:0,
    g:0,
    e:0,
    p:0,
    c:0,
    f:0,
    elo:0,
    rol:'',
    equipo:false,
    email:'',
    titular:'f',
  };
  nombre:string;
  j:number;
  g:number;
  e:number;
  p:number;
  c:number;
  f:number;
  elo:number;

  rol:string;

  // equipos: Observable<Equipo[]>;
  // equiposList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJugadorPage');
    // this.equiposList = this.afdb.list("/Equipos/");
    // this.equipos =  this.equiposList.snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //  )
    // );
    // console.log(this.equipos);
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
    this.jugador.titular = 'f';
    
    console.log(this.jugador);
    this.afdb.list("/Jugadores/").push(this.jugador);
    this.navCtrl.setRoot(JugadoresPage, {'rol':this.rol});
  }

  volver(){
    this.navCtrl.setRoot(JugadoresPage, {'rol':this.rol});
  }
}
