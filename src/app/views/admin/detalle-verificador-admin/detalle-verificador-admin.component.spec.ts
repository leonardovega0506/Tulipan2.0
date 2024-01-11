import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVerificadorAdminComponent } from './detalle-verificador-admin.component';

describe('DetalleVerificadorAdminComponent', () => {
  let component: DetalleVerificadorAdminComponent;
  let fixture: ComponentFixture<DetalleVerificadorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleVerificadorAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleVerificadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
