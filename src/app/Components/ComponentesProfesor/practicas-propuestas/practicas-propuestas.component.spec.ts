import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticasPropuestasComponent } from './practicas-propuestas.component';

describe('PracticasPropuestasComponent', () => {
  let component: PracticasPropuestasComponent;
  let fixture: ComponentFixture<PracticasPropuestasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticasPropuestasComponent]
    });
    fixture = TestBed.createComponent(PracticasPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
