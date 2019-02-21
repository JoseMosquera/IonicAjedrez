import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jornada } from '../../interfaces/jornada';
import { JornadasPage } from '../jornadas/jornadas';
import { AngularFireDatabase } from 'angularfire2/database';
import { ConvocadosPage } from '../convocados/convocados';
import { Equipo } from '../../interfaces/equipo';
import { EquipoJugador } from '../../interfaces/equipoJugador';

@IonicPage()
@Component({
  selector: 'page-jornada-info',
  templateUrl: 'jornada-info.html',
})
export class JornadaInfoPage {

  jornada:Jornada;
  jugadores=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase) {
    this.jornada=this.navParams.get("jornada");
    //this.equipo=this.afdb.list("/EquiposJugadores/", ref=> ref.orderByChild('equipo').equalTo(this.jornada.equipo));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadaInfoPage');
    let clave = this.jornada.key;
    console.log("Clave jornada jornada-info.ts: "+clave)
  }

  volver(){
    this.navCtrl.setRoot(JornadasPage);
  }

  verConvocados(jornada:Jornada){
    this.navCtrl.setRoot(ConvocadosPage, {'jornada':jornada});
  }

  
  


  

}
