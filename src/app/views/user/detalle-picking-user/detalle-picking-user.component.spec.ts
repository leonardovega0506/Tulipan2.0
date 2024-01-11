import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePickingUserComponent } from './detalle-picking-user.component';

describe('DetallePickingUserComponent', () => {
  let component: DetallePickingUserComponent;
  let fixture: ComponentFixture<DetallePickingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePickingUserComponent]
    });
    fixture = TestBed.createComponent(DetallePickingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
