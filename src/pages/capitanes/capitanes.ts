import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadoresEquipoProvider } from '../../providers/jugadores-equipo/jugadores-equipo';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-capitanes',
  templateUrl: 'capitanes.html',
})
export class CapitanesPage {

  jugadores = [];

  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jugEquip: JugadoresEquipoProvider) {
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesPage');
    this.obtenerJugadores();
  }

  volver(){
    this.navCtrl.setRoot(HomePage, {'rol':this.rol});
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
