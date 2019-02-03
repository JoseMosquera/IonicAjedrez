import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder} from '@angular/forms';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { AuthService } from '@ionic/cloud-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario={
    email: "",
    password: "",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, public alert: AlertController) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(usuario){
    firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password).then(data=> {
      let alert = this.alert.create({
        title: 'Correcto!',
        subTitle: 'Has iniciado sesión correctamente!',
        buttons: ['Aceptar']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    }).catch(data=>{
      let alert = this.alert.create({
        title: 'Error!',
        subTitle: 'Usuario o contraseña no son válidos.',
        buttons: ['Aceptar']
      });
      alert.present();
    });
    
  }

  register(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password).then(data=> {
      let alert = this.alert.create({
        title: 'Correcto!',
        subTitle: 'Te has registrado correctamente!',
        buttons: ['Aceptar']
      });
      alert.present();
    });
  }

  forgot(email){
    console.log(email);
    firebase.auth().sendPasswordResetEmail(email.toString()).then(data=> {
      // Email sent.
      console.log("Correcto.");
    }).catch(data=> {
      // An error happened.
      console.log("Error.");
    });

  }
    

}
