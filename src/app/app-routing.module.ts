import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListaPickingAdminComponent } from './views/admin/lista-picking-admin/lista-picking-admin.component';
import { DetallePickingAdminComponent } from './views/admin/detalle-picking-admin/detalle-picking-admin.component';
import { ListaRegistroAdminComponent } from './views/admin/lista-registro-admin/lista-registro-admin.component';
import { ListaVerificadorAdminComponent } from './views/admin/lista-verificador-admin/lista-verificador-admin.component';
import { ListaSurtidorAdminComponent } from './views/admin/lista-surtidor-admin/lista-surtidor-admin.component';
import { DetalleSurtidorAdminComponent } from './views/admin/detalle-surtidor-admin/detalle-surtidor-admin.component';
import { DetalleVerificadorAdminComponent } from './views/admin/detalle-verificador-admin/detalle-verificador-admin.component';
import { DetalleRegistroAdminComponent } from './views/admin/detalle-registro-admin/detalle-registro-admin.component';
import { LoginAdminComponent } from './views/login/login-admin/login-admin.component';
import { DashboardUserComponent } from './views/user/dashboard-user/dashboard-user.component';
import { DetallePickingUserComponent } from './views/user/detalle-picking-user/detalle-picking-user.component';
import { AdminGuard } from './service/guards/admin.guard';

const routes: Routes = [
  {path:'',component:DashboardUserComponent},
  {path:'admin',canActivate:[AdminGuard],component:DashboardAdminComponent,children:[
    {path:'picking',component:ListaPickingAdminComponent},
    {path:'picking/:id',component:DetallePickingAdminComponent},
    {path:'registro',component:ListaRegistroAdminComponent},
    {path:'registro/:id',component:DetalleRegistroAdminComponent},
    {path:'surtidor',component:ListaSurtidorAdminComponent},
    {path:'surtidor/:id',component:DetalleSurtidorAdminComponent},
    {path:'verificador',component:ListaVerificadorAdminComponent},
    {path:'verificador/:id',component:DetalleVerificadorAdminComponent}
  ]},
  {path:'login',component:LoginAdminComponent},
  {path:'user',component:DetallePickingUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
