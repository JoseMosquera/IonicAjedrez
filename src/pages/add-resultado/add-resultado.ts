import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JornadaJugador } from '../../models/jornadaJugador';
import { AngularFireDatabase } from 'angularfire2/database';
import { JornadaInfoPage } from '../jornada-info/jornada-info';
import { Jornada } from '../../models/jornada';
import { JornadasPage } from '../jornadas/jornadas';

/**
 * Generated class for the AddResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-resultado',
  templateUrl: 'add-resultado.html',
})
export class AddResultadoPage {

  rol:string;
  participacion:JornadaJugador;
  jornada:Jornada;

  resultado:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.rol=this.navParams.get("rol");
    this.participacion=this.navParams.get("jugador");
    this.jornada=this.navParams.get("jornada");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddResultadoPage');
  }

  update(){
    this.participacion.resultado=this.resultado;
    this.afdb.list("/JornadasJugadores/").update(this.participacion.key, this.participacion);
    this.navCtrl.setRoot(JornadasPage, {'rol':this.rol});
  }
  
  volver(){
    this.navCtrl.setRoot(JornadaInfoPage, {'jornada':this.jornada, 'rol':this.rol});
  }

}
