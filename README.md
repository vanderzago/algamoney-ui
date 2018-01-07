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
