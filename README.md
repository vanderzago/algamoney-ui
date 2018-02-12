# AlgamoneyUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 8.6. Instalando o Node.js e NPM
* Node.js servidor q sustenta uma aplicação javascript
* NPM aplicação q instala as bibliotecas javascript
node -v
npm -v

## 8.7. Instalando e criando um projeto com Angular CLI
* Angular CLI é uma ferramenta para criar aplicações angular e ajudar na execução de tarefas repetitivas
* Comandos:
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli
ng -v (versao)
ng new <nome_projeto>
cd <nome_projeto>
ng serve (subir o servidor http://localhost:4200) 
ng serve --port <porta>

## 8.8. Abrindo o projeto no VS Code
* package.json
-> possui o nome do projeto, as dependencias (dependencies executa no servidor de produção e devdependencies apenas local, no ambiente do desenvolvedor)
* node_modules
-> diretório onde ficam os arquivos das dependencias
* src
-> diretorio onde ficam os codigos da aplicação

## 8.9. Abrindo e executando um exemplo do curso
* Ao baixar o codigo do git, o diretório node_modules precisa ser criado, uma vez q ele não é enviado ao repositório remoto (está presente no .gitignore):
npm install
* Ao digitar esse comando, ele lerá as dependencias do arquivo package.json e baixará as dependencias necessarias para a aplicação subir.

## 9.1. Bootstrapping e AppModule
* Componente-> parte do código onde especifica os templates html e css e realiza as interpolações com a classe
* Molulos -> Agrupamento de funcionalidades e importação/exportação de funcionalidades dependentes, declaração de quais componentes fazem parte do módulo, qual o componente principal, provedores de serviços
- main.ts possui o modulo principal que sera o iniciador da aplicação

## 9.3. Criando um componente
ng g c <nome_componente>

## 9.4. Instalando a biblioteca CSS do Bootstrap
* npm install bootstrap@next --save
* incluir no arquivo angular-cli.json o nome do css do bootstrap e o caminho relativo dele na propriedade styles

## 9.5. Introdução a data binding
Formas de vincular componente ao template e vice-versa

## 18.11. Tratando rota não encontrada
ng g c core/pagina-nao-encontrada --inline-style --inline-template --flat --spec=false

## 19.3. Desafio: modulo de segurança e prototipo de tela de login
### Criando o módulo segurança
ng g module seguranca

### Criando o componente login-form em segurança
ng g c seguranca/login-form --spec=false

## 19.4 Implementando o serviço de autenticação com OAuth 2
### Criando o serviço de segurança oauth
ng g s seguranca/auth --spec=false

## 19.5. Decodificando o JWT e armazenando no Local Storage
### Instalando o angular jwt
npm install angular2-jwt --save

## 19.13. Protegendo rotas com guarda de rotas (CanActivate)
### Criando o componente nao-autorizado
ng g c core/nao-autorizado --spec=false
### Criando uma guarda de rota 
ng g g seguranca/auth

## 19.16. Implementando o logout
### Criando o serviço logout
ng g s seguranca/logout --spec=false

## 20.2. Fazendo build para o ambiente de produção
ng build --prod

## 20.3. Respondendo requisições com Node.js e Express
node server.js

## 20.4. Fazendo deploy em produção no Heroku
heroku apps:create algamoney-ui
git add .
git commit -m "Deploy"
git push heroku master
