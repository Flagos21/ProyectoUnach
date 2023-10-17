import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaAcademicaComponent } from './Components/carga-academica/carga-academica.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

//Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo: 'carga-academica', pathMatch: 'full'},
  { path: 'carga-academica', component: CargaAcademicaComponent },
  {path: 'usuarios', component: UsuariosComponent},
  //{path: '**', component: PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
