import { Component, OnInit } from "@angular/core";
import {
  RESET_PASSWORD_END_POINT,
  RESET_VERIFY_CODE_END_POINT,
  RESET_VERIFY_EMAIL_END_POINT,
} from "../../../services/endpoints";
import { BackendService } from "../../../services/backend.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import Observer from "../../../services/observer";

@Component({
  selector: "app-reset-pwd",
  templateUrl: "./reset-pwd.component.html",
  styleUrls: ["./reset-pwd.component.scss"],
})
export class ResetPwdComponent implements OnInit {
  verifiedEmail: boolean;
  verifiedCode: boolean;
  email: string;

  constructor(private backendService: BackendService, private router: Router) {
    this.verifiedEmail = false;
    this.verifiedCode = false;
  }

  ngOnInit() {}

  verifyEmailAndSendCode(email: string) {
    this.backendService.post(RESET_VERIFY_EMAIL_END_POINT, { email : email, code : 'tetdhdk' }).subscribe(
      new Observer(this.router, null, true).OBSERVER_RESET(
        (verified: boolean) => {
          this.verifiedEmail = verified;
          this.email = email;
        }
      )
    );
    const link =`http://localhost:3000/auth/user/verify/reset/email`
    console.log(link);
    
  }
  
  verifyCode(code: string) {
    this.backendService
      .post(RESET_VERIFY_CODE_END_POINT, { email: this.email, code})
      .subscribe(
        new Observer(this.router, null, true).OBSERVER_RESET(
          (verified: boolean) => {
            this.verifiedCode = verified;
          }
        )
      );

    // this.backendService
    // .post(RESET_VERIFY_CODE_END_POINT, { email:this.email,code })
    // .subscribe({
    //   next: (response:any) => {
    //     this.verifiedCode = true;
    //     swal("Success!", response.message, "success")
    //   },
    //   error: (err) => {
    //     swal("Failure!", err.error.message, "warning");
    //   },
    // });
  }
  resetPassword(form: NgForm) {
    const payload = { ...form.value };
    this.backendService
      .put(RESET_PASSWORD_END_POINT, {
        email: this.email,
        newPassword: payload.newPassword,
      })
      .subscribe(new Observer(this.router, "/signin", true).OBSERVER_RESET());
    // this.backendService
    //   .put(RESET_PASSWORD_END_POINT, { email:this.email, newPassword:payload.newPassword })
    //   .subscribe(
    //     {
    //       next: (response:any) => {
    //         swal("Success!", response.message, "success");
    //         this.router.navigate(["/signin"])
    //       },
    //       error: (err) => {
    //         swal("Failure!", err.error.message, "warning");
    //       },
    //     }
    //   );
  }
}
