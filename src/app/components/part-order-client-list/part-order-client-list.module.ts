import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartOrderClientListRoutingModule } from './part-order-client-list-routing.module';
import { PartOrderClientListComponent } from './part-order-client-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PartOrderClientListComponent],
  imports: [
    CommonModule,
    PartOrderClientListRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class PartOrderClientListModule { }
