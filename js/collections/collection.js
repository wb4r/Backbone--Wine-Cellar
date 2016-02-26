

var app = app || {};

var WineList = Backbone.Collection.extend({
  model: app.Wine,
  localStorage: new Backbone.LocalStorage("cellar-app")

})

app.Cellar = new WineList();
