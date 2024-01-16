import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnhandledWorkOrdersDetailAdminComponent } from './unhandled-work-orders-detail-admin.component';

const routes: Routes = [{ path: '', component: UnhandledWorkOrdersDetailAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnhandledWorkOrdersDetailAdminRoutingModule { }
