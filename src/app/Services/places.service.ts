import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import Place from '../interfaces/place.interface';
import Bitacora from '../interfaces/place.interface';



@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place) {
    const placeRef = collection(this.firestore, 'practicas');
    return addDoc(placeRef, place);
  }
  addBitacora(bitacora: Bitacora) {
    const bitacoraRef = collection(this.firestore, 'bitacora');
    return addDoc(bitacoraRef, bitacora);
  }

}


