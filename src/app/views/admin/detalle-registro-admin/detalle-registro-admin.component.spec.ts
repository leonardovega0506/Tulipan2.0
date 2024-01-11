import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRegistroAdminComponent } from './detalle-registro-admin.component';

describe('DetalleRegistroAdminComponent', () => {
  let component: DetalleRegistroAdminComponent;
  let fixture: ComponentFixture<DetalleRegistroAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleRegistroAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleRegistroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
