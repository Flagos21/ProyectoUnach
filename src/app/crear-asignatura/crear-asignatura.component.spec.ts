import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsignaturaComponent } from './crear-asignatura.component';

describe('CrearAsignaturaComponent', () => {
  let component: CrearAsignaturaComponent;
  let fixture: ComponentFixture<CrearAsignaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAsignaturaComponent]
    });
    fixture = TestBed.createComponent(CrearAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
