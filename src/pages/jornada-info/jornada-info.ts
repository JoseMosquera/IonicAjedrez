import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jornada } from '../../models/jornada';
import { JornadasPage } from '../jornadas/jornadas';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { JugadoresEquipoProvider } from '../../providers/jugadores-equipo/jugadores-equipo';
import { EditJornadaPage } from '../edit-jornada/edit-jornada';
import { AddTitularPage } from "../add-titular/add-titular";
import { Jugador } from '../../models/jugador';
import { AddResultadoPage } from '../add-resultado/add-resultado';

@IonicPage()
@Component({
  selector: 'page-jornada-info',
  templateUrl: 'jornada-info.html',
})
export class JornadaInfoPage {

  jornada:Jornada;
  titulares: Array<any> =[];

  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase, 
     private jugEquip: JugadoresEquipoProvider,) {
    this.jornada=this.navParams.get("jornada");
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadaInfoPage');
    let clave = this.jornada.key;
    console.log("Clave jornada jornada-info.ts: "+clave)
    this.titularesObtener(clave);
  }

  volver(){
    this.navCtrl.setRoot(JornadasPage, {'rol':this.rol});
  }

  editarJornada(jornada){
    this.navCtrl.setRoot(EditJornadaPage, {'jornada': jornada, 'rol':this.rol});
  }

  eliminarJornada(jornada){
    console.log("Eliminar jornada: ", jornada.nombre);
    let key = jornada.key;
    console.log(jornada);
    this.afdb.database.ref('/Jornada/'+key).remove();
    console.log("Jornada eliminado")
    this.navCtrl.setRoot(JornadasPage, {'rol':this.rol});
  }

  titularesObtener(clave: string){
    this.jugEquip.titularesObt(clave)
      .then(exist => {
        console.log("Variable jugadoresEquipo desde equipo.ts: "+this.jugEquip.jugadoresEquipos);
        if (exist) {
          this.titulares = this.jugEquip.jugadoresEquipos;
          console.log("Variable titulares en equipo.ts: ")
          console.log(this.titulares);
        } else {
          return null;
        }
      })
  }

  obtenerTitulares(equipo: string){
    this.navCtrl.setRoot(AddTitularPage, {'equipo': equipo, 'jornada': this.jornada, 'rol':this.rol});
  }

  addResultado(jugador:Jugador){
    this.navCtrl.setRoot(AddResultadoPage, {'jugador':jugador, 'rol':this.rol, 'jornada':this.jornada});

  }
}
