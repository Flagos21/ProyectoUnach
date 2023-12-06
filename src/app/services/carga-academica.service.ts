import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import Asignatura from '../Components/interfaces/asignatura.interface';
import Docente from '../Components/interfaces/docente.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaAcademicaService {

  constructor(private firestore: Firestore) { }


  addAsignatura(asignatura: Asignatura) {
    const asignaturaRef = collection(this.firestore, 'cargaacademica_ASIGNATURA');
    return addDoc(asignaturaRef, asignatura);
  }

  getAsignatura(): Observable<Asignatura[]>{
    const asignaturaRef = collection(this.firestore, 'cargaacademica_ASIGNATURA');
    return collectionData(asignaturaRef, {idField: 'id'}) as Observable<Asignatura[]>;
  }

  addDocente(docente: Docente) {
    const docenteRef = collection(this.firestore, 'cargaacademica_DOCENTES');
    return addDoc(docenteRef, docente);
  }

  getDocente(): Observable<Docente[]>{
    const docenteRef = collection(this.firestore, 'cargaacademica_DOCENTES');
    return collectionData(docenteRef, {idField: 'id'}) as Observable<Docente[]>;
  }

}
