import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { AuthService } from '../../services/auth';
import { LoginRequest } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './login-admin.html',
  styleUrl: './login-admin.css'
})
export class LoginAdminComponent {
  credentials: LoginRequest = {
    email: '',
    senha: ''
  };

  loading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  voltarAoInicio(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (!this.credentials.email || !this.credentials.senha) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.loading = false;
        
        // Verificar se é admin
        if (response.usuario.tipo_usuario === 'ADMIN') {
          this.router.navigate(['/dashboard-admin']);
        } else {
          this.errorMessage = 'Acesso negado. Apenas administradores podem acessar esta área.';
          this.authService.logout();
        }
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error.error?.erro || 'Erro ao fazer login. Tente novamente.';
      }
    });
  }
}
