"use strict";

// dependencies
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

//use public directory for static files
app.use(express.static(path.join(__dirname, '/public')));

app.get("/", (req, res) =>{
  res.sendFile('public/html/index.html' , { root : __dirname});
});

app.listen(PORT, (err) => {
  if(err) throw err;
  console.log(`listening on port ${PORT}`);
})
