import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSurtidorAdminComponent } from './lista-surtidor-admin.component';

describe('ListaSurtidorAdminComponent', () => {
  let component: ListaSurtidorAdminComponent;
  let fixture: ComponentFixture<ListaSurtidorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSurtidorAdminComponent]
    });
    fixture = TestBed.createComponent(ListaSurtidorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
