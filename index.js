const express = require("express");
const path = require("path");
const hbs = require("hbs");

// imported User from user model.
const User = require('./models/registers.js')

const app = express();
const port = 3000;
require("./db/conn");

const static_path = path.join(__dirname,"./public");
const viewengine = path.join(__dirname,"views");
const parials_path = path.join(__dirname,"views/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", viewengine);
hbs.registerPartials(parials_path);

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/register', (req, res) => {
  res.render('register')
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/registers', (req, res) => {
  res.render('registers')
})

//add user to database

app.post('/register', async(req, res) => {
  try{
    console.log(req.body.username);
    const registerUser = new User({

      username: req.body.username

    })
    const registered = await registerUser.save();
    console.log(registered)
    res.status(201).render("index");

  } catch(error){
      res.status(400).send(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})