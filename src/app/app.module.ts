import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListaPickingAdminComponent } from './views/admin/lista-picking-admin/lista-picking-admin.component';
import { DetallePickingAdminComponent } from './views/admin/detalle-picking-admin/detalle-picking-admin.component';
import { ListaRegistroAdminComponent } from './views/admin/lista-registro-admin/lista-registro-admin.component';
import { DetalleRegistroAdminComponent } from './views/admin/detalle-registro-admin/detalle-registro-admin.component';
import { ListaSurtidorAdminComponent } from './views/admin/lista-surtidor-admin/lista-surtidor-admin.component';
import { DetalleSurtidorAdminComponent } from './views/admin/detalle-surtidor-admin/detalle-surtidor-admin.component';
import { ListaVerificadorAdminComponent } from './views/admin/lista-verificador-admin/lista-verificador-admin.component';
import { DetalleVerificadorAdminComponent } from './views/admin/detalle-verificador-admin/detalle-verificador-admin.component';
import { DashboardUserComponent } from './views/user/dashboard-user/dashboard-user.component';
import { DetallePickingUserComponent } from './views/user/detalle-picking-user/detalle-picking-user.component';
import { LoginAdminComponent } from './views/login/login-admin/login-admin.component';
import { SidebarAdminComponent } from './views/admin/sidebar-admin/sidebar-admin.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { NavbarLoginComponent } from './views/user/navbar-login/navbar-login.component';
import { authInterceptorProviders } from './service/util/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    ListaPickingAdminComponent,
    DetallePickingAdminComponent,
    ListaRegistroAdminComponent,
    DetalleRegistroAdminComponent,
    ListaSurtidorAdminComponent,
    DetalleSurtidorAdminComponent,
    ListaVerificadorAdminComponent,
    DetalleVerificadorAdminComponent,
    DashboardUserComponent,
    DetallePickingUserComponent,
    LoginAdminComponent,
    SidebarAdminComponent,
    NavbarLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [DatePipe,
    authInterceptorProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
