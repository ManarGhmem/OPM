import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import swal from "sweetalert";
import { SharedService } from "./shared.service";

export default class Observer {
  constructor(
    private router?: Router,
    private target?: string,
    private reload?: boolean,
    private swal_display?: boolean,
    private sharedService?: SharedService,
    private activeModal?: NgbActiveModal
  ) {}

  OBSERVER_POST(cb?) {
    return {
      next: (response: any) => {
        if (this.swal_display) swal("Success!", response.message, "success");
        if (this.activeModal) this.activeModal.dismiss();
        if (this.reload) this.sharedService.reloadComponent(this.router);
        if (this.target) this.router.navigate([this.target]);

        if (cb) cb(response,true);
      },
      error: (err: HttpErrorResponse) => {
        swal("Failure!", err.error.message, "warning");
        if(this.router)this.router.navigate([this.target]);
        if (cb) cb(err,false);

      },

      // complete: () => {

      // if (this.activeModal) this.activeModal.dismiss();
      // },
    };
  }

  OBSERVER_VERIFY_ACCOUNT(cb) {
    return {
      next: (response: any) => {
        cb(true);
      },
      error: (err: HttpErrorResponse) => {
        cb(false);
      },
    };
  }

  OBSERVER_GET(cb) {
    return {
      next: (response: any) => {
        cb(response);
      },
      error: (err: HttpErrorResponse) => {
      },
    };
  }
  OBSERVER_RESET(cb?) {
    return {
      next: (response: any) => {
        if (cb) cb(true, response);
        if (this.swal_display) swal("Success!", response.message, "success");
        if (this.target) this.router.navigate([this.target]);
      },
      error: (err: HttpErrorResponse) => {
        if (cb) cb(false, err);
        swal("Failure!", err.error.message, "warning");
      },
    };
  }

  OBSERVER_DELETE(cb?) {
    return {
      next: (response: any) => {
        if(this.router){

          swal("Success!", response.message, "success");
          this.sharedService.reloadComponent(this.router); // cb(response)
        }
      },
      error: (err: HttpErrorResponse) => {
        if(this.router)swal("Failure!", err.error.message, "warning");
      },
    };
  }
  OBSERVER_EDIT(cb?) {
    return {
      next: (response: any) => {
        swal("Success!", response.message, "success");
        this.sharedService.reloadComponent(this.router);
        if (this.activeModal) this.activeModal.dismiss();
        if(cb)cb(response);
      },
      error: (err: HttpErrorResponse) => {
        // cb(err)
        swal("Failure!", err.error.message, "warning");
      },
    };
  }

  OBSERVER_SIGNIN(cb?) {
    return {
      next: (response: any) => {
        if (this.target) this.router.navigate([this.target]);
        cb(response);
      },
      error: (err: HttpErrorResponse) => {
        swal("Failure!", err.error.message, "warning");
        cb(err);
      },
    };
  }
}
