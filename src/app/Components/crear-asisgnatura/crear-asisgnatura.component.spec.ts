import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsisgnaturaComponent } from './crear-asisgnatura.component';

describe('CrearAsisgnaturaComponent', () => {
  let component: CrearAsisgnaturaComponent;
  let fixture: ComponentFixture<CrearAsisgnaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAsisgnaturaComponent]
    });
    fixture = TestBed.createComponent(CrearAsisgnaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
