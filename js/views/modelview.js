

var app = app || {};

app.WineView = Backbone.View.extend({
  el: $("#content"),
  templateWine: _.template($("#tpl-wine-details").html()),

  initialize: function(opts) {
    // this.parent = opts.parent
    // console.log(opts);

    // _.bindAll(this, "displayWine")
    // this.render();

  },
  render: function(model) {
    this.$el.html(this.templateWine(model));
    // this.$el.append(this.templateSidebar( model.toJSON() ));

    // console.log(model);
  },
  events: {
    "click .sidebar-wine" : "displayWine"
  },
  displayWine: function(e) {
    e.preventDefault();
    // this.parent.displayWine(this.model)
    this.trigger("displayWine", this.model)
  }
})
