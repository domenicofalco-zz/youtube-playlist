Main installation<br>
1) yarn install<br>

DB Access<br>
1) install brew, see here https://brew.sh/index_it.html<br>
2) brew install mongodb<br>
3) brew services start mongodb * <br>
4) type "mongo" in the terminal<br>
5) From now on, you have fully access to your local db through your terminal ** <br>

Middleware & Frontend<br>
1) yarn middleware-watch<br>
2) yarn frontend-watch<br>
3) navigate to http://localhost:8888/

<br>
* to stop mongoDB connection: brew services stop mongodb
<br>
** shell reference for mongodb https://docs.mongodb.com/manual/reference/mongo-shell/

<!---
  some helps with mongo DB: https://zellwk.com/blog/crud-express-mongodb/
-->
