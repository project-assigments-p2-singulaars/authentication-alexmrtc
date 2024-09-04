import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private loginService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    const user:User = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }

    if(this.loginForm.valid){
      this.loginService.login(user);
    }
  }
}
