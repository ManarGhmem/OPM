import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkOrderFromClientListRoutingModule } from './work-order-from-client-list-routing.module';
import { WorkOrderFromClientListComponent } from './work-order-from-client-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkOrderFromClientListComponent],
  imports: [
    CommonModule,
    WorkOrderFromClientListRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class WorkOrderFromClientListModule { }
