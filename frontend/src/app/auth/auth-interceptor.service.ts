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
    if (localStorage.getItem('USERNAME') && localStorage.getItem('TOKEN')) {
      const auth = localStorage.getItem('TOKEN');
      req = req.clone({
        setHeaders: {
          Authorization: 'Basic ' + auth,
        }
      })
    }

    return next.handle(req);

  }
}
