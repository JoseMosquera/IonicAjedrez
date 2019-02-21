import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadoresEquipoProvider } from '../../providers/jugadores-equipo/jugadores-equipo';

@IonicPage()
@Component({
  selector: 'page-capitanes',
  templateUrl: 'capitanes.html',
})
export class CapitanesPage {

  jugadores = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private jugEquip: JugadoresEquipoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesPage');
    this.obtenerJugadores();
  }

  obtenerJugadores(){
    this.jugEquip.listarCapitanes()
      .then(exist => {
        console.log("Variable jugadoresEquipo desde equipo.ts: "+this.jugEquip.capitanes);
        if (exist) {
          this.jugadores = this.jugEquip.capitanes;
          console.log("Variable equipoJugadores en equipo.ts: ")
          console.log(this.jugadores);
        } else {
          return null;
        }
      })
  }
}
