export interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  documento?: string;
  tipo_usuario: 'ADMIN' | 'CIDADÃO';
  criado_em: string;
  atualizado_em: string;
}

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  usuario: Usuario;
}

export interface CadastroRequest {
  nome: string;
  email: string;
  telefone?: string;
  documento?: string;
  senha: string;
}
