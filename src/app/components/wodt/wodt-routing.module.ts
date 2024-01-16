import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WODTComponent } from './wodt.component';

const routes: Routes = [{ path: '', component: WODTComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WODTRoutingModule { }
