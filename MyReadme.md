# NODE-KNEX
### Iniciando BD
<li> knex_teste

###### No terminal devem ser usadas aspas simples (') e naão aspas duplas (")
##### Comando pra acessar o postgres
<li> sudo -u postgres psql

##### Acessar o banco de dados
<li> /c <name do banco>

#### Adicionar Projeto ao banco de dados.
<li>insert into projects(user_id, title) values("1", "Project One");

## Instaladno dependencias
### Instalando knex pg e express
<li>npm i knex pg express

### Criando knexfiles
<li>npx knex init

#### Criando migrations USERS
<li>npx knex migrate:make create_table_users;

#### Rodar a ultima migration
<li> npx knex migrate:latest

#### Criar seed USERS
<li> npx knex seed:make 001-users

#### Rodar a seed
<li> npx knex seed:run

#### Criando migrations PROJECTS
<li>npx knex migrate:make create_table_projects

#### Criar seed PROJECTS
<li>npx knex seed:make 001-users

#### ERROS
===
<ul> The migration directory is corrupt
<ul> Uma das soluções é apagar tabela knex_migrations do BD, ela tem o registro de migrações,
pode não ser a melhor desição, afinal o historico seria perdido, mas como está é uma aplicação
simples, o dados do BD não são importantes para o funcionamento do codigo.
