import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadasPage } from './jornadas';

@NgModule({
  declarations: [
    JornadasPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadasPage),
  ],
})
export class JornadasPageModule {}
