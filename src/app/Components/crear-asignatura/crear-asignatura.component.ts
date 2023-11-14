import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';


@Component({
  selector: 'crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent implements OnInit{

  formulario: FormGroup;

  constructor(
    private cargaAcademica: CargaAcademicaService,
    private router: Router
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
  


  // Función para redirigir al otro componente
  redirigirPortada() {
    this.router.navigate(['./portada']); // Reemplaza 'otro-componente' con la ruta de tu componente de destino
  }
}

