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
- PHP 8.2+
- Laravel 12
- Laravel Fortify
- SQLite

### Ferramentas e bibliotecas
- Composer
- NPM
- Git
- PHPUnit

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
│   ├── database.sqlite
│   ├── migrations/
│   └── seeders/
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
├── .env.example
├── artisan
├── composer.json
├── package.json
└── vite.config.ts
```

## ⚙️ Instalação e execução

### Pré-requisitos

Antes de começar, certifique-se de possuir os seguintes programas instalados:

- PHP 8.2 ou superior;
- Composer;
- Node.js e NPM;
- Git.

### 1. Clonar o repositório

```bash
git clone https://github.com/Leony76/projeto-loja-virtual
```

Entre na pasta do projeto:

```bash
cd projeto-loja-virtual
```

### 2. Instalar as dependências

Instale as dependências do Laravel:

```bash
composer install
```

Instale as dependências do React:

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Crie o arquivo `.env` a partir do arquivo de exemplo:

```bash
cp .env.example .env
```

No Windows PowerShell, também é possível utilizar:

```powershell
Copy-Item .env.example .env
```

Gere a chave da aplicação:

```bash
php artisan key:generate
```

### 4. Configurar o banco de dados

O projeto utiliza SQLite.

Certifique-se de que o arquivo `database/database.sqlite` existe e configure o `.env`:

```env
DB_CONNECTION=sqlite
```

Execute as migrations:

```bash
php artisan migrate
```

### 5. Executar a aplicação

Inicie o ambiente de desenvolvimento:

```bash
composer run dev
```

O comando inicia os serviços necessários para o desenvolvimento, incluindo o servidor Laravel e o Vite.

Acesse a aplicação pelo endereço:

```text
http://localhost:8000
```

---

## 👨‍💻 Autor

**Leony Leandro Barros**

Projeto desenvolvido com o objetivo de praticar e aprimorar conhecimentos em desenvolvimento web full stack, utilizando Laravel no back-end e React com TypeScript no front-end.

---
