import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  async getUserInfo(userId: string) {
    const result = await firstValueFrom(
      this.http.get<User>(environment.API_URL.concat(`/users/${userId}`))
    );

    const user = {
      email: result.email,
      id: result.id,
    };

    return user;
  }
}
