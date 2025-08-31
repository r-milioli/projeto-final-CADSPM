# 🚀 Instruções para Executar o Portal PMERJ

## Pré-requisitos

1. **Node.js** (versão 18 ou superior)
2. **npm** ou **yarn**
3. **Backend** rodando na porta 4000

## 📋 Passos para Execução

### 1. Instalar Dependências
```bash
npm install
```

### 2. Verificar Backend
Certifique-se de que o backend está rodando:
```bash
# No diretório backend/
npm start
```

### 3. Executar Frontend
```bash
npm start
```

O projeto será aberto automaticamente no navegador em `http://localhost:4200`

## 🔐 Credenciais de Teste

### Administrador
- **E-mail**: admin@pmerj.rj.gov
- **Senha**: 123456

### Cidadão
- **E-mail**: joao@email.com
- **Senha**: 123456

## 📱 Funcionalidades Testadas

### Página Inicial
- ✅ Menu com 3 seções
- ✅ Navegação para login
- ✅ Design responsivo

### Login
- ✅ Login de cidadão
- ✅ Login de administrador
- ✅ Cadastro de usuário
- ✅ Validação de formulários

### Navegação
- ✅ Header com informações do usuário
- ✅ Breadcrumb dinâmico
- ✅ Logout funcional

## 🎨 Design System

O projeto utiliza:
- **Cores**: Paleta azul (#1e3a8a)
- **Ícones**: Font Awesome
- **Layout**: CSS Grid e Flexbox
- **Responsividade**: Mobile-first

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm start

# Build de produção
npm run build:prod

# Testes
npm test

# Linting
npm run lint
```

## 📁 Estrutura de Arquivos

```
src/app/
├── components/          # Componentes da aplicação
├── services/           # Serviços (API, Auth)
├── interfaces/         # Interfaces TypeScript
├── app.routes.ts       # Configuração de rotas
└── app.config.ts       # Configuração da aplicação
```

## 🐛 Solução de Problemas

### Erro de CORS
Se houver erro de CORS, verifique se o backend está configurado corretamente.

### Erro de Compilação
```bash
# Limpar cache
rm -rf node_modules
npm install
```

### Porta em Uso
Se a porta 4200 estiver em uso:
```bash
ng serve --port 4201
```

## 📞 Suporte

Para dúvidas ou problemas, consulte:
- Documentação do Angular
- README.md do projeto
- Comentários no código

---

**Projeto Final - Curso Angular**
