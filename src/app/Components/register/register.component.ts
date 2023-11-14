import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      perfil: new FormControl('usuario')
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      // Registra al usuario con Firebase Authentication y obtiene el UID
      const userCredential = await this.authService.register(this.formReg.value);
      const uid = userCredential.user.uid;

      console.log('Usuario registrado con éxito. UID:', uid);

      // Agrega el usuario a Firestore con el UID
      await this.authService.addUser({ ...this.formReg.value, uid });

      console.log('Usuario agregado a Firestore con éxito.');

      // Puedes continuar con otras acciones después de la autenticación y la creación del documento en Firestore
      //this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Error al registrar usuario:', error);

      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'El correo electrónico ya está en uso. Por favor, utiliza otro correo electrónico.';
      } else {
        this.errorMessage = 'Hubo un error al registrar al usuario. Por favor, inténtalo de nuevo más tarde.';
      }
    }
  }
}
