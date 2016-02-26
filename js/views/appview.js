

var app = app || {};

app.AppView = Backbone.View.extend({
  el: $("#sidebar"),
  templateSidebar: _.template($("#tpl-wine-list-item").html()),

  events: {
    "click .sidebar-wine": "displayWine"
  },

  initialize: function() {
    // this.listenTo(app.Cellar, "add", this.addModelView);
    // this.listenTo(this.childView, "all", this.test)
    this.inner = new app.WineView()
    this.loadDB();
    app.Cellar.fetch();
    this.render();
  },
  addModelView: function(model) {
    // var views = new app.WineView({model: model})
    // this.innerView = new app.WineView({ model: model, parent: this });
    // this.innerView.parent = this;
    // this.childView = new app.WineView({ model: model, parent: this });
  },
  loadDB: function() {
    _.each(json_wines, function(wine) {
      app.Cellar.create(wine)
    })
  },
  renderOne: function(model) {
    this.$el.append(this.templateSidebar( model.toJSON() ));
  },
  render: function() {
    var self = this;
    _.each(app.Cellar.models, function(model) {
      self.renderOne( model )
    })
  },
  displayWine: function(e, model) {
    e.preventDefault();
    var id = e.target.id,
        model = app.Cellar.get(id).toJSON();
        this.inner.render(model);
  }
})
