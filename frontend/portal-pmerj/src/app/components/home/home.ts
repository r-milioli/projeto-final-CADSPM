import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  navigateToForm() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/solicitacao-form']);
    } else {
      this.router.navigate(['/login-user']);
    }
  }

  navigateToUserDashboard() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/user-dashboard']);
    } else {
      this.router.navigate(['/login-user']);
    }
  }

  navigateToUserLogin() {
    this.router.navigate(['/login-user']);
  }

  navigateToAdminLogin() {
    this.router.navigate(['/login-admin']);
  }
}
