import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-barnav',
  templateUrl: './barnav.component.html',
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent {
  
  constructor (

    private router: Router
  ){
    
    
  }

  redirigirPortada() {
    this.router.navigate(['./portada']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
  redirigirCrearAsignatura() {
    this.router.navigate(['/crear-asignatura']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
  redirigirAsignarAsignatura() {
    this.router.navigate(['/asignar-asignatura']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }

  redirigirListarAsignatura() {
    this.router.navigate(['/listar-asignatura']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
  redirigirCrearDocente() {
    this.router.navigate(['/crear-docente']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
  redirigirListarDocentes() {
    this.router.navigate(['/listar-docentes']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
}
