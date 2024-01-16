import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkordersdetailsadminComponent } from './workordersdetailsadmin.component';

const routes: Routes = [{ path: '', component: WorkordersdetailsadminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkordersdetailsadminRoutingModule { }
