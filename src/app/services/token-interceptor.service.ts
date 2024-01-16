import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import {  throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { BackendService } from "./backend.service";
import { GET_USER_REFRESH_TOKEN_END_POINT } from "./endpoints";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  refresh: boolean = false;
  constructor(
    private http: HttpClient,
    private injector: Injector,

  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.injector.get(SharedService).getItem("accessToken");

    if (accessToken) {
      const req = request.clone({
        setHeaders: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      //refresh case
      return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {

          if (err.status === 403 && !this.refresh) {
            this.refresh = true;
            const refreshToken = this.injector
              .get(SharedService)
              .getItem("refreshToken");
            return this.http
              .post(GET_USER_REFRESH_TOKEN_END_POINT, { token: refreshToken })
              .pipe(
                switchMap((res: any) => {
                  //if refreshToken is not correct redempt it
                  const newAccessToken = res.accessToken;
                  this.injector
                    .get(SharedService)
                    .setItem("accessToken", newAccessToken);
                  const tokenizedReq = req.clone({
                    setHeaders: {
                      Authorization: `Bearer ${newAccessToken}`,
                    },
                  });
                  return next.handle(tokenizedReq);
                })
              );
            // as Observable<HttpEvent<any>>;
          }
          this.refresh = false;

          return throwError(() => err);
        })
      );
    }
    return next.handle(request);
    // const tokenService = this.injector.get(TokenService);
    // const tokenizedReq = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${tokenService.getToken()}`,
    //   },
    // });
    // return next.handle(tokenizedReq);
  }
}
