import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechWorkorderRoutingModule } from './tech-workorder-routing.module';
import { TechWorkorderComponent } from './tech-workorder.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TechWorkorderComponent],
  imports: [
    CommonModule,
    TechWorkorderRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  ]
})
export class TechWorkorderModule { }
