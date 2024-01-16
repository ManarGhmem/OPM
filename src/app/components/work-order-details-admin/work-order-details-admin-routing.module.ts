import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkOrderDetailsAdminComponent } from './work-order-details-admin.component';

const routes: Routes = [{ path: '', component: WorkOrderDetailsAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderDetailsAdminRoutingModule { }
