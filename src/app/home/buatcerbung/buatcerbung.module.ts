import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuatcerbungPageRoutingModule } from './buatcerbung-routing.module';

import { BuatcerbungPage } from './buatcerbung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuatcerbungPageRoutingModule
  ],
  declarations: [BuatcerbungPage]
})
export class BuatcerbungPageModule {}
