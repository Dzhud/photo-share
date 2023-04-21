//imports
const express = require("express");
const db = require("./models"); //this line
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


// server
const port = 8080;
const sqlPort = 3307;  //or 3306
app.listen(port, () => {
  console.log(`MariaDB connection Successful- http://localhost:${port}`);
});

const PhotosRouter = require('./routes/PhotosRouter');
const CommentsRouter = require('./routes/CommentsRouter');
const UsersRouter = require('./routes/UsersRouter');

//routes

//db
db.sequelize
  .sync({})
  .then(() => {
    app.listen(sqlPort, () => {
      console.log(
        `MariaDB Connection successfully established to http://localhost:${sqlPort}.`
      );
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// set the view engine to ejs
app.set("view engine", "ejs");
// serve static files from public
app.use(express.static('public'))
// use res.render to load up an ejs template
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/images", PhotosRouter);
app.use("/comments", CommentsRouter)
app.use("/users", UsersRouter)