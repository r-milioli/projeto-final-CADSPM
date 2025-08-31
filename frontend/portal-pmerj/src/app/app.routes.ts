import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginUserComponent } from './components/login-user/login-user';
import { LoginAdminComponent } from './components/login-admin/login-admin';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard';
import { SolicitacaoFormComponent } from './components/solicitacao-form/solicitacao-form';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { 
    path: 'dashboard-admin', 
    component: DashboardAdminComponent,
    canActivate: [AdminGuard]
  },
  { 
    path: 'user-dashboard', 
    component: UserDashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'solicitacao-form', 
    component: SolicitacaoFormComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];
