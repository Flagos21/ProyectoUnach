import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './Components/portada/portada.component';
import { CrearDocenteComponent } from './Components/crear-docente/crear-docente.component';
import { CrearAsignaturaComponent } from './Components/crear-asignatura/crear-asignatura.component';
import { AsignarAsignaturaComponent } from './Components/asignar-asignatura/asignar-asignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    CrearDocenteComponent,
    CrearAsignaturaComponent,
    AsignarAsignaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
