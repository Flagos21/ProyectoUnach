import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaAcademicaComponent } from './carga-academica.component';

describe('CargaAcademicaComponent', () => {
  let component: CargaAcademicaComponent;
  let fixture: ComponentFixture<CargaAcademicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaAcademicaComponent]
    });
    fixture = TestBed.createComponent(CargaAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
