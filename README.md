# Navigation dans les répertoires de projet

Le code principal du projet se trouve dans le dossier `src/app`.
Dans le dossier `src/app` nous avons 4 paquets: `achats, noyau, commun et noyau`.
Dans chaque paquet, nous avons un dossier qui contient les dossiers `components, services et models`.
Pour avoir acces aux classes principales de notre code, il faut aller regarder dans chaque dossier(component) et trouver le fichier avec l'extension `ts`, par exemple `panier.component.ts`. De plus, on peut aller dans le dossier `services` et trouver les classes principales dans les fichiers avec l'extension `ts`, par exemple `auth.service.ts`. Aussi, dans le dossier `commun/models` nous avons les fichiers avec les autres classes principales, par exemple `produit.ts`.
Le dossier `functions` sert à exporter le fichier `index.js` sur Firebase.

# MV

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
