// server.js
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const path = require("path");
const ejsMate = require("ejs-mate");
const Coffee = require("./models/coffee");
const { contactValidation } = require("./middleware/validateContact");
const validateContact = require("./middleware/validateContact");
const passport = require('passport');
require('./auth');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login'); // ya signup page
}


// ====== MongoDB Connection ======
const dburl = "mongodb://127.0.0.1:27017/coffee-shop";



// Connect to MongoDB
async function main() {
    await mongoose.connect(dburl);
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("there is some error", err); 
  });
  

// ====== View Engine Setup ======

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ====== Middlewares ======
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// 1️⃣ Public folder for CSS, JS, etc.
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));


// 2️⃣ Init folder for images or other assets
app.use(express.static(path.join(__dirname, "Init")));


// ====== Session Config ======
const store = MongoStore.create({
  mongoUrl: dburl,
  touchAfter: 24 * 60 * 60, // reduce session updates
});



app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
     cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
      maxAge: 1000 * 60 * 60 * 24 * 3,
    },
}));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());



// ====== Locals Middleware ======

app.get('/auth/google',
  passport.authenticate('google',{scope: ['email','profile']})
);
app.get('/google/callback',
  passport.authenticate('google',{
    successRedirect : '/protected',
    failureRedirect: '/auth/failure',

  })
);

app.get('/auth/failure',(req,res)=>{
  res.send("SOMETHING WENT WRONG...");
});

app.post("/signup", async (req, res) => {
    try {
        const { name, age, email, mobile, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.send("Passwords do not match");
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.send("Email already registered");
        }

        const newUser = new User({
            name,
            age,
            email,
            mobile,
            password,
        });

        await newUser.save();
        res.send("Signup successful, please login");
    } catch (err) {
        res.send("Error: " + err.message);
    }
});



app.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);

    req.session.destroy(err => {
      if (err) return next(err);

      res.clearCookie('connect.sid', { path: '/' }); // ensure path matches session cookie
      res.redirect('/home');  // **sirf yahi response bhejo**
    });
  });
});



app.use((req, res, next) => {
  res.locals.currentUser = req.session.user || null;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ====== Routes ======

app.get('/protected',isLoggedIn,(req,res)=>{
  res.send("hello");
});

app.get('/check', (req, res) => {
  if (req.user) {
    res.send("User is logged in: " + req.user.email);
  } else {
    res.send("User is NOT logged in");
  }
});

app.get("/home", (req, res) => {
    res.render("coffees/index");
});

app.get("/about", (req, res) => {
    res.render("coffees/about");
});


app.get("/menu", async (req, res) => {
    let coffees = await Coffee.find({});
    res.render("coffees/menu", { coffees });
});



app.get("/pages", (req, res) => {
  res.send("This page is not available yet"); // views/menu.ejs
});
app.get("/contact", (req, res) => {
    res.render("coffees/contact");
});


app.get("/login", (req, res) => {
   res.render("users/login");
});


app.get("/signup", (req, res) => {
   res.render("users/signup");
});


app.post("/contact", validateContact, (req, res) => {
    res.send("Message received!");
});


// ====== Error Handling ======
// // 404 handler
// app.use((req, res, next) => {
//   res.status(404).send('Page Not Found');
// });

// app.use((err, req, res, next) => {
//   const { statusCode = 500, message = "Something went wrong!" } = err;
//   res.status(statusCode).render("error", { err });
// });





// ====== Start Server ======
const PORT = 8080;
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running");
});

