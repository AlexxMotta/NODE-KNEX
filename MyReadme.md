# NODE-KNEX
### Iniciando BD
knex_teste
###### No terminal devem ser usadas aspas simples (') e naão aspas duplas (")
##### Comando pra acessar o postgres
sudo -u postgres psql
##### Acessar o banco de dados
/c <name do banco>
#### Adicionar Projeto ao banco de dados.
insert into projects(user_id, title) values("1", "Project One");
## Instaladno dependencias
### Instalando knex pg e express
npm i knex pg express
### criando knexfiles
npx knex init

#### criando migrations USERS
npx knex migrate:makecreate_table_users;
#### rodar a ultima migration
npx knex migrate:latest
#### criar seed USERS
npx knex seed:make 001-users
#### rodar a seed
npx knex seed:run

#### criando migrations PROJECTS
npx knex migrate:make create_projects_table

#### criar seed PROJECTS
npx knex seed:make 001-users