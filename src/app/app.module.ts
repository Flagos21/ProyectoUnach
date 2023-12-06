import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './Components/portada/portada.component';
import { CrearDocenteComponent } from './Components/crear-docente/crear-docente.component';
import { CrearAsignaturaComponent } from './Components/crear-asignatura/crear-asignatura.component';
import { AsignarAsignaturaComponent } from './Components/asignar-asignatura/asignar-asignatura.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { ReactiveFormsModule } from '@angular/forms';
import { PruebasComponent } from './Components/pruebas/pruebas.component';
import { BarnavComponent } from './Components/barnav/barnav.component';
import { ListarAsignaturaComponent } from './Components/listar-asignatura/listar-asignatura.component';
import { ListarDocentesComponent } from './listar-docentes/listar-docentes.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    CrearDocenteComponent,
    CrearAsignaturaComponent,
    AsignarAsignaturaComponent,
    PruebasComponent,
    BarnavComponent,
    ListarAsignaturaComponent,
    ListarDocentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"proyecto-unach","appId":"1:341018038115:web:9879e451758c5224ff4d56","storageBucket":"proyecto-unach.appspot.com","apiKey":"AIzaSyDJLl63eIqm3UZbAgnQwDQa6m_lt6RhfMs","authDomain":"proyecto-unach.firebaseapp.com","messagingSenderId":"341018038115","measurementId":"G-VQ9B7YG3Y9"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
