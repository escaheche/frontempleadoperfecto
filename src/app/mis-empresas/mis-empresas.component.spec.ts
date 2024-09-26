import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEmpresasComponent } from './mis-empresas.component';

describe('MisEmpresasComponent', () => {
  let component: MisEmpresasComponent;
  let fixture: ComponentFixture<MisEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
