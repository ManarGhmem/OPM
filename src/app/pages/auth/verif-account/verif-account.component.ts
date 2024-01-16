import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VERIFY_ACCOUNT_END_POINT } from "../../../services/endpoints";
import Observer from "../../../services/observer";
import { BackendService } from "../../../services/backend.service";

@Component({
  selector: "app-verif-account",
  templateUrl: "./verif-account.component.html",
  styleUrls: ["./verif-account.component.scss"],
})
export class VerifAccountComponent implements OnInit {
  validation: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    public backendService: BackendService
  ) {}

  ngOnInit() {
    this.validateAccount();
  }
  validateAccount() {
    const hashedid = this.activatedRoute.snapshot.paramMap.get("hashedid");
    this.backendService
      .get(`${VERIFY_ACCOUNT_END_POINT}/${hashedid}`)
      .subscribe(
        new Observer().OBSERVER_VERIFY_ACCOUNT(
          (result: boolean) => (this.validation = result)
        )
      );
  }
}
