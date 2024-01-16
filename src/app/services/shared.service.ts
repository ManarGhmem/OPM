import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "./backend.service";
import Observer from "./observer";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: "root",
})
export class SharedService {
  constructor(private backendservice: BackendService, private router: Router) {}

  reloadComponent(router: Router) {
    const currentRoute = router.url;
    router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      router.navigate([currentRoute]);
    });
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  passwordControl() {
    //regex and password length
  }




  setItem(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
  deleteItem(key: string) {
    sessionStorage.removeItem(key);
  }
  getItem(key:string){
    return sessionStorage.getItem(key);
  }
  LoggedIn(){
    return !!sessionStorage.getItem('refreshToken');
  }

  // getSelectedCompany(cb) {
  //   const id = this.getItem("companyNo");
  //   if (!id) {
  //     this.backendservice.get(GET_USER_SELECTED_COMPANY_END_POINT).subscribe(
  //       new Observer().OBSERVER_GET((response) => {
  //         if (!response.err && response.rows[0]) {
  //           this.setItem("companyNo", response.rows[0].id_company);
  //           cb(response.rows[0].id_company)
  //         }
  //       })
  //     );
  //   } else {
  //     cb(id);
  //   }
  // }
}
