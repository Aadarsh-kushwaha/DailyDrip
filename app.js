// server.js
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const path = require("path");

const app = express();

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

app.use(
  session({
    store,
    secret: "thisisnotagoodsecret", // static for local dev
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
      maxAge: 1000 * 60 * 60 * 24 * 3,
    },
  })
);

app.use(flash());

// ====== Locals Middleware ======
app.use((req, res, next) => {
  res.locals.currentUser = req.session.user || null;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ====== Routes ======
app.get("/home", (req, res) => {
  res.render("boilerplate"); // correct path
});


app.get("/menu", (req, res) => {
  res.render("menu"); // views/menu.ejs
});

app.get("/orders", (req, res) => {
  res.render("orders"); // views/orders.ejs
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
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
