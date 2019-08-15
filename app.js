var app = require("express")(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://zesh:kply1967*@cluster0-bgqw9.mongodb.net/m19?retryWrites=true&w=majority");
mongoose.connect("mongodb://localhost/m19");
app.use(bodyParser.json());

app.use(require("./routes/schoolRoutes.js"));
app.use(require("./routes/leaderboardRoutes.js"));
app.use(require("./routes/tokenRoutes.js"));
app.use(require("./routes/updateRoutes.js"));
app.use(require("./routes/prizeRoutes.js"));

//Base Route

// var fcm = require('fcm-notification');
// var FCM = new fcm('private-key.json');

app.get("/", function (req, res) {
    // FCM.send(message, function (err, response) {
    //     if (err) {
    //         console.log('error found', err);
    //     } else {
    //         console.log('response here', response);
    //     }
    // });
    res.send("It's working fine!");
});

app.get("/test", function (req, res) {
    var body = JSON.parse(req.query.body || "{}");
    console.log(body);
    res.send(body);
});

app.listen(2222, "localhost", function () {
    console.log("Server has started...");
});























// User.find({}, function(err, users) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Users !!!!!!!!");
//         console.log(users);
//     }
// });

// var userSchema = new mongoose.Schema({
//     uid: { type: String, unique: true },
//     firstName: String,
//     lastName: String,
//     password: String,
//     mailID: String,
//     phoneNumber: Number,
//     avatar: Number,
//     pinCode: Number,
//     addressLvl1: String, //Flat, House no., Building, Company, Apartment
//     addressLv2: String, //Area, Colony, Street, Sector, Village
//     landmark: String,
//     city: String,
//     state: String,
// });

// var User = mongoose.model("User", userSchema); 
// User.remove({}, function(err, users) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(users);
//     }
// });
// var me = new User({
//     uid: "nbghuiolmju",
//     firstName: "Seshan",
//     lastName: "Suresh",
//     password: "kply1967*",
//     mailID: "kssu1967@gmail.com",
//     phoneNumber: "+919486932475",
//     avatar: 5,
//     pinCode: 620005,
//     addressLvl1: "B2, Apple Residency", //Flat, House no., Building, Company, Apartment
//     addressLv2: "Ganapathy Nagar", //Area, Colony, Street, Sector, Village
//     landmark: "Opposite to GVN Hospital",
//     city: "Trichy",
//     state: "Tamil Nadu",
// });

// me.save(function(err, user) {
//     if (err) {
//         console.log(user);
//     }
//     else {
//         console.log(user);
//     }
// });

// User.create({
//     uid: "nbghuiolmju",
//     firstName: "Seshan",
//     lastName: "Suresh",
//     password: "kply1967*",
//     mailID: "kssu1967@gmail.com",
//     phoneNumber: "+919486932475",
//     avatar: 5,
//     pinCode: 620005,
//     addressLvl1: "B2, Apple Residency", //Flat, House no., Building, Company, Apartment
//     addressLv2: "Ganapathy Nagar", //Area, Colony, Street, Sector, Village
//     landmark: "Opposite to GVN Hospital",
//     city: "Trichy",
//     state: "Tamil Nadu",
// }, function(err, user) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });

// User.find({}, function(err, users) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(users);
//     }
// });
