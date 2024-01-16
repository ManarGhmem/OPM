import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowupsDetailesRoutingModule } from './followups-detailes-routing.module';
import { FollowupsDetailesComponent } from './followups-detailes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [FollowupsDetailesComponent],
  imports: [
    CommonModule,
    FollowupsDetailesRoutingModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  TranslateModule
  ]
})
export class FollowupsDetailesModule { }
