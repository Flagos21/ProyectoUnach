import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDocenteComponent } from './crear-docente.component';

describe('CrearDocenteComponent', () => {
  let component: CrearDocenteComponent;
  let fixture: ComponentFixture<CrearDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDocenteComponent]
    });
    fixture = TestBed.createComponent(CrearDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
