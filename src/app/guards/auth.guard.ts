import { Injectable } from "@angular/core";
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from "@angular/router";
import { SharedService } from "../services/shared.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild, CanActivate {
  constructor(private router: Router, private sharedService: SharedService) {}
  canActivate(//test for login pages
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.sharedService.LoggedIn()) {
      this.router.navigate(["/app"]);
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(//test for app
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.sharedService.LoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/signin"]);
      return false;
    }
  }
}
