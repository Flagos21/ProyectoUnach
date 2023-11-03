import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './Components/portada/portada.component';
import { CrearDocenteComponent } from './Components/crear-docente/crear-docente.component';
import { CrearAsignaturaComponent } from './crear-asignatura/crear-asignatura.component';
import { AsignarAsignaturaComponent } from './asignar-asignatura/asignar-asignatura.component';

const routes: Routes = [
  {path: '',redirectTo: 'portada', pathMatch: 'full'}, 
  {path: 'portada', component: PortadaComponent},
  {path: 'crear-docente', component: CrearDocenteComponent},
  {path: 'crear-asignatura', component: CrearAsignaturaComponent},
  {path: 'asignar-asignatura', component: AsignarAsignaturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
