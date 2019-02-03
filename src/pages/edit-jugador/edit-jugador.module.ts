import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditJugadorPage } from './edit-jugador';

@NgModule({
  declarations: [
    EditJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(EditJugadorPage),
  ],
})
export class EditJugadorPageModule {}
