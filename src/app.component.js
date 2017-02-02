(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Learn how to drag and drop with a angular2 </h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
