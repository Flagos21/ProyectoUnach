import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword: boolean = false;
  loginForm: FormGroup;
  checkValidEmail: boolean = false;

  constructor(
    private formsBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.formsBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  loginWithEmail() {
    if (this.loginForm.valid) {
      if (this.loginForm.get('email')?.valid) {
        if (this.loginForm.value.password.length >= 6) {
          this.authService.loginWithEmail({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
          });
        } else {
         
            {
              
            }
          ;
        }
        } else {

          {
           
          }
        ;
      }
    } else {
 
        {
          
        }
      ;
    }
  }
}