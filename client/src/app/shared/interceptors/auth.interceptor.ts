import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../services/local-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);

  return next(req).pipe(tap( (response: any) => {
    if(response.ok && response.url.startsWith(`${environment.API_URL}/login`)){
      localStorageService.setItem('userId', response.body.user.id);
      localStorageService.setItem("token", response.body.accessToken)
    }
  }), catchError(e=> of(e)));
};
