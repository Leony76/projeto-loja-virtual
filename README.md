# 🛒 Shopping Online

Sistema de loja virtual desenvolvido com **Laravel, React e TypeScript**, permitindo que usuários criem suas contas, visualizem produtos disponíveis, realizem compras e gerenciem seus dados pessoais.

O projeto possui uma interface moderna com tema escuro, gerenciamento de estoque individual e sistema de saldo virtual para realização de compras.

## 📸 Demonstração

### Autenticação

Interface de login e cadastro de usuários, com suporte à recuperação de senha e opção para manter a sessão ativa.

### Página inicial

Exibição dos produtos disponíveis na loja, apresentando informações como imagem, nome, categoria, data de publicação, descrição, preço e quantidade em estoque.

### Compra de produtos

Ao selecionar um produto, o usuário pode visualizar seus detalhes e confirmar a compra através de uma janela de confirmação, que apresenta:

- Informações do produto;
- Preço unitário;
- Quantidade disponível;
- Saldo atual do usuário;
- Confirmação ou cancelamento da compra.

### Meus produtos

Área destinada ao gerenciamento dos produtos adquiridos pelo usuário, apresentando:

- Imagem e nome do produto;
- Categoria e descrição;
- Preço de aquisição;
- Quantidade adquirida;
- Data da compra.

### Dados do usuário

Área para visualização e atualização das informações pessoais, incluindo:

- Nome;
- Endereço de e-mail;
- Senha;
- Saldo disponível na conta.

---

## 🚀 Funcionalidades

- [x] Cadastro de usuários;
- [x] Autenticação e login;
- [x] Recuperação de senha;
- [x] Gerenciamento de sessão;
- [x] Listagem de produtos;
- [x] Visualização dos detalhes dos produtos;
- [x] Compra de produtos;
- [x] Controle de estoque;
- [x] Gerenciamento de produtos adquiridos;
- [x] Visualização dos dados pessoais;
- [x] Atualização das informações do usuário;
- [x] Sistema de saldo virtual;
- [x] Interface responsiva com tema escuro.

## 🛠️ Tecnologias utilizadas

### Front-end
- React 19
- TypeScript
- Inertia.js
- Tailwind CSS 4
- Vite
- Lucide React

### Back-end
- PHP 8.4
- Laravel 12
- Laravel Fortify
- SQLite

### Ferramentas e bibliotecas
- Composer
- NPM
- Git
- PHPUnit
- Docker
- Docker Compose

## 📂 Estrutura do projeto

```text
projeto-loja-virtual/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   └── Models/
├── bootstrap/
├── config/
├── database/
│   ├── migrations/
│   └── seeders/
├── docker/
│   └── setup.sh
├── public/
├── resources/
│   ├── css/
│   ├── js/
│   │   ├── components/
│   │   ├── layouts/
│   │   └── pages/
│   └── views/
├── routes/
├── storage/
├── tests/
├── .dockerignore
├── .env.example
├── compose.yaml
├── Dockerfile
├── artisan
├── composer.json
├── package.json
└── vite.config.ts
```

## ⚙️ Instalação e execução

### Pré-requisitos

Para executar o projeto utilizando Docker, é necessário ter instalado:

- Git;
- Docker Desktop (Windows/macOS) ou Docker Engine com Docker Compose (Linux).

**Não é necessário instalar PHP, Composer, Node.js ou NPM na máquina**, pois essas ferramentas são disponibilizadas pelos containers.

### 1. Clonar o repositório

```bash
git clone https://github.com/Leony76/projeto-loja-virtual.git
```

Entre na pasta do projeto:

```bash
cd projeto-loja-virtual
```

### 2. Configurar as variáveis de ambiente

Crie o arquivo `.env` a partir do arquivo de exemplo.

No Linux/macOS:

```bash
cp .env.example .env
```

No Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

### 3. Construir e iniciar o ambiente Docker

Na raiz do projeto, execute:

```bash
docker compose up -d --build
```

Esse comando constrói as imagens necessárias e inicia automaticamente os serviços configurados no Docker Compose.

Durante a inicialização, o container `setup` realiza a preparação do ambiente:

- Instala as dependências do Composer;
- Instala as dependências do NPM;
- Prepara o banco de dados SQLite;
- Gera a chave da aplicação, caso ainda não exista;
- Limpa os caches do Laravel;
- Executa as migrations.

Após a conclusão da preparação, os serviços Laravel e Vite são iniciados automaticamente.

### 4. Acessar a aplicação

Com os containers em execução, acesse:

- **Aplicação:** http://localhost:8000
- **Vite:** http://localhost:5173

### 5. Acompanhar os containers

Para verificar o estado dos serviços:

```bash
docker compose ps -a
```

Para visualizar os logs:

```bash
docker compose logs -f
```

Para acompanhar os logs de um serviço específico:

```bash
docker compose logs -f laravel.test
```

```bash
docker compose logs -f vite
```

### 6. Encerrar o ambiente

Para parar os containers:

```bash
docker compose down
```

Esse comando encerra os serviços sem remover os volumes nomeados do Docker, preservando as dependências instaladas nesses volumes.

Para iniciar novamente o ambiente:

```bash
docker compose up -d
```

### 💡 Desenvolvimento com Docker

O projeto utiliza volumes para compartilhar os arquivos locais com os containers.

Dessa forma, as alterações realizadas no código são refletidas durante o desenvolvimento:

- Alterações em componentes React, TypeScript e CSS são detectadas pelo Vite, com atualização automática via HMR;
- Alterações em arquivos PHP e Blade são refletidas ao atualizar a página;
- As dependências do Composer e NPM permanecem armazenadas em volumes Docker.

Não é necessário reconstruir as imagens a cada alteração no código-fonte.

---

## 🖥️ Execução sem Docker (opcional)

Caso prefira executar o projeto diretamente na máquina, será necessário instalar:

- PHP 8.4 ou superior;
- Composer;
- Node.js e NPM;
- Git.

### 1. Instalar as dependências

```bash
composer install
npm install
```

### 2. Configurar o ambiente

Crie o arquivo `.env`:

```bash
cp .env.example .env
```

No Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Gere a chave da aplicação:

```bash
php artisan key:generate
```

### 3. Configurar o banco de dados

O projeto utiliza SQLite.

Certifique-se de que o arquivo `database/database.sqlite` existe e configure o `.env`:

```env
DB_CONNECTION=sqlite
```

Execute as migrations:

```bash
php artisan migrate
```

### 4. Executar a aplicação

```bash
composer run dev
```

Acesse a aplicação:

```text
http://localhost:8000
```

---

## 👨‍💻 Autor

**Leony Leandro Barros**

Projeto desenvolvido com o objetivo de praticar e aprimorar conhecimentos em desenvolvimento web full stack, utilizando Laravel no back-end e React com TypeScript no front-end.

---
