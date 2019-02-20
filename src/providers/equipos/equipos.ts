import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the EquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EquiposProvider {

  jugadores = [];

  constructor(private afdb: AngularFireDatabase) {
    console.log('Hello EquiposProvider Provider');
  }

}
