import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAsignaturasComponent } from './asignar-asignaturas.component';

describe('AsignarAsignaturasComponent', () => {
  let component: AsignarAsignaturasComponent;
  let fixture: ComponentFixture<AsignarAsignaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarAsignaturasComponent]
    });
    fixture = TestBed.createComponent(AsignarAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
