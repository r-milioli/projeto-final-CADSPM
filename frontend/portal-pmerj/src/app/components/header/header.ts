import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  currentUser: Usuario | null = null;
  isDropdownOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.login-dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  getBreadcrumbText(): string {
    const currentRoute = this.router.url;
    
    switch (currentRoute) {
      case '/':
        return 'Página Inicial';
      case '/login-user':
        return 'Login Cidadão';
      case '/login-admin':
        return 'Login Administrador';
      case '/dashboard-admin':
        return 'Dashboard Administrativo';
      case '/user-dashboard':
        return 'Meu Portal';
      case '/solicitacao-form':
        return 'Nova Solicitação';
      default:
        return 'Portal PMERJ';
    }
  }
}
