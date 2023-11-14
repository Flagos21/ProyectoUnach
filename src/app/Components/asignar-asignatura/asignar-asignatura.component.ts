import { Component, OnInit } from '@angular/core';
import Asignatura from '../interfaces/asignatura.interface';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';

@Component({
  selector: 'asignar-asignatura',
  templateUrl: './asignar-asignatura.component.html',
  styleUrls: ['./asignar-asignatura.component.css']
})
export class AsignarAsignaturaComponent implements OnInit {
  asignatura: Asignatura[];

  constructor (
    private cargaAcademica: CargaAcademicaService
  ){
    this.asignatura = [{
      id_asignatura: 'pruebaId',
      nombre: 'pruebaNombre',
      creditos: 23,
      horas_lectivas: 23

    }]

  }

  ngOnInit(): void {
      this.cargaAcademica.getAsignatura().subscribe(asignatura =>{
        this.asignatura = asignatura;
        //console.log(asignatura);

      })
  }

}