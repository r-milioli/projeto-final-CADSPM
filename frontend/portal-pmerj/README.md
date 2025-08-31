# Portal PMERJ - Frontend Angular

Este é o frontend do Portal da Polícia Militar do Estado do Rio de Janeiro, desenvolvido em Angular.

## 🚀 Tecnologias Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Linguagem de programação
- **CSS3** - Estilização com variáveis CSS e design responsivo
- **Font Awesome** - Ícones
- **RxJS** - Programação reativa
- **Angular Router** - Navegação entre páginas
- **Angular Forms** - Formulários reativos

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── home/                 # Página inicial
│   │   ├── login-user/           # Login de cidadão
│   │   ├── login-admin/          # Login de administrador
│   │   ├── dashboard-admin/      # Dashboard administrativo
│   │   ├── user-dashboard/       # Dashboard do usuário
│   │   ├── solicitacao-form/     # Formulário de solicitação
│   │   └── header/               # Cabeçalho da aplicação
│   ├── services/
│   │   ├── auth.ts              # Serviço de autenticação
│   │   └── api.ts               # Serviço de comunicação com API
│   ├── interfaces/
│   │   ├── usuario.interface.ts # Interfaces de usuário
│   │   └── solicitacao.interface.ts # Interfaces de solicitações
│   ├── app.routes.ts            # Configuração de rotas
│   ├── app.config.ts            # Configuração da aplicação
│   └── app.ts                   # Componente principal
├── styles.css                   # Estilos globais
└── main.ts                      # Ponto de entrada
```

## 🎨 Design System

### Cores Principais
- **Azul Primário**: #1e3a8a
- **Azul Claro**: #3b82f6
- **Azul Escuro**: #1e40af
- **Cinza Secundário**: #64748b
- **Cinza Claro**: #f8fafc
- **Cinza Médio**: #e2e8f0

### Componentes
- **Cards**: Design moderno com sombras e hover effects
- **Botões**: Estilos consistentes com estados hover
- **Formulários**: Validação visual e feedback de erro
- **Badges**: Indicadores de status coloridos

## 🔧 Funcionalidades

### Páginas Principais
1. **Home** - Menu principal com opções de navegação
2. **Login Cidadão** - Autenticação e cadastro de usuários
3. **Login Admin** - Acesso administrativo
4. **Dashboard Admin** - Gestão de solicitações
5. **User Dashboard** - Acompanhamento de solicitações
6. **Formulário de Solicitação** - Criação de novas solicitações

### Características
- ✅ Design responsivo
- ✅ Autenticação JWT
- ✅ Navegação protegida
- ✅ Formulários validados
- ✅ Feedback visual
- ✅ Animações suaves

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm start

# Build para produção
npm run build
```

### Configuração
O frontend se conecta ao backend na URL: `http://localhost:4000/api`

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔐 Segurança

- Autenticação via JWT
- Proteção de rotas
- Validação de formulários
- Sanitização de dados

## 📊 Status das Solicitações

- **RECEBIDA** - Solicitação recebida
- **EM_ANALISE** - Em análise
- **PENDENTE** - Aguardando documentos
- **APROVADA** - Aprovada
- **RECUSADA** - Recusada
- **FINALIZADA** - Finalizada
- **CANCELADA** - Cancelada

## 👥 Usuários de Teste

### Administrador
- **E-mail**: admin@pmerj.rj.gov
- **Senha**: 123456

### Cidadão
- **E-mail**: joao@email.com
- **Senha**: 123456

## 🎯 Objetivos do Projeto

Este projeto demonstra o conhecimento em:
- Desenvolvimento Angular
- TypeScript
- CSS moderno
- Integração com APIs
- Autenticação e autorização
- Design responsivo
- Boas práticas de desenvolvimento

---

**Desenvolvido para o curso de Angular - Projeto Final**
