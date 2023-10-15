const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

const staticpath = path.join(__dirname, '../public');
const viewspath = path.join(__dirname, '../templates/views');
const partialspath = path.join(__dirname, '../templates/partials');

app.set("view engine", "hbs")
app.set('views', viewspath);
hbs.registerPartials(partialspath);
app.use(express.static(staticpath));

app.get("/about", (req, res) => {
    res.render("postlogin")
});

app.listen('8000', (req, res) => {
console.log("listening on port 8000")
});