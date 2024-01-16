import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAdminClintStatComponent } from './dash-admin-clint-stat.component';

const routes: Routes = [{ path: '', component: DashAdminClintStatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAdminClintStatRoutingModule { }
