import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVerificadorAdminComponent } from './lista-verificador-admin.component';

describe('ListaVerificadorAdminComponent', () => {
  let component: ListaVerificadorAdminComponent;
  let fixture: ComponentFixture<ListaVerificadorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVerificadorAdminComponent]
    });
    fixture = TestBed.createComponent(ListaVerificadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
