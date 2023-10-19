import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacacerbungPage } from './bacacerbung.page';

const routes: Routes = [
  {
    path: '',
    component: BacacerbungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacacerbungPageRoutingModule {}
