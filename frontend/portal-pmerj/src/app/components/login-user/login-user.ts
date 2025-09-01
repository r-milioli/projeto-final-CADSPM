import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { AuthService } from '../../services/auth';
import { LoginRequest, CadastroRequest } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './login-user.html',
  styleUrl: './login-user.css'
})
export class LoginUserComponent {
  credentials: LoginRequest = {
    email: '',
    senha: ''
  };

  cadastroData: CadastroRequest = {
    nome: '',
    email: '',
    telefone: '',
    documento: '',
    senha: ''
  };

  loading = false;
  cadastroLoading = false;
  errorMessage = '';
  cadastroError = '';
  showCadastro = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    console.log('LoginUserComponent inicializado');
  }

  voltarAoInicio(): void {
    console.log('voltarAoInicio chamado');
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    console.log('onSubmit chamado');
    if (!this.credentials.email || !this.credentials.senha) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido:', response);
        this.loading = false;
        this.router.navigate(['/user-dashboard']);
      },
      error: (error) => {
        console.log('Erro no login:', error);
        this.loading = false;
        this.errorMessage = error.error?.erro || 'Erro ao fazer login. Tente novamente.';
      }
    });
  }

  onCadastro(event?: Event): void {
    console.log('onCadastro chamado', event);
    
    if (event) {
      event.preventDefault();
      console.log('preventDefault executado');
    }
    
    if (!this.cadastroData.nome || !this.cadastroData.email || !this.cadastroData.senha) {
      this.cadastroError = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    console.log('Iniciando cadastro...');
    this.cadastroLoading = true;
    this.cadastroError = '';

    this.authService.cadastrar(this.cadastroData).subscribe({
      next: (response) => {
        console.log('Cadastro bem-sucedido:', response);
        this.cadastroLoading = false;
        // Fecha o modal e força detecção (zoneless)
        this.fecharModalCadastro();
        this.cdr.detectChanges();
        this.errorMessage = '';
        alert('Cadastro realizado com sucesso! Faça login para continuar.');
        
        // Limpar dados do cadastro
        this.cadastroData = {
          nome: '',
          email: '',
          telefone: '',
          documento: '',
          senha: ''
        };
        console.log('Modal fechado e dados limpos');
      },
      error: (error) => {
        console.log('Erro no cadastro:', error);
        this.cadastroLoading = false;
        this.cadastroError = error.error?.erro || 'Erro ao realizar cadastro. Tente novamente.';
      }
    });
  }

  fecharModalCadastro(): void {
    this.showCadastro = false;
    // Aqui você pode adicionar lógica extra se necessário para fechar o modal de cadastro
    // Por exemplo, resetar outros estados ou emitir eventos
    console.log('Modal de cadastro fechado');
    // Reset seguro do estado do formulário
    this.cadastroLoading = false;
    this.cadastroError = '';
    this.cadastroData = {
      nome: '',
      email: '',
      telefone: '',
      documento: '',
      senha: ''
    };
  }

}
