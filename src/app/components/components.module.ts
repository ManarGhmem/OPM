import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    Ng2SearchPipeModule,
    NgbModule
    // TranslateModule
    // ,TranslateModule.forRoot({
    //   loader:{
    //     provide:TranslateLoader,
    //     useFactory:HttpLoaderFactory,
    //     deps:[HttpClient]
    //   }
    // })
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ComponentsModule { }
