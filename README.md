# Jordbruksverket, gemensamma komponenter för diverse widgetar, med beroenden till AngularJS.

Directives, filter och komponenter för allehanda ändamål.

## Documentation

* [API Documentation](https://utv.sjv.se/xwiki/bin/view/ProCAP/angular-widget)

## Download

* [Individual files](https://github.com/jordbruksverket/angular-widget) ([minified](https://raw.githubusercontent.com/jordbruksverket/angular-form/master/dist/sjv-form.min.js))<br>

  
Lägg till följande i bower.json
```js
   "dependencies": {
    "sjv-form": "https://github.com/jordbruksverket/angular-form.git#0.0.1"
  }
```


## Installation

I webbläsaren:

Optimerat:
```html
<script src="../bower_components/sjv-widget.min.js"></script>
```

Samt beroenden:
```html
<script src="../bower_components/moment/moment.js"></script>
<script src="../bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"></script>
<link href="../bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css" rel="stylesheet" />
```

Eller orginal-filerna:
```html
<script src="../bower_components/throttle-directive.js"></script>
<script src="../bower_components/valjAntal-directive.js"></script>
<script src="../bower_components/decimal-directive.js"></script>
<script src="../bower_components/integer-directive.js"></script>
<script src="../bower_components/max-decimals-filter.js"></script>
<script src="../bower_components/sjv-form/datepicker-directive.js"></script>
```

Initiera sedan, genom att definiera ett beroende till modulen.
```js
  angular.module('flit.directives', ['sjv-form.directives']);
  angular.module('flit.filters', ['sjv-form.filters']);
```

  