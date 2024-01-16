import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartOrderCommercialListRoutingModule } from './part-order-commercial-list-routing.module';
import { PartOrderCommercialListComponent } from './part-order-commercial-list.component';


@NgModule({
  declarations: [PartOrderCommercialListComponent],
  imports: [
    CommonModule,
    PartOrderCommercialListRoutingModule
  ]
})
export class PartOrderCommercialListModule { }
