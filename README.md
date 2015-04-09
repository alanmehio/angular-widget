# Jordbruksverket, gemensamma komponenter för diverse widgetar, med beroenden till AngularJS.

Directives, filter och komponenter för allehanda ändamål.

## Documentation

* [API Documentation](https://utv.sjv.se/xwiki/bin/view/ProCAP/angular-widget)

## Download

* [Individual files](https://github.com/jordbruksverket/angular-widget) ([minified](https://raw.githubusercontent.com/jordbruksverket/angular-widget/master/dist/sjv-ng-widget.min.js))<br>

  
Lägg till följande i bower.json
```js
   "dependencies": {
    "sjv-form": "https://github.com/jordbruksverket/angular-widget.git#0.0.5"
  }
```


## Installation

I webbläsaren:

Optimerat:
```html
<script src="../bower_components/sjv-widget/sjv-widget.min.js"></script>
```

Eller orginal-filerna:
```html
<script src="../bower_components/sjv-widget/sjv-widget.js"></script>
<script src="../bower_components/sjv-widget/modal-directive.js"></script>

```

Initiera sedan, genom att definiera ett beroende till modulen.
```js
  angular.module('app', ['sjv-widget.directives']);
```

  