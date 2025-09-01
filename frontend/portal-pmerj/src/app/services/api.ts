import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, LoginRequest, LoginResponse, CadastroRequest } from '../interfaces/usuario.interface';
import { AutorizacaoEvento, SolicitacaoPalestra, NovaAutorizacaoEvento, NovaSolicitacaoPalestra } from '../interfaces/solicitacao.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  // Métodos de autenticação
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, credentials);
  }

  cadastrar(userData: CadastroRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/cadastrar`, userData);
  }

  getProfile(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/auth/me`, { headers: this.getHeaders() });
  }

  // Métodos para autorizações de eventos
  listarAutorizacoesUsuario(): Observable<AutorizacaoEvento[]> {
    console.log('ApiService.listarAutorizacoesUsuario() - chamando endpoint');
    return this.http.get<AutorizacaoEvento[]>(`${this.baseUrl}/eventos/autorizacao`, { headers: this.getHeaders() });
  }

  criarAutorizacaoEvento(data: NovaAutorizacaoEvento): Observable<any> {
    return this.http.post(`${this.baseUrl}/eventos/autorizacao`, data, { headers: this.getHeaders() });
  }

  obterAutorizacaoPorProtocolo(protocolo: string): Observable<AutorizacaoEvento> {
    return this.http.get<AutorizacaoEvento>(`${this.baseUrl}/eventos/autorizacao/${protocolo}`, { headers: this.getHeaders() });
  }

  editarAutorizacaoEvento(protocolo: string, data: NovaAutorizacaoEvento): Observable<any> {
    return this.http.put(`${this.baseUrl}/eventos/autorizacao/${protocolo}`, data, { headers: this.getHeaders() });
  }

  cancelarAutorizacaoEvento(protocolo: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eventos/autorizacao/${protocolo}`, { headers: this.getHeaders() });
  }

  // Métodos para solicitações de palestras
  listarPalestrasUsuario(): Observable<SolicitacaoPalestra[]> {
    console.log('ApiService.listarPalestrasUsuario() - chamando endpoint');
    return this.http.get<SolicitacaoPalestra[]>(`${this.baseUrl}/palestras`, { headers: this.getHeaders() });
  }

  criarSolicitacaoPalestra(data: NovaSolicitacaoPalestra): Observable<any> {
    return this.http.post(`${this.baseUrl}/palestras`, data, { headers: this.getHeaders() });
  }

  obterPalestraPorProtocolo(protocolo: string): Observable<SolicitacaoPalestra> {
    return this.http.get<SolicitacaoPalestra>(`${this.baseUrl}/palestras/${protocolo}`, { headers: this.getHeaders() });
  }

  editarSolicitacaoPalestra(protocolo: string, data: NovaSolicitacaoPalestra): Observable<any> {
    return this.http.put(`${this.baseUrl}/palestras/${protocolo}`, data, { headers: this.getHeaders() });
  }

  cancelarSolicitacaoPalestra(protocolo: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/palestras/${protocolo}`, { headers: this.getHeaders() });
  }

  // Métodos administrativos
  listarAutorizacoes(filtros?: any): Observable<AutorizacaoEvento[]> {
    let url = `${this.baseUrl}/admin/eventos/autorizacao`;
    if (filtros) {
      const params = new URLSearchParams(filtros);
      url += `?${params.toString()}`;
    }
    return this.http.get<AutorizacaoEvento[]>(url, { headers: this.getHeaders() });
  }

  alterarStatusAutorizacao(protocolo: string, status: string, pendencia_obs?: string): Observable<any> {
    const data = pendencia_obs ? { status, pendencia_obs } : { status };
    return this.http.patch(`${this.baseUrl}/admin/eventos/autorizacao/${protocolo}/status`, data, { headers: this.getHeaders() });
  }

  listarPalestras(filtros?: any): Observable<SolicitacaoPalestra[]> {
    let url = `${this.baseUrl}/admin/palestras`;
    if (filtros) {
      const params = new URLSearchParams(filtros);
      url += `?${params.toString()}`;
    }
    return this.http.get<SolicitacaoPalestra[]>(url, { headers: this.getHeaders() });
  }

  alterarStatusPalestra(protocolo: string, status: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/admin/palestras/${protocolo}/status`, { status }, { headers: this.getHeaders() });
  }

  // Método para obter headers com token
  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log('ApiService.getHeaders() - token:', token);
    
    if (!token) {
      console.warn('ApiService.getHeaders() - Token não encontrado no localStorage');
    }
    
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
