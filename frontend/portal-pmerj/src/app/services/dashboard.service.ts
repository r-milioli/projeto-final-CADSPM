import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { ApiService } from './api';
import { AutorizacaoEvento, SolicitacaoPalestra } from '../interfaces/solicitacao.interface';

export interface DashboardStats {
  totalAutorizacoes: number;
  totalPalestras: number;
  emAnalise: number;
  aprovadas: number;
  autorizacoes: AutorizacaoEvento[];
  palestras: SolicitacaoPalestra[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apiService: ApiService) {}

  carregarDadosDashboard(): Observable<DashboardStats> {
    return forkJoin({
      autorizacoes: this.apiService.listarAutorizacoesUsuario(),
      palestras: this.apiService.listarPalestrasUsuario()
    }).pipe(
      map(({ autorizacoes, palestras }) => {
        const totalAutorizacoes = autorizacoes.length;
        const totalPalestras = palestras.length;
        
        // Contar status de autorizações
        const emAnaliseAuth = autorizacoes.filter(a => 
          a.status === 'RECEBIDA' || a.status === 'EM_ANALISE' || a.status === 'PENDENTE'
        ).length;
        
        const aprovadasAuth = autorizacoes.filter(a => 
          a.status === 'APROVADA'
        ).length;
        
        // Contar status de palestras
        const emAnalisePal = palestras.filter(p => 
          p.status === 'RECEBIDA' || p.status === 'EM_ANALISE'
        ).length;
        
        const aprovadasPal = palestras.filter(p => 
          p.status === 'AGENDADA'
        ).length;
        
        return {
          totalAutorizacoes,
          totalPalestras,
          emAnalise: emAnaliseAuth + emAnalisePal,
          aprovadas: aprovadasAuth + aprovadasPal,
          autorizacoes,
          palestras
        };
      })
    );
  }
}
