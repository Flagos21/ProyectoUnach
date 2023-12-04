import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.component.html',
  styleUrls: ['./home-estudiante.component.css']
})
export class HomeEstudianteComponent {
  constructor(private router: Router){
  }
  navegarGP(){
    this.router.navigate(['inscribir-p'])
  }
  navegarNP(){
    this.router.navigate(['mi-practica'])
  }
  navegarNI(){
    this.router.navigate(['estado-p'])
  }
}
