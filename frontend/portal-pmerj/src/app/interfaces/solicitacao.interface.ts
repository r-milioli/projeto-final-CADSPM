export interface AutorizacaoEvento {
  id: number;
  usuario_id: number;
  protocolo: string;
  titulo: string;
  descricao?: string;
  tipo_evento?: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep?: string;
  data_inicio: string;
  data_fim: string;
  publico_estimado?: number;
  observacoes?: string;
  status: 'RECEBIDA' | 'EM_ANALISE' | 'PENDENTE' | 'APROVADA' | 'RECUSADA' | 'FINALIZADA' | 'CANCELADA';
  pendencia_obs?: string;
  criado_em: string;
  atualizado_em: string;
}

export interface SolicitacaoPalestra {
  id: number;
  usuario_id: number;
  protocolo: string;
  organizacao?: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep?: string;
  temas: string;
  publico_alvo?: string;
  qtd_pessoas?: number;
  data_sugerida: string;
  observacoes?: string;
  status: 'RECEBIDA' | 'EM_ANALISE' | 'AGENDADA' | 'RECUSADA' | 'FINALIZADA' | 'CANCELADA';
  criado_em: string;
  atualizado_em: string;
}

export interface NovaAutorizacaoEvento {
  titulo: string;
  descricao?: string;
  tipo_evento?: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep?: string;
  data_inicio: string;
  data_fim: string;
  publico_estimado?: number;
  observacoes?: string;
}

export interface NovaSolicitacaoPalestra {
  organizacao?: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep?: string;
  temas: string;
  publico_alvo?: string;
  qtd_pessoas?: number;
  data_sugerida: string;
  observacoes?: string;
}
