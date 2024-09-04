import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../shared/models/user';
import { catchError, firstValueFrom, of } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../shared/services/local-storage.service';

type LoginResponseType = {
  accessToken: string,
  user: User
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router)
  private url = environment.API_URL;
  private localStorageService = inject(LocalStorageService)

  login(user: User) {
    this.http.post<LoginResponseType>(this.url.concat('/login'), user).subscribe(response=> {
      this.router.navigate([''])
    });
  }

  logout(){
    this.localStorageService.clearStorage();
  }
} 
