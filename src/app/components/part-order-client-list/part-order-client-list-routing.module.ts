import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartOrderClientListComponent } from './part-order-client-list.component';

const routes: Routes = [{ path: '', component: PartOrderClientListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartOrderClientListRoutingModule { }
