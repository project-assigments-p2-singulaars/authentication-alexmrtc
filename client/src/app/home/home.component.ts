import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private authService = inject(AuthService);
  private localStorageService = inject(LocalStorageService);
  isLoggedIn = false;
  id!: string | null;

  ngOnInit(): void {
    if(this.localStorageService.getItem('token')){
      this.isLoggedIn = true;
      this.id= this.localStorageService.getItem('userId')
    }
  }

  logoutUser(){
    this.authService.logout()
  }
}
