import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    console.log('AuthGuard.canActivate() chamado');
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('isAuthenticated:', isAuthenticated);
    
    if (isAuthenticated) {
      console.log('Usuário autenticado, permitindo acesso');
      return true;
    } else {
      console.log('Usuário não autenticado, redirecionando para /login-user');
      // Redireciona para login se não estiver autenticado
      this.router.navigate(['/login-user']);
      return false;
    }
  }
}
