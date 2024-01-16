import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartOrderDetailsAdminRoutingModule } from './part-order-details-admin-routing.module';
import { PartOrderDetailsAdminComponent } from './part-order-details-admin.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PartOrderDetailsAdminComponent],
  imports: [
    CommonModule,
    PartOrderDetailsAdminRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class PartOrderDetailsAdminModule { }
