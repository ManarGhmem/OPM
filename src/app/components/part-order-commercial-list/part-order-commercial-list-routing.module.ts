import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartOrderCommercialListComponent } from './part-order-commercial-list.component';

const routes: Routes = [{ path: '', component: PartOrderCommercialListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartOrderCommercialListRoutingModule { }
