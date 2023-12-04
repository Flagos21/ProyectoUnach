import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-practica',
  templateUrl: './mi-practica.component.html',
  styleUrls: ['./mi-practica.component.css']
})
export class MiPracticaComponent {

  constructor(private router: Router){
  }
  navegarGP(){
    this.router.navigate(['ingresar-bitacora'])
  }
  navegarNP(){
    this.router.navigate(['ver-bitacora'])
  }

}
