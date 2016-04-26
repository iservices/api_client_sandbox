(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My third Angular 2 App<button (click)="dome(\'test\')">Blah</button></h1>'
    })
    .Class({
      constructor: function() {},
      dome: function(message) {alert(message);}
    });
})(window.app || (window.app = {}));

