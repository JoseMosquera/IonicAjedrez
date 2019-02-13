import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../interfaces/equipo';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { EquipoPage } from '../equipo/equipo';
import { Jugador } from '../../interfaces/jugador';
import { EquipoJugador } from '../../interfaces/equipoJugador';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-add-juegador-equipo',
  templateUrl: 'add-juegador-equipo.html',
})
export class AddJuegadorEquipoPage {

  equipo: Equipo;
  jugadores: Observable<Jugador[]>;
  jugadoresList: AngularFireList<any>;
  equipoJugador: EquipoJugador={
    equipo:'',
    jugador:''
  };
  jugador:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase) {
    this.equipo=this.navParams.get("equipo");
    console.log(this.equipo);


    if (this.equipo.categoria=="A") {
      this.jugadoresList = this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt('1500'));
    } else if (this.equipo.categoria=="B"){
      this.jugadoresList = this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt('1250').endAt('1499'));
    } else if (this.equipo.categoria=="C"){
      this.jugadoresList = this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt('1000').endAt('1249'));
    } else if (this.equipo.categoria=="D"){
      this.jugadoresList = this.afdb.list('/Jugadores/', ref => ref.orderByChild('elo').startAt('0750').endAt('0999'));
    }

    this.jugadores = this.jugadoresList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJuegadorEquipoPage');
  }

  volver(){
    this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo});
  }

  add(jugador:Jugador){
    console.log("entra");
    console.log(this.equipo.key);
    console.log(jugador.key);
    this.equipoJugador.equipo = this.equipo.key;
    this.equipoJugador.jugador = jugador.key;
    console.log(this.equipoJugador);
    this.afdb.list("/EquiposJugadores/").push(this.equipoJugador);
    var equipoJugadores = this.afdb.list("/EquiposJugadores/");
    this.navCtrl.setRoot(EquipoPage, {'equipo':this.equipo, 'equipoJugadores':equipoJugadores});
  }
}