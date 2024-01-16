import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsAdmRoutingModule } from './tickets-adm-routing.module';
import { TicketsAdmComponent } from './tickets-adm.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [TicketsAdmComponent],
  imports: [
    CommonModule,
    TicketsAdmRoutingModule,
    NgbModule,
    TranslateModule
  ]
})
export class TicketsAdmModule { }
