import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechWorkorderComponent } from './tech-workorder.component';

const routes: Routes = [{ path: '', component: TechWorkorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechWorkorderRoutingModule { }
