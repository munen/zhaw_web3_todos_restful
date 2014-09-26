$(document).ready(function() {
  Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      done: false
    }
  });

  TodosCollection = Backbone.Collection.extend({
    model: Todo,
    url: '/todos'
  });


  todos = new TodosCollection();


})
