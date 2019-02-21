import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Jugador } from '../../interfaces/jugador';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  usuario={
    nombre: '',
    email: "",
    password: "",
  }

  jugador : Jugador = {
    nombre:'',
    j:0,
    g:0,
    e:0,
    p:0,
    c:0,
    f:0,
    elo:0,
    rol:'',
    equipo:false,
    email:'',
    titular:false,
    equipo:false,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb: AngularFireDatabase, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(usuario){
    if(this.usuario.nombre === null || this.usuario.email === null || this.usuario.password === null){
      let alert = this.alert.create({
        title: 'Error!',
        subTitle: 'Rellena todos los campos',
        buttons: ['Aceptar']
      });
      alert.present();
    }else{
      firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password).then(data=> {
        this.jugador.nombre = this.usuario.nombre;
        this.jugador.j = 0;
        this.jugador.g = 0;
        this.jugador.e = 0;
        this.jugador.p = 0;
        this.jugador.c = 0;
        this.jugador.f = 0;
        this.jugador.elo = 0;
        this.jugador.rol = "user";
        this.jugador.email = this.usuario.email;
        this.afdb.list("/Jugadores/").push(this.jugador);
        let alert = this.alert.create({
          title: 'Correcto!',
          subTitle: 'Te has registrado correctamente!',
          buttons: ['Aceptar']
        });
        alert.present();
      });

    }    
  }

  volver(){
    this.navCtrl.setRoot(LoginPage);
  }

}
