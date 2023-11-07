import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'

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
import { PerfilComponenteComponent } from './Components/perfil-componente/perfil-componente.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeEstudianteComponent } from './Components/ComponentesEstudiante/home-estudiante/home-estudiante.component';
import { InscribirPComponent } from './Components/ComponentesEstudiante/inscribir-p/inscribir-p.component';
import { PracticaInternaComponent } from './Components/ComponentesEstudiante/practica-interna/practica-interna.component';
import { PracticaExternaComponent } from './Components/ComponentesEstudiante/practica-externa/practica-externa.component';
import { MiPracticaComponent } from './Components/ComponentesEstudiante/mi-practica/mi-practica.component';
import { IngresarBitacoraComponent } from './Components/ComponentesEstudiante/ingresar-bitacora/ingresar-bitacora.component';
import { EstadoPComponent } from './Components/ComponentesEstudiante/estado-p/estado-p.component';
import { EstadoIComponent } from './Components/ComponentesEstudiante/estado-i/estado-i.component';
import { EstadoInComponent } from './Components/ComponentesEstudiante/estado-in/estado-in.component';
import { EstadoFComponent } from './Components/ComponentesEstudiante/estado-f/estado-f.component';
import { ReactiveFormsModule } from '@angular/forms';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

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
    PerfilComponenteComponent,
    HomeComponent,
    HomeEstudianteComponent,
    InscribirPComponent,
    PracticaInternaComponent,
    PracticaExternaComponent,
    MiPracticaComponent,
    IngresarBitacoraComponent,
    EstadoPComponent,
    EstadoIComponent,
    EstadoInComponent,
    EstadoFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyDJLl63eIqm3UZbAgnQwDQa6m_lt6RhfMs",
      authDomain: "proyecto-unach.firebaseapp.com",
      projectId: "proyecto-unach",
      storageBucket: "proyecto-unach.appspot.com",
      messagingSenderId: "341018038115",
      appId: "1:341018038115:web:9879e451758c5224ff4d56",
      measurementId: "G-VQ9B7YG3Y9"
    }),
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
