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
* Node.js servidor q sustenta uma aplicação javascript (versao 7.11)
* NPM aplicação q instala as bibliotecas javascript
node -v
npm -v

## 8.7. Instalando e criando um projeto com Angular CLI
* Angular CLI é uma ferramenta para criar aplicações angular e ajudar na execução de tarefas repetitivas
* Comandos:
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@1.4.9
* Acessar diretorio raiz do projeto
npm install typescript@'>=2.1.0 <2.4.0'
ng -v (versao)
ng new <nome_projeto>
cd <nome_projeto>
ng serve (subir o servidor http://localhost:4200) 
ng serve --port 8000 (subir o servidor http://localhost:8000) configurado no CORS da API

* Depois de baixar o codigo do versionador, precisa executar o seguinte comando:
npm install

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
* Molulos -> Agrupamento de funcionalidades e importação/exportação de funcionalidades dependentes, declaração de quais componentes fazem parte do módulo, qual o componente principal [bootstrap], provedores de serviços
- main.ts possui o modulo principal que sera o iniciador da aplicação

## 9.3. Criando um componente
ng g c <nome_componente>

## 9.4. Instalando a biblioteca CSS do Bootstrap
* npm install bootstrap@next --save
* incluir no arquivo angular-cli.json o nome do css do bootstrap e o caminho relativo dele na propriedade styles

## 9.5. Introdução a data binding
Formas de vincular componente ao template e vice-versa

## 9.11. Introdução às diretivas
* Diretivas são instruções passadas para os templates de html

- Componentes (informa o local onde o componente será inserido): <lista-pessoas></lista-pessoas>
- Estrutural (altera a estrutura do elemento): <h2 *ngIf="logado">Olá {{nomeUsuario}}</h2>
- Atributos (altera o comportamento e aparencia do elemento): <h2 [style.color]="'red'">Olá {{nomeUsuario}}</h2> 

## 9.13. Iterando com a diretiva ngFor
https://randomuser.me -> site com imagens aleatorias de usuários

## 9.14. Binding de propriedades customizadas com @Input
* Uma propriedade de dentro de um componente pode ser acessado fora desse componente se atribuir ao decorador @input() -> entrada de dados num componente externo
* Precisa ser importado o @angular/core

## 9.15. Binding de eventos customizados com @Output e EventEmitter
* EventEmitter (emissor de eventos) -> deve ser importado de @algular/core
* @Output saida de dados para um componente externo
* A combinação desses comandos implementa a comunicação entre dois componentes através de um evento que será acionado, por exemplo, após o clique de um botão
* $event é uma variavel que recebe os valores enviados ao ser disparado um evento

## 10.1. Instalando plugins úteis no Visual Studio Code
* tslint -> procura erros no codigo, más práticas de programação
- node_modules/tslint/bin/tslint --project tslint.json
- ou extensão tslint
* editorconfig -> padroniza o estilo de programação dos desenvolvedores (editorconfig.org)
* HTML Snippet  (facilita a criação de tags com fechamento e espaçamento automatico)
* Auto import -> ajuda na importação automatica para funcionamento do metodo utilizado no codigo

## 10.2. Escolhendo uma biblioteca de componentes
https://material.angular.io
https://angular2-materialize.surge.sh
https://ng-bootstrap.github.io
https://valor-software.com/ngx-bootstrap
https://www.primefaces.org/primeng

## 10.3. Criando o projeto do curso e instalando o PrimeNG
- npm install primeng --save (o --save salva a dependencia no package.json)
- npm install font-awesome --save
- Inserir as linhas abaixo no angular-cli.json na propriedade styles:
"../node_modules/font-awesome/css/font-awesome.min.css",
"../node_modules/primeng/resources/primeng.min.css",
"../node_modules/primeng/resources/themes/omega/theme.css",

* Para que seja possivel usar os componentes do primeng, eles precisam ser importados no codigo dos módulos do angular:
- import {ButtonModule} from 'primeng/primeng';
```
@NgModule({
  imports: [
    ButtonModule,
  ]
})
```

## 10.4. Adicionando o formulário de pesquisa de lançamentos
Utilização de media queries no css (@media) para que o tamanho da tela obedeça o tipo de media q está sendo utilizado para visualizar a pagina html

## 10.6. Customizando colunas com ng-template
* Utiliza-se o ng-template para customizar colunas do primeng
* pTemplate informa qual dom da coluna será impactado com a customização (header, body, etc)

## 10.7. Fazendo paginação de dados
* adicionar a propriedade [paginator]=true e [rows]=n, onde n é a quantidade de linhas em cada página, na diretiva p-dataTable do primeng

## 10.8. Adicionando tooltip
* Tooltip - informação adicional qdo se passa o mouse sobre o objeto que queira dar mais detalhe
* Propriedade pTooltip do primeng -> módulo ToolTipModule
* Aplicado para qdo passar o mouse das figuras deletar e editar,mostrar essas mesmas mensagens

## 10.9. Colocando a tabela de dados responsiva
* PrimeNg utiliza regra css para deixar a tabela responsiva, porem de forma transparente
* Adicionar a propriedade [responsive]=true

## 10.10. Criando o componente de pesquisa de lançamentos
ng g c lancamentos-pesquisa --spec=false

## 10.11. Criando o componente de barra de navegação
ng g c navbar --spec=false

## 10.12. Adicionando menu intercambiável
* Incluido (click)="exibindoMenu = !exibindoMenu" no marcador a do link das 3 barras do navbar e a propriedade [hidden]="!exibindoMenu" no marcador ul que possui as caracteristicas do menu lateral
* https://www.primefaces.org/avalon-ng/#/data
* código para ocultar o menu no caso do usuário clicar em qualquer lugar da tela:

```
constructor(private elementRef: ElementRef) {
  }

  ...

  @HostListener('document:click', ['$event'])
  public aoClicar(event) {
    const elementoClicado = event.target;
    const estaDentro = this.elementoClicadoEstaDentroDoMenu(elementoClicado, this.elementRef);

    if (!estaDentro) {
      // se chegar aqui é porque o clique foi fora do menu.
    }
  }
```

## 11.1. Criando diretivas customizadas
ng g d campo-colorido --spec=false
* Cria-se diretivas customizadas qdo queremos modificar um comportamento ou aparencia de um elemento, mas para isso eh necessário implementação de uma lógica de programação qualquer, alguma regra de negocio que precisa ser satisfeita
* ElementRef dá acesso ao elemento hospedeiro da DOM (ao se aplicar a diretiva num elemento input, o input é o elemento hospedeiro)
* Renderer é uma abstração para manipular renderizações - utiliza o elementRef

## 11.2. Respondendo a eventos do hospedeiro com @HostListener
* Incluir o decorator @HostListener('focus') antes do método que precisa realizar alguma lógica depois que o evento informado logo após o decorator ('focus') precisa executar
* Evento Blur é qdo o hospedeiro perde o foco

## 11.3. Vinculando propriedades do hospedeiro com @HostBinding
@HostBinding('style.backgroundColor') corDeFundo: string -> no elemento que possuir a diretiva customizada terá a cor alterada conforme metodo implementado q define o valor da variavel corDeFundo

## 11.4. Usando property binding em diretivas customizadas
* Utiliza-se o @Input antes de uma variavel que tera seu valor definido na propriedade do elemento no qual a diretiva está trabalhando: <input campoColorido [cor]="'yellow'">

## 11.5. Exportando a API da diretiva para o template
* Utiliza-se ExportAs para que outros elementos do template possam acessar a diretiva customizada. 
* O elemento que sofrerá os efeitos da diretiva precisa especificar o nome que será acessado por outro elemento, por exemplo o #campo=campoColorido (Nome q foi definido no ExportAs)

## 11.6. Conhecendo e usando pipes
* Recebem uma entrada e realiza uma tratativa desejada na saida, sem alterar o valor da entrada
* Caracter |
* angular.io/api -> pesquise por pipe para ver o q a entrada pode ser transformada

## 12.2. Template-driven Forms: Criando um formulário
* Para o angular gerenciar um formulario é preciso:
- Importar o FormModules no arquivo de modulo
- Adicionar variavel de referencia #formulario="ngForm" para que o angular consiga pegar as propriedades do formulario através de um objeto javascript
- diretiva ngNoForm  no elemento form, o angular nao gerencia esse formulario

## 12.3. Registrando os controles do formulário
* Os elementos precisam ser registrados no formulario através da diretiva ngModel para que o objeto javascript gerado pelo angular consiga ter acesso a eles
* Todo ngModel precisa ter uma propriedade name especificada no elemento

## 12.7. Adicionando validação em formulários
* a propriedade valid do objeto javascript avalia se todos os elementos required estão preenchidos, se minlength e maxlenght está sendo obedecido, etc

## 12.8. Exibindo erro de validação do formulário
autocomplete=off -> do proprio html
- Adicionar variavel de referencia #elemento="ngModel" para que o angular consiga pegar as propriedades do elemento através de um objeto javascript
- o elemento do angular hasError('required') valida se o campo foi preenchido e o hasError('minlength') avalia se o comprimento minimo foi atingido
- a propriedade invalid avalia se todas as condições foram satisfeitas

## 12.10. Rastreando o estado em controles do formulário
* Angular gerencia o estado dos elementos do formulario para tomar decisão se uma mensagem de validação é exibida ou não:
- Touched -> foi tocado pelo usuario
- Pristine -> valor original não foi tocado pelo usuario
- Dirty -> o valor original ja foi tocado
* Tanto para ngForm e para ngModel

## 12.13. Limpando formulários (reset)
* Limpar o estado do formulario: o ngForm possui um metodo reset()
* Passa-se como parametro do reset um json com alguns valores padrão para o formulario iniciar com esses valores

## 13.1. Criando o protótipo do formulário de cadastro de lançamentos
* ng g c lancamento-cadastro --spec=false
* InputTextareaModule deve ser inserido no arquivo de modulo para usar a diretiva inputTextarea do primeng no elemento textarea do html
* ui-g, ui-g-12, ui-md-3 e ui-g-6 utilizados no projeto são grids do primeng
www.primefaces.org/primeng/#/grid

## 13.2. Adicionando seletor de data (componente Calendar)
* componente calendar do primeng
* Importar o CalendarModule e BrowserAnimationModule
* Propriedade dateFormat define o formato da data
* colocar o idioma do calendário para português inserindo o código abaixo no arquivo lancamento-cadastro.component.ts:
  pt_BR: any;

```
  ngOnInit() {
      this.pt_BR = {
        firstDayOfWeek: 0,
        dayNames: [ "Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado" ],
        dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sáb" ],
        dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
        monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
        monthNamesShort: [ "Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez" ]
      };
```
Uma abordagem melhor seria criar uma diretiva customizada que seria inserida como propriedade do p-calendar

## 13.3. Adicionando botão de seleção
* SelectButtonModule

## 13.4. Adicionando caixa de seleção (componente Dropdown)
* DropDownModule
* Caso queira modificar um estilo do primeng, clique em inspect do navegador, descubra a classe css do elemento que vc quer mudar e insira-o no arquivo styles.css - se for uma mudança global - ou no css do componente se for uma mudança bem especifica para o componente

## 13.5. Adicionando máscara de dinheiro com ng2-mask-money
npm install ng2-currency-mask --save
CurrencyMaskModule
diretiva currencyMask
Formatação: [options]="{ prefix: '', thousands: '.', decimal: ',', allowNegative: false }"
ngModel e name também são obrigatórios serem informados

## 13.7. Adicionando campo com máscara (componente InputMask)
InputMaskModule
diretiva p-inputMask
propriedade mask

## 13.8. Validando controles de formulário com PrimeNG
* Debug de erros de validação: {{ descricao.errors | json }} no qual descricao é uma variavel de referencia que recebe ngModel

## 13.9. Criando componente de mensagem de erro de validação
ng g c message --spec=false --inline-template --inline-style (não cria um arquivo html e css a parte)
Utilização do operador ? qdo o objeto está nulo não faz nenhuma ação para não dar erro: descricao.errors?.minlength?.requiredLenght

## 14.1. Introdução aos módulos
Componentes, diretivas, pipes e outros pertencentes a um módulo só conseguem ser importados em outros módulos se o modulo que eles pertencem faça a exportação deles

## 14.2. Criando um módulo e exportando um componente
ng g m botoes
ng g c botoes/botao-grande --spec=false

## 14.3. Reexportando um módulo
* Quando um modulo A utiliza o componente de um módulo B, ele também pode exportar esse módulo B para um módulo C que chama um componente tanto do módulo A quanto do módulo B
* em exports do módulo A, informar o modulo B que será reexportado

## 14.5. O que são Feature Modules?
* Módulos de funcionalidades que agrupam os componentes afins

## 14.8. O que são Shared Modules?
São modulos que tem funcionalidades que podem ser compartilhadas entre outros módulos

## 14.10. O que é Core Module?
São os módulos utilizados somente pelo módulo raiz da aplicação, no caso, appModule, para que ele fique o mais enxuto possível.

## 15.1. Introdução aos serviços
Serviços são funcionalidades comuns que precisam ser fornecidas para um componente ou módulo

## 15.2. Implementando um serviço
console.log(JSON.stringify(nome_objeto)) -> transforma um objeto javascript em string

## 15.3. O que é injeção de dependências?
Injeções de dependencias são inseridas nos providers dos modulos

## 15.4. Configurando o injetor com provider por classe
Uma subclasse de uma classe provider pode ser referenciada dentro de providers : [provide: NomedoServiço, useClass: NomedaClasse ou SubClasse]

## 15.5. Configurando o injetor com provider por fábrica
providers : [provide: NomedoServiço, useFactory: NomedaFabrica]
Neste caso o metodo NomedaFabrica é implementado retornando uma classe que recebe parametro no construtor

## 15.6. Configurando o injetor com provider por valor e o decorator @Inject
* No provider do modulo:

```
 providers: [
    LogService,
    { provide: 'LogPrefixo', useValue: 'LOG2' }
  ],
* Na classe do serviço:
constructor(
    @Inject('LogPrefixo') private prefixo: string
  ) { }
```

## 15.7. Injetando serviços dentro de serviços e o decorador @Injectable
* Inserir o decorador @Injectable() antes da classe que injetará um serviço
* Por convenção o decorator deve ser incluido antes toda classe que implementa serviço

## 15.8. Como funciona o Injetor Hierárquico
Ver conceito na aula!

## 16.2. Instalando e testando o json-server
* Realiza mock de json
* Cria um diretorio data e um arquivo db.json onde os dados ficarão armazenados
npm install -g json-server
json-server --watch data/db.json

## 16.3. Fazendo requisição com GET e recebendo o retorno
ng g s cidade --spec=false
Importar o modulo HttpModule
Importar rxjs/add/operator/toPromise na classe de serviço

## 17.1. Revisando e iniciando o back-end do projeto do curso
www.base64encode.org -> codifica texto na base 64

## 17.2. Criando o serviço de consulta de lançamentos
ng g s lancamentos/lancamento --spec=false
java -jar algamoney-api-0.0.1-SNAPSHOT.jar --algamoney.origin-permitida=http://localhost:4200
Class Headers para incluir cabeçalho na chamada HTTP

## 17.3. Adicionando filtro por descrição na pesquisa de lançamentos
Class URLSearchParams para incluir parametros na chamada HTTP

## 17.4. Adicionando filtro por datas na pesquisa de lançamentos
npm install moment --save
https://momentjs.com -> converter data em string
import * as moment from 'moment';
Propriedade emptyMessage do PrimeNg do p-dataTable define a mensagem que será exibida na tabela caso o retorno da consulta não traga conteúdo

## 17.6. Configurando a paginação lazy do PrimeNG
* Propriedade lazy do p-dataTable informa que cada pagina da tabela tera seu conteudo buscado por demanda
* evento onLazyLoad é invocado toda vez que uma nova página é chamada

## 17.8. Excluindo lançamentos e o decorador @ViewChild
* Criada a variavel de referencia #tabela no p-dataTable de lancamento
* O decorador @ViewChild('tabela') terá acesso a essa variavel de referencia
* a propriedade this.grid.first recebeu valor 0 para que a paginação do p-dataTable volte a página 0 após a exclusão de um lançamento

## 17.9. Adicionando mensagem de sucesso com Angular Toasty
* https://github.com/akserg/ng2-toasty
* npm install ng2-toasty --save
* Importar o modulo ToastyModule.forRoot() -> use o forRoot somente se for importado no AppModule
* Importar ToastyConfig no componente
* Inserir em styles do agular-cli.json "../node_modules/ng2-toasty/style-bootstrap.css",
* Inserir o componente <ng2-toasty></ng2-toasty> no template

## 17.10. Adicionando diálogo de confirmação antes da exclusão
* Importar ConfirmDialogModule do PrimeNg
* Inserir ConfirmationService em providers do módulo
* Inserir o componente <p-confirmDialog></p-confirmDialog> no template

## 17.11. Alterando o locale da aplicação para pt-BR
Inserir no providers do modulo { provide: LOCALE_ID, useValue: 'pt-BR' }

## 17.12. Criando um serviço de tratamento de erros
* ng g s core/error-handler --spec=false
* Adicionar o provider ErrorHandlerService no core module

## 18.2. Configurando rotas na aplicação
* Importar Router e RouterModule.forRoot() no appmodule
* Criar o array de rotas [{path:,component:}]
* Diretiva <router-outlet></router-outlet> no arquivo de template

## 18.3. Navegando com Router Link
* Incluir a diretiva routerLink no marcador a do html
* Importar o modulo RouterModule no modulo correspondente ao html

## 18.4. Estilizando links da rota ativa
* Criar um estilo com nome de classe ativo
* Inserir a diretiva routerLinkActive e referenciar a classe ativo

## 18.5. Recebendo parâmetros da rota
* Inserir um token na url (lancamentos/:codigo) no array de rotas
* Usar a variavel activatedRoute para receber o parametro da url

## 18.6. Desafio: implementando os serviços de atualização e busca por código
* Converter string em data
moment(lancamento.dataPagamento,'YYYY-MM-DD').toDate();

## 18.9. Implementando navegação imperativa
* metodo navigate de routers
* função setTimeout criado no metodo novo para resolver um problema de limpeza do formulario que não deixava o botão Receita selecionado por padrão

## 18.10. Fazendo redirecionamento
Incluir no array de rotas para http://localhost:4200 direcionar para pesquisa de lançamentos:
{path:'',redirectTo:'Lancamentos',pathMatch:'full'}

## 18.11. Tratando rota não encontrada
* ng g c core/pagina-nao-encontrada --inline-style --inline-template --flat --spec=false (--flat é para nao criar um diretorio com o mesmo nome do componente)
* {path:'**',redirectTo:'pagina-nao-encontrada'}

## 18.12. Definindo o título da página dinamicamente
* O angular não trabalha nos marcadores fora do <body>, como o <header>
* Usar o serviço Title para alterar dinamicamente o titulo da pagina
* Incluir title em providers 
* Usar o setTitle no componente

## 18.13. Refatorando as rotas para usar Routing Module
* Criado arquivo app-routing.module.ts com a classe AppRoutingModule
* Importar AppRoutingModule no app.module.ts

## 18.14. Criando um Routing Module para o módulo de funcionalidade
* Criado arquivo lancamento-routing.module.ts com a classe LancamentoRoutingModule
* Importar LancamentoRoutingModule no lancamento.module.ts
* Importar RouterModule.forChild(routes) no LancamentoRoutingModules

## 19.1. Introdução à segurança do front-end
Explicação do modelo tradicional (estado de sessão) e o modelo arquitetural rest (sem estado de sessão)

## 19.2. Revisando a segurança da API com OAuth 2 e JWT
java -jar algamoney-api-0.0.1-SNAPSHOT.jar --algamoney.origin-permitida=http://localhost:4200 --spring.profiles.active=oauth-security

## 19.3. Desafio: módulo de segurança e protótipo da tela de login
* Criado metodo exibindoNavBar criado para exibir ou nao o nav-bar
* Não exibirá se tiver no /login
### Criando o modulo segurança
ng g m seguranca --spec=false
### Criando o componente login-form em segurança
ng g c seguranca/login-form --spec=false

## 19.4 Implementando o serviço de autenticação com OAuth 2
### Criando o serviço de segurança oauth
ng g s seguranca/auth --spec=false

## 19.5. Decodificando o JWT e armazenando no Local Storage
* Importado o serviço JwtHelper em providers do core module para decodificar o token
* Usada a propriedade LocalStorage e o metodo setItem para guardar o token no storage local do navegador
### Instalando o angular jwt
npm install angular2-jwt --save

## 19.7. Adicionando o Access Token nas chamadas HTTP
* Em seguranca.module foi adicionado o provider AuthHTTP e uma função authHTTPServiceFactory que vai construir um authHttp
* deps em providers vai passar os parametros injetados para a função authHttpServiceFactory
* O AuthHttp já insere no header o authorization do token, portanto não precisa mais declarar a classe headers com o authorization
* O AuthHTTP pega do local storage o valor do token que foi informado no setItem com nome token

## 19.10. Obtendo um novo access token
withCredentials: true resolve o problema de cross site na renovação do access token

## 19.11. Interceptando chamadas HTTP para tratar a expiração do access token
* jwtHelper.isTokenExpired(token) verifica se o token expirou
* Criado o arquivo money-http que herda o authHttp e intercepta as chamadas http
* O metodo fazerRequisição implementa a verificação do token antes de realizar as chamadas get, put, etc

## 19.13. Protegendo rotas com guarda de rotas (CanActivate)
* Protege as rotas, direcionando o usuario para uma rota especifica qdo ele tenta acessar uma que não tem acesso
* A propriedade CanActivate no array de rotas adiciona a guarda da rota
* propriedade data possui um objeto com as roles que permitem o acesso a rota
* Precisa fornecer a classe de guarda no provider do modulo de segurança

### Criando o componente nao-autorizado
ng g c core/nao-autorizado --spec=false
### Criando uma guarda de rota 
ng g g seguranca/auth

## 19.14. E se o Refresh Token expirar?
* Implementada a classe NotAuthenticatedError que será disparada caso o token nao esteja mais valido mesmo apos uma nova solicitação de novo acess token
* Essa classe será capturada pelo ErrorHandler e direcionara para a tela de login

## 19.15. Tratando acessos de usuários deslogados na AuthGuard
Ao tentar obter o token no authguard e nao conseguir, fara o direcionamento para a tela de login

## 19.16. Implementando o logout
* No serviço auth.service.ts foi criado um metodo com:
localStorage.removeItem('token')
jwtPayload = null
* Inserido o LogoutService no modulo de segurança

### Criando o serviço logout
ng g s seguranca/logout --spec=false

## 20.1. Configurando a aplicação com environment do Angular CLI
* environment.ts é o arquivo com as configurações pertinentes ao ambiente de desenvolvimento
* environment-prod.ts é o arquivo com as configurações pertinentes ao ambiente de produção
* importar o environment nos serviços q chamam a url da api

## 20.2. Fazendo build para o ambiente de produção
ng build --environment=prod (mesmo nome do arquivo environments)
ng build --prod (metaflag q inclui --environment=prod e outras atividades, como otimizar o tamanho do diretorio dist e do código das dependendicas q realmente é necessário para o funcionamento)

## 20.3. Respondendo requisições com Node.js e Express
* Criado arquivo server.js na raiz do projeto somente para servir os arquivos da pasta dist
* Importar o modulo javascript Express (framework web simples usado com node.js) e metodo express 

node server.js

## 20.4. Fazendo deploy em produção no Heroku
* process.env.PORT no server.js é provido pelo heroku
* postinstall -> heroku apos resolver as dependencias, vai executar o q estiver em postinstall no package.json (ng build --prod)
* start -> alterado o start do package.json para node server.js
* Não instala os devdependencies, e como o build será realizado no heroku, devemos mover os devdependencies para dependencies
* Em engines, especificou-se as versões usadas do node do npm

```
heroku apps:create algamoney-ui-vz
git add .
git commit -m "Deploy"
git push heroku master
```

## 21.1. Atualizando para o Angular 5
* Site que auxilia a atualização do angular
  * https://angular-update-guide.firebaseapp.com

npm install -g @angular/cli@1.7.3

* package.json
  * Voltar as packages de desenvolvimento
  * Atualizar as versões do pacote conforme nova versão do angular-cli
  * "start": "node server.js" -> "start": "ng serve", para voltar a subida local
  * Remover "postinstall": "ng build --prod" pois não fará build para prd

```
npm install
ng start
```

## 21.3. Atualizando o PrimeNG

* Ver versão mais recente:
npm info primeng

* Atualizar a versão no package.json
npm install

* Fazer as adequações dos nomes dos módulos

## 21.6. Carregamento tardio de módulos (Lazy loading)

* Evitar carregar módulos pesados ou pouco usados na inicialização da aplicação do navegador
* Esses módulos serão carregados somente quando invocados
* Usar loadChildren para os módulos que serão carregados tardiamente
* Os módulos tardios não podem ser importados no app-modules.ts, senão serão carregados durante o primeiro acesso da aplicação

## 21.7. Formulários reativos

* Melhor controle do formulário para reação das ações do usuário
* Retira alguns elementos de controle HTML do formulario, e passa a codificá-los no typescript
  * Exemplo: maxlength, required, etc

## 23.1. Criando o módulo Dashboard
```
ng g m dashboard --routing
ng g c dashboard/dashboard
```
## 23.2. Plotando gráficos com dados estáticos

Baixando as libs do primeng q trabalha com graficos
```
npm install chart.js --save
```

* Inserir chart.js em scripts no angular-cli.json

## 23.3. Criando o serviço da Dashboard

```
ng g s dashboard/dashboard --spec=false
```

## 23.7. Criando módulo de relatórios

```
ng g m relatorios --routing --spec=false
ng g c relatorios/relatorio-lancamentos --spec=false
```

## 23.9. Exibindo o PDF para o usuário

```
ng g s relatorios/relatorios --spec=false
```
