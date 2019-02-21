import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder} from '@angular/forms';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { RegisterPage } from '../register/register';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,private afdb: AngularFireDatabase, public alert: AlertController) {

   
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

  goRegister(){
    this.navCtrl.setRoot(RegisterPage);
  }

  }
    


