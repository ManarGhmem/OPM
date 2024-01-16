import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientPartOrderLisComponent } from './list-client-part-order-lis.component';

const routes: Routes = [{ path: '', component: ListClientPartOrderLisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListClientPartOrderLisRoutingModule { }
