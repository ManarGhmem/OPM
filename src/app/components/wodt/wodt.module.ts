import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WODTRoutingModule } from './wodt-routing.module';
import { WODTComponent } from './wodt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';





@NgModule({
  declarations: [WODTComponent],
  imports: [
    CommonModule,
    WODTRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    TranslateModule,
    NgxPaginationModule
  
  ]
})
export class WODTModule { }
