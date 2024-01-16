import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployersRoutingModule } from './employers-routing.module';
import { EmployersComponent } from './employers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployersComponent],
  imports: [
    CommonModule,
    EmployersRoutingModule,
      NgbModule,
      NgxPaginationModule,
      Ng2SearchPipeModule,
      FormsModule,
    TranslateModule
  ],  schemas:[NO_ERRORS_SCHEMA]

})
export class EmployersModule { }
