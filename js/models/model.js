

var app = app || {};

app.Wine = Backbone.Model.extend({
  defaults: {
    name: "",
    year: 0,
    grapes: "",
    country: "",
    region: "",
    description: "",
    picture: ""
  },
  initialize: function() {
    var id = app.Cellar.length + 1;

    this.set({"id": id});
    // this.save();
  }
})
