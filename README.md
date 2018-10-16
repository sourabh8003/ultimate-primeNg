# ultimate-primeNG
UI Components for Angular 2 & 4

This version of primeNgcontains some modified version of components and features.

Eg: 

1. customized autocomple with chips component with abitlity
  * to display tooltips
  * to add new values
  * to add values on tab click
2. customized chips component with abitlity 
  * to display tooltips
  * to add chips on tab click
  
You can directly use ultimate-primeNg in your angular projects without performing `buil` operation

** just add this (https://github.com/sourabh8003/ultimate-primeNg-compiled) link in your `package.json` file

```
npm install primeng --save
npm install primeicons --save
```

See Origin Version [PrimeNG homepage](http://www.primefaces.org/primeng) for live showcase and documentation.

Add PrimeNG and PrimeIcons as a dependencies.
![alt text](https://www.primefaces.org/primeng/assets/showcase/images/primeng-sidebar.svg "PrimeNG")

```
"dependencies": {
  //...
  "primeng": "^6.1.2",
  "primeicons": "^1.0.0-beta.10"
},
```

Configure required styles at the styles section, example below uses the Nova Light theme.

```
"styles": [
  "node_modules/primeng/resources/themes/nova-light/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  //...
],
```

That is all, you may now import PrimeNG components, for a working example visit the [PrimeNG CLI QuickStart sample](https://github.com/primefaces/primeng-quickstart-cli) at GitHub.
