import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkOrderFromClientListComponent } from './work-order-from-client-list.component';

const routes: Routes = [{ path: '', component: WorkOrderFromClientListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderFromClientListRoutingModule { }
