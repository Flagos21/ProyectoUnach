import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent {
  constructor(private router: Router) { }

  // Función para redirigir al otro componente
  redirigirPortada() {
    this.router.navigate(['./portada']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
}
