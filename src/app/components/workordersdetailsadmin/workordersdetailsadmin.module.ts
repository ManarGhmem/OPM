import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkordersdetailsadminRoutingModule } from './workordersdetailsadmin-routing.module';
import { WorkordersdetailsadminComponent } from './workordersdetailsadmin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkordersdetailsadminComponent],
  imports: [
    CommonModule,
    WorkordersdetailsadminRoutingModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  TranslateModule
  ]
})
export class WorkordersdetailsadminModule { }
