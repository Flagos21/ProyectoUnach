import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { CargaAcademicaComponent } from './Components/carga-academica/carga-academica.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { CrearDocenteComponent } from './crear-docente/crear-docente.component';
import { CrearAsisgnaturaComponent } from './crear-asisgnatura/crear-asisgnatura.component';
import { AsignarAsignaturasComponent } from './asignar-asignaturas/asignar-asignaturas.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CargaAcademicaComponent,
    BusquedaComponent,
    CrearDocenteComponent,
    CrearAsisgnaturaComponent,
    AsignarAsignaturasComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
