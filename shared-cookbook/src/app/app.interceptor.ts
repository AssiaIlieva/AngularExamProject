import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';

const { apiUrl } = environment;
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  // Преобразуваме URL-а ако започва с '/api'
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
    });
  }

  // Вземаме токена от локалния сторидж, от обекта с ключ 'auth'
  const authData = localStorage.getItem('auth');
  if (authData) {
    const parsedAuthData = JSON.parse(authData); // Преобразуваме JSON стринга в обект
    const token = parsedAuthData?.accessToken; // Извличаме токена от обекта
    if (token) {
      // Ако има токен, добавяме го в хедърите
      req = req.clone({
        setHeaders: {
          'X-Authorization': token,
        },
      });
    }
  }

  console.log(req); // Печатаме заявката за дебъг

  return next(req);
};
