# Teaching Node
## Web Fundamentals

| Objectives |
| :--- |
| Compare and contrast parallels between teaching Rails and Express |
| Answer questions related to teaching JS first curriculum. |

## Typical Files Of Interest

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


### Models

With Rails **ActiveRecord** gives us both a migration system and a modeling system for our database. In the node world the existing solution for this is **Sequelize**, which is not without it's faults, but gets the job done.


[Sequelize](sequelize.md)

[See more on associations](https://github.com/sf-wdi-17/notes/blob/master/lectures/week-04/_1_monday/dawn/associations_with_sequelize.md)

### Views (EJS)

EJS is remarkably similar to ERB, and is great way to prepare them for working with ERB. 


### Express Setup

Express is relatively simple API to fiddle with and teach to students.

[Simple Login](https://github.com/sf-wdi-17/simple_login)
[API's](https://github.com/sf-wdi-17/inclass_api)

### Current SF WDI Instance

[SF WDI 17](https://github.com/sf-wdi-17/notes)

### Other Resources

[SF WDI 15](https://github.com/sf-wdi-15/notes)
[SF WDI 14](https://github.com/sf-wdi-14/notes)
[SF WDI 10](https://github.com/wdi-sf-july/notes)






















