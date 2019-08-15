var express = require("express"),
    router = express.Router(),
    Leaderboard = require("../models/leaderboardModel.js"),
    School = require("../models/schoolModel.js");

router.post("/school", function (req, res) {
    School.create(req.body, function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(school);
            // Leaderboard.create({
            //     school: school["_id"],
            //     score: 0
            // }, function (err, leaderboard) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         console.log(leaderboard);
            //     }
            // });
            res.send(school);
        }
    });
});

// route.post("/leaderboard", function (req, res) {
//     School.findOne({}, function (err, schools) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(schools);
//             schools.forEach(school => {
//                 school.score += 
//             });
//         }
//     });
// });

router.get("/school", function (req, res) {
    School.find(req.query, function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(school);
        }
    });
});

router.get("/school/:schoolName", function (req, res) {
    console.log(req.params);
    School.findOne(req.params, function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(school);
        }
    });
});

router.put("/school", function (req, res) {
    console.log(req.body);
    var item = req.body.id;
    var update = req.body.update;
    delete update.id
    School.findOneAndUpdate(item, { $set: update }, { new: true }, function (err, newSchool) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newSchool);
            res.send(newSchool);
        }
    });
});

router.delete("/school", function (req, res) {
    School.find(req.body).remove(function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(school);
            res.send(school);
        }
    });
});

module.exports = router;