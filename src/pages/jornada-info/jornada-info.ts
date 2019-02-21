import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jornada } from '../../interfaces/jornada';
import { JornadasPage } from '../jornadas/jornadas';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ConvocadosPage } from '../convocados/convocados';
import { Equipo } from '../../interfaces/equipo';
import { EquipoJugador } from '../../interfaces/equipoJugador';
import { JugadoresEquipoProvider } from '../../providers/jugadores-equipo/jugadores-equipo';
import { Observable } from 'rxjs';
import { EditJornadaPage } from '../edit-jornada/edit-jornada';

@IonicPage()
@Component({
  selector: 'page-jornada-info',
  templateUrl: 'jornada-info.html',
})
export class JornadaInfoPage {

  jornada:Jornada;
  equipoJugadores=[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb:AngularFireDatabase, 
     private jugEquip: JugadoresEquipoProvider,) {
    this.jornada=this.navParams.get("jornada");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadaInfoPage');
    let clave = this.jornada.key;
    console.log("Clave jornada jornada-info.ts: "+clave)
  }

  volver(){
    this.navCtrl.setRoot(JornadasPage);
  }

  editarJornada(jornada){
    this.navCtrl.setRoot(EditJornadaPage, {'jornada': jornada});
  }

  eliminarJornada(jornada){
    console.log("Eliminar jornada: ", jornada.nombre);
    let key = jornada.key;
    console.log(jornada);
    this.afdb.database.ref('/Jornada/'+key).remove();
    console.log("Jornada eliminado")
    this.navCtrl.setRoot(JornadasPage);
  }

  // verConvocados(jornada:Jornada){
  //   this.navCtrl.setRoot(ConvocadosPage, {'jornada':jornada});
  // }

  showjugadores(clave : string){
    this.jugEquip.obtenerJugadores(clave).then(exist=>{
      if (exist) {
        this.equipoJugadores = this.jugEquip.jugadores;
        console.log(this.equipoJugadores);
      } else {
        return null;
      }
    })

  }

  
  


  

}
