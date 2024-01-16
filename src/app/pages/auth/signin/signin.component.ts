import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {SIGNIN_END_POINT} from "../../../services/endpoints";
import { BackendService } from "../../../services/backend.service";
import Observer from "../../../services/observer";
import { SharedService } from "../../../services/shared.service";


@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  constructor(
    private backendService: BackendService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}
  login(form: NgForm) {
    const payload = { ...form.value };
    // console.log(payload);
    // try{},caches{}
    this.backendService.post(SIGNIN_END_POINT, payload).subscribe(
      new Observer(this.router, "/app/dashboard", true).OBSERVER_SIGNIN(
        (response: any) => {
          
          const { accessToken, refreshToken ,payload} = response;
          console.log(payload.user.authority);
          this.sharedService.setItem("role",payload.user.authority)
          this.sharedService.setItem("accessToken", accessToken);
          this.sharedService.setItem("refreshToken", refreshToken);
          this.sharedService.setItem("folders", payload.folder);
          this.sharedService.setItem("contract", payload.contract.terms);


        }
      )
    );
  }
}
