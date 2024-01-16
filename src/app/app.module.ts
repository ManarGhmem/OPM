import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";
import { FormsModule } from "@angular/forms";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { LayoutComponent } from "./layout/original-layout/layout.component";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { PopupModule } from "./popup/popup.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [AppComponent, NotfoundComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    PagesModule,
    ComponentsModule,
    PopupModule,

    TranslateModule.forRoot({
      // defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  //seulement les interfaces qui declenchent pop up
  schemas: [NO_ERRORS_SCHEMA],
  providers: [    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
