import { Component, OnInit } from '@angular/core';
import { CargaAcademicaService } from '../services/carga-academica.service';
import Docente from '../Components/interfaces/docente.interface';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.component.html',
  styleUrls: ['./listar-docentes.component.css']
})
export class ListarDocentesComponent implements OnInit{

  docente: Docente[];

  constructor (
    private cargaAcademica: CargaAcademicaService
  ){
    this.docente = [{
      nombre: 'pruebaId',
      profesion: 'pruebaNombre',
      tipocontrato: 23,
      horascontrato: 23,
      email: 'email'
    }]
  }

  ngOnInit(): void {
    this.cargaAcademica.getDocente().subscribe(docente =>{
      this.docente = docente;
      //console.log(asignatura);
    })
  }

  mostrarSidebar: boolean = true;

  toggleSidebar() {
    this.mostrarSidebar = !this.mostrarSidebar;
  }


}
