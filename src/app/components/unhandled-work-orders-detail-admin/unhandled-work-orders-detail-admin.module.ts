import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnhandledWorkOrdersDetailAdminRoutingModule } from './unhandled-work-orders-detail-admin-routing.module';
import { UnhandledWorkOrdersDetailAdminComponent } from './unhandled-work-orders-detail-admin.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UnhandledWorkOrdersDetailAdminComponent],
  imports: [
    CommonModule,
    UnhandledWorkOrdersDetailAdminRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class UnhandledWorkOrdersDetailAdminModule { }
