import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';

@Component({
  selector: 'app-crear-docente',  
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit{

  formulario: FormGroup;

  constructor(
    private cargaAcademica: CargaAcademicaService,
    private router: Router
    ) { 
      this.formulario = new FormGroup({
        run: new FormControl(),
        nombre: new FormControl(), 
        profesion: new FormControl(),
        tipocontrato: new FormControl(),
        horascontrato: new FormControl(),
        email: new FormControl()
      })
    }

    ngOnInit(): void {    
    }
    
    async onSubmit(){
      console.log(this.formulario.value)
      await this.cargaAcademica.addDocente(this.formulario.value);
      console.log(Response);
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
}
