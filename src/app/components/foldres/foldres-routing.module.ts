import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoldresComponent } from './foldres.component';

const routes: Routes = [{ path: '', component: FoldresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldresRoutingModule { }
