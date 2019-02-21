import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
// import { Equipo } from '../../interfaces/equipo';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { JornadaInfoPage } from '../jornada-info/jornada-info';
import { Jornada } from '../../interfaces/jornada';


@IonicPage()
@Component({
  selector: 'page-convocados',
  templateUrl: 'convocados.html',
})
export class ConvocadosPage {

  // equipos: Observable<Equipo[]>;
  // equiposList: AngularFireList<any>;
  jornada:Jornada;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
  //   this.equiposList = afdb.list("/Equipos/");
  //   this.equipos =  this.equiposList.snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  //    )
  //  );
  //  console.log(this.equipos);
      this.jornada=this.navParams.get("jornada");
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvocadosPage');
  }

  volver(jornada:Jornada){
    this.navCtrl.setRoot(JornadaInfoPage, {'jornada':jornada});
  }

}
