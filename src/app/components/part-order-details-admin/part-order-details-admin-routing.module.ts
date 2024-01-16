import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartOrderDetailsAdminComponent } from './part-order-details-admin.component';

const routes: Routes = [{ path: '', component: PartOrderDetailsAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartOrderDetailsAdminRoutingModule { }
