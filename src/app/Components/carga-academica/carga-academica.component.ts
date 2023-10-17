import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga-academica',
  templateUrl: './carga-academica.component.html',
  styleUrls: ['./carga-academica.component.css']
})
export class CargaAcademicaComponent implements OnInit {

constructor(private router:Router){}

ngOnInit(){
}


  navegar() {
  this.router.navigate(['/usuarios']);
  }
}