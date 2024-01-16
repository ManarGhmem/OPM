import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowupsDetailesComponent } from './followups-detailes.component';

const routes: Routes = [{ path: '', component: FollowupsDetailesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowupsDetailesRoutingModule { }
