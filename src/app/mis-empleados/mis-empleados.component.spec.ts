import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEmpleadosComponent } from './mis-empleados.component';

describe('MisEmpleadosComponent', () => {
  let component: MisEmpleadosComponent;
  let fixture: ComponentFixture<MisEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
