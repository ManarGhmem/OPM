import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesDetailsAdminRoutingModule } from './files-details-admin-routing.module';
import { FilesDetailsAdminComponent } from './files-details-admin.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FilesDetailsAdminComponent],
  imports: [
    CommonModule,
    FilesDetailsAdminRoutingModule,
    NgbModule,
    TranslateModule
  ]
})
export class FilesDetailsAdminModule { }
