### Como Executar o Projeto Baixado
### Instalação de Dependências
### Para instalar todas as dependências listadas no package.json, utilize o comando:
## yarn install

### Configuração do Banco de Dados MySQL
### Crie a base de dados "api_funcionarios" no seu servidor MySQL. É necessário ter o MySQL instalado na máquina e em execução.
## CREATE DATABASE api_funcionarios;

### Configuração do Arquivo .env
### Altere as credenciais do banco de dados no arquivo .env do projeto.

#### Execução das Migrações
### Execute as migrações para criar as tabelas do banco de dados:
# npx sequelize-cli db:migrate

#### Iniciando o Projeto
### Para iniciar o projeto, utilize o comando:
# yarn dev

#### Sequência para Criar o Projeto
### Inicialização do Arquivo package.json
## Crie o arquivo package.json para gerenciar as dependências do projeto:
# yarn init

#### Instalação do Sequelize
### O Sequelize é uma biblioteca JavaScript que facilita o gerenciamento de bancos de dados SQL:
## yarn add --save sequelize

#### Instalação do Driver do Banco de Dados
### Instale o driver do banco de dados MySQL:
## yarn add --save mysql2

#### Instalação do Sequelize-CLI
### O Sequelize-cli é uma interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados:
## yarn add --save --dev sequelize-cli

#### Inicialização do Sequelize-cli e Criação do Arquivo de Configuração
### Inicialize o Sequelize-cli e crie o arquivo de configuração:
## npx sequelize-cli init

#### Instalação da Manipulação de Variáveis de Ambiente
### Instale a biblioteca dotenv para manipular variáveis de ambiente:
## npm install --save --dev dotenv

#### Criação das Migrations
### Crie as migrations para gerenciar as alterações do banco de dados:
## npx sequelize-cli migration:generate --name create-users

#### Criação dos Models
### Crie os models, como o modelo Users, com as propriedades desejadas:
## npx sequelize-cli model:generate --name Users --attributes name:string,email:string,image:string

#### Execução das Migrações
### Execute as migrações para criar as tabelas do banco de dados:
## npx sequelize-cli db:migrate

#### Rollback das Migrações (Desfazer Alterações no Banco de Dados)
### Utilize o comando db:migrate:undo para desfazer uma migration específica:
## npx sequelize-cli db:migrate:undo --name nome-da-migration

### Como Rodar o Projeto com Docker

### Configuração do Arquivo .env

### Certifique-se de configurar todas as variáveis de ambiente necessárias no arquivo .env.

### Instalação do Docker

## Instale o Docker em sua máquina. Recomendamos o uso do Docker Desktop. [Download Docker](https://www.docker.com/products/docker-desktop/)

### Execução do Docker Compose

## Execute o comando docker-compose up -d na raiz do projeto para iniciar os containers definidos no arquivo docker-compose.yml.

### Criação do Banco de Dados e das Tabelas

### Rode o comando para criar o banco de dados api_funcionarios e as tabelas na raiz do projeto:

### yarn prestart

### População das Tabelas

### Para popular as tabelas, execute o comando na raiz do projeto. Isso é necessário para criar um login de usuário com base no banco de dados:

### yarn seed

### Aproveite a API com o Swagger

### Agora, acesse a API usando o Swagger para visualizar e testar os endpoints disponíveis.
##### http://localhost:3000/swagger