import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePickingAdminComponent } from './detalle-picking-admin.component';

describe('DetallePickingAdminComponent', () => {
  let component: DetallePickingAdminComponent;
  let fixture: ComponentFixture<DetallePickingAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePickingAdminComponent]
    });
    fixture = TestBed.createComponent(DetallePickingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
