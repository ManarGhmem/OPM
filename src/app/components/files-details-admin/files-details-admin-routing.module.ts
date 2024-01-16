import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilesDetailsAdminComponent } from './files-details-admin.component';

const routes: Routes = [{ path: '', component: FilesDetailsAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesDetailsAdminRoutingModule { }
