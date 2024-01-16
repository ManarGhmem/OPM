import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAdminClintStatRoutingModule } from './dash-admin-clint-stat-routing.module';
import { DashAdminClintStatComponent } from './dash-admin-clint-stat.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashAdminClintStatComponent],
  imports: [
    CommonModule,
    DashAdminClintStatRoutingModule,
    NgbModule,
    TranslateModule
  ]
})
export class DashAdminClintStatModule { }
