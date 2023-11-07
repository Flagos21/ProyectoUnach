import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  // Función para redirigir al otro componente
  redirigirPortada1() {
    this.router.navigate(['app/Components/portada']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
}
