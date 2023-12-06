import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() showSidebar: boolean = false; // Variable para controlar la visibilidad de la barra lateral

  // Otras lógicas y funciones del componente...
}
