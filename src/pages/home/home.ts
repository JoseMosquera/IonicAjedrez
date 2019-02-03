import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { JugadoresPage } from "../../pages/jugadores/jugadores";
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { EquiposPage } from '../equipos/equipos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, public alert: AlertController) {
  }

  irPaginaJugadores(){
    this.navCtrl.setRoot(JugadoresPage);
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  } 

  logout(){
    firebase.auth().signOut().then(data=>{
      console.log("Deslogueado.");
      this.navCtrl.setRoot(LoginPage);
      let alert = this.alert.create({
        title: 'Deslogueado!',
        subTitle: 'Has cerrado sesión perfectamente!',
        buttons: ['Aceptar']
      });
      alert.present();
    }).catch(data=>{
      console.log("Error.");
    });
  }

  irPaginaEquipos(){
    this.navCtrl.setRoot(EquiposPage);
  }
}
