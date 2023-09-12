import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeProfesorComponent } from './Components/ComponentesProfesor/home-profesor/home-profesor.component';
import { NuevasPracticasComponent } from './Components/ComponentesProfesor/nuevas-practicas/nuevas-practicas.component';
import { PracticasPropuestasComponent } from './Components/ComponentesProfesor/practicas-propuestas/practicas-propuestas.component';
import { IngresarPracticasComponent } from './Components/ComponentesProfesor/ingresar-practicas/ingresar-practicas.component';
import { GestionarPracticasComponent } from './Components/ComponentesProfesor/gestionar-practicas/gestionar-practicas.component';
import { ProgresoInicialComponent } from './Components/ComponentesProfesor/progreso-inicial/progreso-inicial.component';
import { ProgresoIntermedioComponent } from './Components/ComponentesProfesor/progreso-intermedio/progreso-intermedio.component';
import { ProgresoFinalComponent } from './Components/ComponentesProfesor/progreso-final/progreso-final.component';
import { VerBitacoraComponent } from './Components/ComponentesProfesor/ver-bitacora/ver-bitacora.component';
import { SolicitanteInicialComponent } from './Components/ComponentesProfesor/solicitante-inicial/solicitante-inicial.component';
import { SolicitanteIntermedioComponent } from './Components/ComponentesProfesor/solicitante-intermedio/solicitante-intermedio.component';
import { SolicitanteFinalComponent } from './Components/ComponentesProfesor/solicitante-final/solicitante-final.component';
import { PerfilComponent } from './Components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeProfesorComponent,
    NuevasPracticasComponent,
    PracticasPropuestasComponent,
    IngresarPracticasComponent,
    GestionarPracticasComponent,
    ProgresoInicialComponent,
    ProgresoIntermedioComponent,
    ProgresoFinalComponent,
    VerBitacoraComponent,
    SolicitanteInicialComponent,
    SolicitanteIntermedioComponent,
    SolicitanteFinalComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
