var repl = require("repl");
var db = require("./models")

var newRepl = repl.start("hello >");
newRepl.context.db = db;
