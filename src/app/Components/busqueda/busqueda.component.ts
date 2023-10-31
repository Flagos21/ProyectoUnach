import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  constructor(private router:Router){}
  
  ngOnInit(){
  }
  
  
    navegar() {
    this.router.navigate(['/usuarios']);
    

    }
  }
