import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectionRoutingModule } from './redirection-routing.module';
import { RedirectionComponent } from './redirection.component';


@NgModule({
  declarations: [RedirectionComponent],
  imports: [
    CommonModule,
    RedirectionRoutingModule
  ]
})
export class RedirectionModule { }
