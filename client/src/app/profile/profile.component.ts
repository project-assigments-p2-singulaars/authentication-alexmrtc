import { Component, Input, OnInit, inject } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  @Input() id!:string;
  private userService = inject(UserService)

  user:any;

  async ngOnInit() {
    this.user= await this.userService.getUserInfo(this.id);
  }
}
