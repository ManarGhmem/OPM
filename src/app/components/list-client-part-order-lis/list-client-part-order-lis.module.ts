import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientPartOrderLisRoutingModule } from './list-client-part-order-lis-routing.module';
import { ListClientPartOrderLisComponent } from './list-client-part-order-lis.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListClientPartOrderLisComponent],
  imports: [
    CommonModule,
    ListClientPartOrderLisRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class ListClientPartOrderLisModule { }
