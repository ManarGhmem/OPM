import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldresRoutingModule } from './foldres-routing.module';
import { FoldresComponent } from './foldres.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FoldresComponent],
  imports: [
    CommonModule,
    FoldresRoutingModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    TranslateModule
  ]
})
export class FoldresModule { }
