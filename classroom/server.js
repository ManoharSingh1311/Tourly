const express = require("express");
const app = express();
const users = require("./routers/users.js");
const posts = require("./routers/posts.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

// Set the view engine to EJS and configure the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Session configuration
const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};
app.use(session(sessionOptions));
app.use(flash());
app.use(cookieParser());

app.use(( req, res, next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();  
})

// Route for registering a user
app.get("/register", (req, res) => {
    const { name = "anonymous" } = req.query;
    req.session.name = name;
    if (name !== "anonymous")  {
        req.flash("success", "User registered successfully");
    } else {
        req.flash("error", "User not registered!");
    }
    res.redirect("/hello");
});



// Route for displaying a hello message
app.get("/hello", (req, res) => {
    res.render("page.ejs", { name : req.session.name });
});


// Example route for counting requests (commented out)
// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// });

// Example test route (commented out)
// app.get("/test", (req, res) => {
//     res.send("Test successful!");
// });

// Route to set signed cookies
// app.use(cookieParser("secretcode"));
// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("Made-in", "India", { signed: true });
//     res.send("Signed cookie sent!");
// });

// Route to verify signed cookies
// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("Verified!");
// });

// Route to set regular cookies
// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "Hello");
//     res.cookie("Made-in", "India");
//     res.send("Sent you some cookies!");
// });

// Route to greet user based on cookie
// app.get("/greet", (req, res) => {
//     const { name = "anonymous" } = req.cookies;
//     res.send(`Hi, ${name}`);
// });

// Root route
// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Hi, I am root!");
// });

// Mount user and post routes
app.use("/users", users);
app.use("/posts", posts);

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
