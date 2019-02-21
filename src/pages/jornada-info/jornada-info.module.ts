import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadaInfoPage } from './jornada-info';

@NgModule({
  declarations: [
    JornadaInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadaInfoPage),
  ],
})
export class JornadaInfoPageModule {}
