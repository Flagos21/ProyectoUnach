import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaAcademicaComponent } from './Components/carga-academica/carga-academica.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';

//Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo: 'carga-academica', pathMatch: 'full'},
  { path: 'carga-academica', component: CargaAcademicaComponent },
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'busqueda', component: BusquedaComponent},

  //{path: '**', component: PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
