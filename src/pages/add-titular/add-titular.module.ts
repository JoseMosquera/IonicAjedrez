import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTitularPage } from './add-titular';

@NgModule({
  declarations: [
    AddTitularPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTitularPage),
  ],
})
export class AddTitularPageModule {}
