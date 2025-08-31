import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;
    } else {
      // Redireciona para login se não estiver autenticado ou não for admin
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login-admin']);
      } else {
        this.router.navigate(['/']);
      }
      return false;
    }
  }
}
