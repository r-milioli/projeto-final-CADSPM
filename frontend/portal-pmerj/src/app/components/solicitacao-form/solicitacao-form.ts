import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-solicitacao-form',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './solicitacao-form.html',
  styleUrl: './solicitacao-form.css'
})
export class SolicitacaoFormComponent {
  activeTab: 'nada-opor' | 'palestra' = 'nada-opor';

  constructor(private router: Router) {}

  setActiveTab(tab: 'nada-opor' | 'palestra'): void {
    this.activeTab = tab;
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }

  enviarSolicitacao(): void {
    // Aqui você implementaria a lógica para enviar a solicitação
    console.log('Enviando solicitação:', this.activeTab);
    
    // Simular envio bem-sucedido
    alert('Solicitação enviada com sucesso!');
    this.router.navigate(['/user-dashboard']);
  }
}
