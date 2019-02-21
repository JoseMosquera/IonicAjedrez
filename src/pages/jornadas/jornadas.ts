import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddJornadaPage } from '../add-jornada/add-jornada';
import { HomePage } from '../home/home';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Jornada } from '../../models/jornada';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JornadaInfoPage } from '../jornada-info/jornada-info';

/**
 * Generated class for the JornadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas',
  templateUrl: 'jornadas.html',
})
export class JornadasPage {

  jornadas: Observable<Jornada[]>;
  jornadasList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase) {
    this.jornadasList=afdb.list("Jornada");
    this.jornadas=this.jornadasList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
     )
    );
    console.log(this.jornadas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasPage');
  }

  addJornada(){
    this.navCtrl.setRoot(AddJornadaPage);
  }

  volver(){
    this.navCtrl.setRoot(HomePage);
  }

  verJornada(jornada:Jornada){
    this.navCtrl.setRoot(JornadaInfoPage, {'jornada':jornada});
  }

}
