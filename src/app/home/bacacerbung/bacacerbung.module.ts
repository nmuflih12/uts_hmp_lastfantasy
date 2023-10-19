import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacacerbungPageRoutingModule } from './bacacerbung-routing.module';

import { BacacerbungPage } from './bacacerbung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacacerbungPageRoutingModule
  ],
  declarations: [BacacerbungPage]
})
export class BacacerbungPageModule {}
