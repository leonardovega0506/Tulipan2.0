import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSurtidorAdminComponent } from './detalle-surtidor-admin.component';

describe('DetalleSurtidorAdminComponent', () => {
  let component: DetalleSurtidorAdminComponent;
  let fixture: ComponentFixture<DetalleSurtidorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSurtidorAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleSurtidorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
