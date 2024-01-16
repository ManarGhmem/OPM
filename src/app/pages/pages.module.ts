import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NavbarComponent } from "../layout/navbar/navbar.component";
import { CategoriesComponent } from "../layout/categories/categories.component";
import { CoursesComponent } from "../layout/courses/courses.component";
import { OwlCarouselComponent } from "../layout/owl-carousel/owl-carousel.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { QuotesComponent } from "../layout/quotes/quotes.component";
import { ServicessComponent } from "../layout/servicess/servicess.component";
import { SpinnerComponent } from "../layout/spinner/spinner.component";
import { TeamComponent } from "../layout/team/team.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ResetPwdComponent } from "./auth/reset-pwd/reset-pwd.component";
import { VerifAccountComponent } from "./auth/verif-account/verif-account.component";
import { TokenInterceptorService } from "../services/token-interceptor.service";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UpdatePageComponent } from './auth/update-page/update-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    CoursesComponent,
    FooterComponent,
    OwlCarouselComponent,
    QuotesComponent,
    ServicessComponent,
    SpinnerComponent,
    TeamComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    ResetPwdComponent,
    VerifAccountComponent,
    ContactComponent,
    AboutComponent,
    UpdatePageComponent,
  ],
  exports: [
    HomeComponent,
    CategoriesComponent,
    CoursesComponent,
    FooterComponent,
    OwlCarouselComponent,
    QuotesComponent,
    ServicessComponent,
    SpinnerComponent,
    TeamComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    ResetPwdComponent,
    VerifAccountComponent
  ],
  imports: [CommonModule, CarouselModule, PagesRoutingModule, FormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptorService,
  //   multi:true
  // }
],
})
export class PagesModule {}
