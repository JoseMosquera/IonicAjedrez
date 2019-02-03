import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddJugadorPage } from './add-jugador';

@NgModule({
  declarations: [
    AddJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AddJugadorPage),
  ],
})
export class AddJugadorPageModule {}
