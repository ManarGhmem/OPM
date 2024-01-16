import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashClientJobRoutingModule } from './dash-client-job-routing.module';
import { DashClientJobComponent } from './dash-client-job.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DashClientJobComponent],
  imports: [
    CommonModule,
    DashClientJobRoutingModule,
    NgbModule,
    TranslateModule
  ]
})
export class DashClientJobModule { }
