# Teaching Node
## Web Fundamentals

| Objectives |
| :--- |
| Review and apply core concepts from a Rails/Sinatra CRUD app to Express |
| Review and apply core concepts from a Rails/Sinatra Authentication Setup to Express |
| Review and apply core concepts from Rails/Sinatra API integration to an Express app. |


## CRUD Files

In a Rails application we would typically have a few main files to discuss when teaching CRUD to students.

* `config/routes.rb`
* `controllers/todo_controller.rb`
* `views/*.html.erb`
* `models/todo.rb`
* `Gemfile`

In a very simple Express CRUD application we have most the routing and control logic in a single application file, similar to a Sinatra application. However, we still have a large number of parallels.

* `models/todo.js`
* `views/*.ejs`
* `app.js`
* `package.json`


### CRUD Models

With Rails **ActiveRecord** gives us both a migration system and a modeling system for our database. In the node world the existing solution for this is **Sequelize**, which is not without it's faults, but gets the job done.









