$(document).ready(function() {
  Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      done: false
    }
  });

  TodosCollection = Backbone.Collection.extend({
    model: Todo,
    url: 'http://localhost:3000/todos'
  });


  todos = new TodosCollection();


})
