import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.formReg = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      perfil: new FormControl('usuario'),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    try {
      // Registra al usuario con Firebase Authentication
      const userCredential = await this.authService.registerAndAddUser(this.formReg.value);

      // Muestra un mensaje de éxito al usuario
      this.successMessage = 'Usuario registrado con éxito.';

      console.log('Usuario registrado con éxito. UID:', userCredential.user.uid);

      // Redirige al usuario a otra página después del registro exitoso
      // this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Error al registrar usuario:', error);

      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage =
          'El correo electrónico ya está en uso. Por favor, utiliza otro correo electrónico.';
      } else {
        this.errorMessage =
          'Hubo un error al registrar al usuario. Por favor, inténtalo de nuevo más tarde.';
      }
    }
  }
}
