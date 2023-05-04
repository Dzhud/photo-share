const express = require("express");
const PageRouter = express.Router();
const db = require("../models");

// use res.render to load up an ejs template
PageRouter.get("/", (request, response) => {
  if (request.session.userId) {
    db.photo
      .findAll()
      .then((photos) => {
        console.log("GETTING IMAGES"); 
        response.render("index", { data:photos });
      })
      .catch((error) => {
        response.send(error);
      });
      
  } else {
    response.redirect("/login");
  }
});

PageRouter.get("/photo", (request, response) => {
  console.log("/photo")
  if (request.session.userId){
    response.render("photo");
  }
  else{
    response.redirect('/login')
  }
});

PageRouter.get("/login", (request, response) => {
  console.log("/LOGGING IN");
  response.render("login", {data: "Say I'm supposed to Put An error Here"});
});

PageRouter.get("/badlogin", (request, response) => {  
  response.render("login", {data: "Bad Login Credentials"});
});

PageRouter.get("/signUp", (request, response) => {
  console.log("/signUp");
  response.render("signUp");
});

PageRouter.get("/logout", (request, response) => {
  console.log("logging out--", request.session.userId);
  request.session.destroy(() => {
    response.redirect("/login");
  });
});

module.exports = PageRouter;