# Note App

Este é um aplicativo CRUD de Notas construído com React, TypeScript e Tailwind CSS, utilizando LocalStorage como banco de dados. A aplicação permite adicionar, editar, alterar a cor e excluir notas.

## Funcionalidades

- **Tela de Login**: Apenas o nome do usuário é necessário para fazer login.
- **CRUD de Notas**:
  - Adicionar novas notas.
  - Alterar a cor das notas.
  - Editar o conteúdo das notas.
  - Excluir notas.

## Images,

### Sign In
![SignIn](sign.png)

### Note
![SignIn](note.png)

## Tecnologias Utilizadas

- **Frontend**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Vite](https://vitejs.dev/)
  - [MUI](https://mui.com/) para componentes de interface
- **Linting e Formatação**:
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- **Controle de Dependências**:
  - [npm](https://www.npmjs.com/)
- **Ambiente de Desenvolvimento**:
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)

## Configuração e Execução

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Adicionar `note.localhost` no `/etc/hosts` para configuração do nginx:

```perl
### Passos para Configuração
1. Clone este repositório:
  ```sh
  git clone https://github.com/seu-usuario/note-app.git
  cd note-app
  ```

2. Execute o Docker Compose:
  ```sh
  docker-compose up --build
  ```

3. Abra seu navegador e acesse `http://note.localhost`.
```

### Estrutura do Projeto

├── public
├── src
│ ├── components
│ ├── hooks
│ ├── pages
│ ├── styles
│ ├── types
│ ├── utils
│ └── App.tsx
├── .dockerignore
├── .eslintrc.js
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts

# Contribuição

Se você quiser contribuir com este projeto, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [José Augusto Monteiro Lima | augustojaml](https://github.com/augustojaml)