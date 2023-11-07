import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAsignaturaComponent } from './asignar-asignatura.component';

describe('AsignarAsignaturaComponent', () => {
  let component: AsignarAsignaturaComponent;
  let fixture: ComponentFixture<AsignarAsignaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarAsignaturaComponent]
    });
    fixture = TestBed.createComponent(AsignarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
