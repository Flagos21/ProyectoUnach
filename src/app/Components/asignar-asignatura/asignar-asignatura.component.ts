import { Component, OnInit } from '@angular/core';
import Asignatura from '../interfaces/asignatura.interface';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'asignar-asignatura',
  templateUrl: './asignar-asignatura.component.html',
  styleUrls: ['./asignar-asignatura.component.css']
})
export class AsignarAsignaturaComponent implements OnInit{
  listHoras: CargaAcademicaService[] = [];
  formulario: FormGroup;
 

  constructor(
    private cargaAcademica: CargaAcademicaService,
    private router: Router,
    
  ) { 
    this.formulario = new FormGroup({
      id_asignatura: new FormControl(),
      nombre: new FormControl(), 
      creditos: new FormControl(),
      horas_lectivas: new FormControl()
    })
  }

  ngOnInit(): void {    
  }
  
  async onSubmit(){
    console.log(this.formulario.value)
    await this.cargaAcademica.addAsignatura(this.formulario.value);
    console.log(Response);
  }
  mandardatos(){
    this.cargaAcademica.getAsignatura().subscribe(doc => {
      this.listHoras = [];
      doc.forEach((element: any) => {
        const datos: CargaAcademicaService = {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        };
        this.listHoras.push(datos);
      console.log(datos)
      console.log(element.payload.doc.id)
      });
     
    });
  }
}
