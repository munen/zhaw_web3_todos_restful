# Persistence Demo Server

A demo app for showing persistence which is deployed here:

 * [http://web3-todos1-restful.herokuapp.com/todos](http://web3-todos1-restful.herokuapp.com/todos)

  * That's the frontend to a Ruby on Rails app with a postgres database
 * [http://web3-todos1-restful.herokuapp.com/todos_backbone](http://web3-todos1-restful.herokuapp.com/todos_backbone)

  * That's a Backbone app accessing the same backend as the Rails app


## Nota bene

That's the shell code required to set up the above Rails application

    rails new todos
    cd todos
    rails generate scaffold todo title done:boolean
    rake db:migrate
    rails s

