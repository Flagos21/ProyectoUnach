import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth:AngularFireAuth, private router: Router) { }
  loginWithEmail(params: login): Observable<any> {
    return from(
      this.auth.signInWithEmailAndPassword(params.email, params.password).then(
        (resp) => {
          console.log('Inicio de sesión exitoso', resp.user?.email);
          this.router.navigate(['home-profesor']);
        },
        (error) => {
          //validacion de inicio de sesion erroneo
          console.log(error.message);
          console.clear();
        }
      )
    );
  }
}
type login = {
  email: string ; password:string
}

