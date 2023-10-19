import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuatcerbungPage } from './buatcerbung.page';

const routes: Routes = [
  {
    path: '',
    component: BuatcerbungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuatcerbungPageRoutingModule {}
