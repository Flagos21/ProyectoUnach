import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './Components/portada/portada.component';
import { CrearDocenteComponent } from './Components/crear-docente/crear-docente.component';
import { CrearAsignaturaComponent } from './Components/crear-asignatura/crear-asignatura.component';
import { AsignarAsignaturaComponent } from './Components/asignar-asignatura/asignar-asignatura.component';
import { ListarAsignaturaComponent } from './Components/listar-asignatura/listar-asignatura.component';
import { BarraLateralComponent } from './Components/barra-lateral/barra-lateral.component';
import { ListarDocentesComponent } from './listar-docentes/listar-docentes.component';

const routes: Routes = [
  {path: '',redirectTo: 'portada', pathMatch: 'full'}, 
  {path: 'portada', component: PortadaComponent},
  {path: 'crear-docente', component: CrearDocenteComponent},
  {path: 'crear-asignatura', component: CrearAsignaturaComponent},
  {path: 'asignar-asignatura', component: AsignarAsignaturaComponent},
  {path: 'listar-asignatura', component: ListarAsignaturaComponent},
  {path: 'barra-lateral', component: BarraLateralComponent},
  {path: 'listar-docentes', component: ListarDocentesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
