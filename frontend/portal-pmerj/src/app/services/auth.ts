import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api';
import { Usuario, LoginRequest, CadastroRequest } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<Usuario | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private apiService: ApiService) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUserSubject.next(user);
      } catch (error) {
        this.logout();
      }
    }
  }

  login(credentials: LoginRequest): Observable<any> {
    return new Observable(observer => {
      this.apiService.login(credentials).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.usuario));
          this.currentUserSubject.next(response.usuario);
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  cadastrar(userData: CadastroRequest): Observable<any> {
    return this.apiService.cadastrar(userData);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): Usuario | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    const user = this.getCurrentUser();
    console.log('AuthService.isAuthenticated() - user:', user);
    const result = !!user;
    console.log('AuthService.isAuthenticated() - result:', result);
    return result;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.tipo_usuario === 'ADMIN';
  }

  isCidadao(): boolean {
    const user = this.getCurrentUser();
    return user?.tipo_usuario === 'CIDADÃO';
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
