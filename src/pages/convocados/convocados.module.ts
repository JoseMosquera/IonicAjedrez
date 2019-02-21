import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvocadosPage } from './convocados';

@NgModule({
  declarations: [
    ConvocadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvocadosPage),
  ],
})
export class ConvocadosPageModule {}
