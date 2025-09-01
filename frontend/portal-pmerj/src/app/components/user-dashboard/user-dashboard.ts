import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { DashboardService, DashboardStats } from '../../services/dashboard.service';
import { AutorizacaoEvento, SolicitacaoPalestra } from '../../interfaces/solicitacao.interface';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css'
})
export class UserDashboardComponent implements OnInit {
  dashboardData: DashboardStats | null = null;
  loading = true;
  error = '';

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('UserDashboard.ngOnInit() - iniciando');
    this.carregarDados();
  }

  carregarDados() {
    this.loading = true;
    this.error = '';
    
    // Debug: verificar token
    const token = localStorage.getItem('token');
    console.log('UserDashboard.carregarDados() - token:', token);
    console.log('UserDashboard.carregarDados() - user:', localStorage.getItem('user'));
    console.log('UserDashboard.carregarDados() - loading inicial:', this.loading);
    
    this.dashboardService.carregarDadosDashboard().subscribe({
      next: (data) => {
        console.log('UserDashboard.carregarDados() - dados recebidos:', data);
        console.log('UserDashboard.carregarDados() - antes de definir loading=false');
        this.dashboardData = data;
        this.loading = false;
        console.log('UserDashboard.carregarDados() - loading após dados:', this.loading);
        console.log('UserDashboard.carregarDados() - dashboardData:', this.dashboardData);
        
        // Forçar detecção de mudanças
        this.cdr.detectChanges();
        console.log('UserDashboard.carregarDados() - detecção de mudanças forçada');
      },
      error: (error) => {
        console.error('Erro ao carregar dados do dashboard:', error);
        this.error = 'Erro ao carregar dados. Tente novamente.';
        this.loading = false;
        console.log('UserDashboard.carregarDados() - loading após erro:', this.loading);
        
        // Forçar detecção de mudanças
        this.cdr.detectChanges();
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'RECEBIDA':
      case 'EM_ANALISE':
      case 'PENDENTE':
        return 'status-pending';
      case 'APROVADA':
      case 'AGENDADA':
        return 'status-approved';
      case 'RECUSADA':
        return 'status-rejected';
      case 'FINALIZADA':
        return 'status-completed';
      case 'CANCELADA':
        return 'status-cancelled';
      default:
        return 'status-default';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'RECEBIDA':
        return 'Recebida';
      case 'EM_ANALISE':
        return 'Em Análise';
      case 'PENDENTE':
        return 'Pendente';
      case 'APROVADA':
        return 'Aprovada';
      case 'AGENDADA':
        return 'Agendada';
      case 'RECUSADA':
        return 'Recusada';
      case 'FINALIZADA':
        return 'Finalizada';
      case 'CANCELADA':
        return 'Cancelada';
      default:
        return status;
    }
  }

  formatarData(data: string): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }

  navegarParaNovaSolicitacao() {
    this.router.navigate(['/solicitacao-form']);
  }
}
