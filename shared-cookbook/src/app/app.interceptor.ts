import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';

const { apiUrl } = environment;
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
    });
  }

  const authData = localStorage.getItem('auth');
  if (authData) {
    const parsedAuthData = JSON.parse(authData);
    const token = parsedAuthData?.accessToken;
    if (token) {
      req = req.clone({
        setHeaders: {
          'X-Authorization': token,
        },
      });
    }
  }

  console.log(req);

  return next(req);
};
