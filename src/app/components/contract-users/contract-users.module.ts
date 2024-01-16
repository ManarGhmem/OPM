import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractUsersRoutingModule } from './contract-users-routing.module';
import { ContractUsersComponent } from './contract-users.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContractUsersComponent],
  imports: [
    CommonModule,
    ContractUsersRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class ContractUsersModule { }
