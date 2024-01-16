import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractUsersComponent } from './contract-users.component';

const routes: Routes = [{ path: '', component: ContractUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractUsersRoutingModule { }
