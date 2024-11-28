# Consultoria Junior

Este projeto foi desenvolvido como parte de um **trabalho acadêmico** para a **Consultoria Junior**. A proposta foi criar uma plataforma de **blog** para a Consultoria Junior, utilizando **Strapi** para o gerenciamento de conteúdo no backend e **React** no frontend, com **TailwindCSS** para estilização. O sistema também inclui a renderização de conteúdo markdown nos posts e navegação entre páginas com **React Router**.

## Tecnologias Usadas

- **Backend:** Strapi (Headless CMS)
- **Frontend:** React
- **Estilização:** TailwindCSS
- **Outras dependências:** 
  - **React Markdown**: para renderizar conteúdo markdown
  - **React Router**: para navegação entre páginas
  - **Strapi**: para o gerenciamento de conteúdo no backend

## Funcionalidades

- **Gerenciamento de conteúdo** através do painel do Strapi
- **Exibição dinâmica** de posts no frontend em React
- **Design responsivo** utilizando TailwindCSS
- **Renderização de markdown** nos posts
- **Navegação entre páginas** com React Router

## Como Usar

### Instalação de Dependências

1. Clone o repositório:
    ```bash
    git clone https://github.com/brnmd96/consultoria-junior-urcamp.git
    cd consultoria-junior
    ```

2. Instale todas as dependências do projeto:
    ```bash
    npm install
    ```

3. Configure o **Strapi** para gerenciar os conteúdos. O painel de administração do Strapi pode ser acessado para criar e gerenciar os posts do blog.

### Executando o Projeto

1. Inicie o servidor do **Strapi** (backend):
    ```bash
    npm run develop
    ```

2. Inicie o servidor do **frontend React**:
    ```bash
    npm start
    ```

## Contribuindo

1. Faça um fork do repositório
2. Crie uma nova branch (`git checkout -b nome-da-feature`)
3. Realize os commits das mudanças (`git commit -am 'Adicionar feature'`)
4. Envie a branch para o repositório (`git push origin nome-da-feature`)
5. Abra um pull request

## Licença

Este projeto está licenciado sob a Licença MIT.
