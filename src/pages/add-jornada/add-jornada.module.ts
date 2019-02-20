import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddJornadaPage } from './add-jornada';

@NgModule({
  declarations: [
    AddJornadaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddJornadaPage),
  ],
})
export class AddJornadaPageModule {}
