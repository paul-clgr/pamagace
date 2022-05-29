import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('USERNAME') && sessionStorage.getItem('TOKEN')) {
      const auth = sessionStorage.getItem('TOKEN');
      req = req.clone({
        setHeaders: {
          Authorization: 'Basic ' + auth,
        }
      })
    }

    return next.handle(req);

  }
}
