import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeProfesorComponent } from './Components/ComponentesProfesor/home-profesor/home-profesor.component';
import { NuevasPracticasComponent } from './Components/ComponentesProfesor/nuevas-practicas/nuevas-practicas.component';
import { PracticasPropuestasComponent } from './Components/ComponentesProfesor/practicas-propuestas/practicas-propuestas.component';
import { IngresarPracticasComponent } from './Components/ComponentesProfesor/ingresar-practicas/ingresar-practicas.component';
import { SolicitanteInicialComponent } from './Components/ComponentesProfesor/solicitante-inicial/solicitante-inicial.component';
import { SolicitanteIntermedioComponent } from './Components/ComponentesProfesor/solicitante-intermedio/solicitante-intermedio.component';
import { SolicitanteFinalComponent } from './Components/ComponentesProfesor/solicitante-final/solicitante-final.component';
import { ProgresoInicialComponent } from './Components/ComponentesProfesor/progreso-inicial/progreso-inicial.component';
import { combineLatest } from 'rxjs';
import { ProgresoIntermedioComponent } from './Components/ComponentesProfesor/progreso-intermedio/progreso-intermedio.component';
import { ProgresoFinalComponent } from './Components/ComponentesProfesor/progreso-final/progreso-final.component';
import { VerBitacoraComponent } from './Components/ComponentesProfesor/ver-bitacora/ver-bitacora.component';
import { GestionarPracticasComponent } from './Components/ComponentesProfesor/gestionar-practicas/gestionar-practicas.component';

// Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},


// Rutas de navegacion 'ComponentesProfesor'
  {path: 'home-profesor', component: HomeProfesorComponent},
  {path: 'nuevas-practicas', component: NuevasPracticasComponent},
  {path: 'practicas-propuestas', component: PracticasPropuestasComponent},
  {path: 'ingresar-practicas', component: IngresarPracticasComponent},
  {path: 'gestionar-practicas', component: GestionarPracticasComponent},
  {path: 'solicitante-inicial', component: SolicitanteInicialComponent},
  {path: 'solicitante-intermedio', component: SolicitanteIntermedioComponent},
  {path: 'solicitante-final', component: SolicitanteFinalComponent},
  {path: 'progreso-inicial', component: ProgresoInicialComponent},
  {path: 'progreso-intermedio', component: ProgresoIntermedioComponent},
  {path: 'progreso-final', component: ProgresoFinalComponent},
  {path: 'ver-bitacora', component: VerBitacoraComponent},

// Rutas 404
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
