import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashClientJobComponent } from './dash-client-job.component';

const routes: Routes = [{ path: '', component: DashClientJobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashClientJobRoutingModule { }
