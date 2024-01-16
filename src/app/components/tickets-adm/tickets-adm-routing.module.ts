import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsAdmComponent } from './tickets-adm.component';

const routes: Routes = [{ path: '', component: TicketsAdmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsAdmRoutingModule { }
