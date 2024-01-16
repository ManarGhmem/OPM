import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PutComponent } from './put/put.component';
import { DetailsComponent } from './details/details.component';
import { TranslateModule } from '@ngx-translate/core';
import { ValdatinCloseWorkOrderComponent } from './valdatin-close-work-order/valdatin-close-work-order.component';



@NgModule({
  declarations: [
    PostComponent,
    PutComponent,
    DetailsComponent,
    ValdatinCloseWorkOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  entryComponents : [
    PostComponent,
    PutComponent,
    DetailsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],

})
export class PopupModule { }
