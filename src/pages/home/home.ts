import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { JugadoresPage } from "../../pages/jugadores/jugadores";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  irPaginaJugadores(){
    this.navCtrl.setRoot(JugadoresPage);
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  } 
}
