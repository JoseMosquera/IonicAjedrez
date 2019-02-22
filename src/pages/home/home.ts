import { Component } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { JugadoresPage } from "../../pages/jugadores/jugadores";
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { EquiposPage } from '../equipos/equipos';
import { JornadasPage } from '../jornadas/jornadas';
import { CapitanesPage } from '../capitanes/capitanes';
import { JugadoresEquipoProvider } from "../../providers/jugadores-equipo/jugadores-equipo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rol:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public alert: AlertController, private jugEquip: JugadoresEquipoProvider) {
    this.rol=this.navParams.get("rol");
    console.log(this.rol);
  }

  ionViewDidLoad() {
    var user = firebase.auth().currentUser;
    console.log("user: ");
    console.log(user);
    let email = user.email;
    console.log(email);
    this.jugEquip.comprobarRol(email)
    .then(exist => {
      if (exist) {
        this.rol = this.jugEquip.rol;
        console.log("Variable rol en equipo.ts: ")
        console.log(this.rol);
      } else {
        return null;
      }
    })
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
    this.navCtrl.setRoot(EquiposPage, {'rol':this.rol});
  }

  irPaginaJornadas(){
    this.navCtrl.setRoot(JornadasPage, {'rol':this.rol});
  }

  irPaginaJugadores(){
    this.navCtrl.setRoot(JugadoresPage, {'rol':this.rol});
  }

  irPaginaCapitanes(){
    this.navCtrl.setRoot(CapitanesPage, {'rol':this.rol});
  }
}
