import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectionComponent } from './redirection.component';

const routes: Routes = [{ path: '', component: RedirectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectionRoutingModule { }
