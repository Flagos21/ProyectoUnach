import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPracticasComponent } from './ingresar-practicas.component';

describe('IngresarPracticasComponent', () => {
  let component: IngresarPracticasComponent;
  let fixture: ComponentFixture<IngresarPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarPracticasComponent]
    });
    fixture = TestBed.createComponent(IngresarPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
