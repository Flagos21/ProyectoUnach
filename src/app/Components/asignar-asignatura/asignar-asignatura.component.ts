import { Component, OnInit } from '@angular/core';
import Asignatura from '../interfaces/asignatura.interface';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';
import {Router} from '@angular/router';
@Component({
  selector: 'asignar-asignatura',
  templateUrl: './asignar-asignatura.component.html',
  styleUrls: ['./asignar-asignatura.component.css']
})
export class AsignarAsignaturaComponent implements OnInit {
  asignatura: Asignatura[];

  constructor (
    private cargaAcademica: CargaAcademicaService, private router: Router
  ){
    
    this.asignatura = [{
      id_asignatura: 'pruebaId',
      nombre: 'pruebaNombre',
      creditos: 23,
      horas_lectivas: 23

    }]

  }
   // Función para redirigir al otro componente
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
    this.router.navigate(['/asignar-asignatura']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
  redirigirCrearDocente() {
    this.router.navigate(['/crear-docente']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }

  ngOnInit(): void {
      this.cargaAcademica.getAsignatura().subscribe(asignatura =>{
        this.asignatura = asignatura;
        //console.log(asignatura);

      })
  }

}