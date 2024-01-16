import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { AboutComponent } from "./about/about.component";
import { ResetPwdComponent } from "./auth/reset-pwd/reset-pwd.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { VerifAccountComponent } from "./auth/verif-account/verif-account.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { UpdatePageComponent } from "./auth/update-page/update-page.component";


const routes: Routes = [

      {
        path: "home",
        component: HomeComponent,
      },

      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },

      {
        path: "signin",
       component:SigninComponent,
       canActivate:[AuthGuard]
      },
      {
        path: "signup",
        component:SignupComponent,
        canActivate:[AuthGuard]

      },
      {
        path: "account/:hashedid",
        component:VerifAccountComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "reset/password",
        component:ResetPwdComponent,
        canActivate:[AuthGuard]

      },

      {
        path: "updatepage",
        component:UpdatePageComponent,
        // canActivate:[AuthGuard]

      },
      // {
      //   path: "redirection",
      //   component:RedirectionComponent
      // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[AuthGuard],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
