import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisEmpresasComponent } from './mis-empresas/mis-empresas.component';
import { MisEmpleadosComponent } from './mis-empleados/mis-empleados.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'empresas', component: MisEmpresasComponent, canActivate: [AuthGuard] },
  { path: 'empleados', component: MisEmpleadosComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
