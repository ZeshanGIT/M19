var express = require("express"),
    router = express.Router(),
    Leaderboard = require("../models/leaderboardModel.js"),
    School = require("../models/schoolModel.js");

router.post("/leaderboard", function (req, res) {
    Leaderboard.create(req.body, function (err, leaderboard) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(leaderboard);
            Leaderboard.create({
                id: leaderboard["_id"],
                score: 0
            }, function (err, leaderboard) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(leaderboard);
                }
            });
            res.send(leaderboard);
        }
    });
});

router.get("/leaderboard", function (req, res) {
    Leaderboard.find(req.query, function (err, leaderboard) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(leaderboard);
        }
    });
});

router.get("/leaderboard/:leaderboardName", function (req, res) {
    console.log(req.params);
    Leaderboard.findOne(req.params, function (err, leaderboard) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(leaderboard);
        }
    });
});


router.put("/leaderboard", function (req, res) {
    console.log(req.body);
    var id = req.body.item;
    var update = req.body.update;
    delete update.id
    // res.send(JSON.stringify(req.body.update));
    Leaderboard.findOneAndUpdate(id, { $set: update }, { new: true }, function (err, newLeaderboard) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newLeaderboard);
            res.send(newLeaderboard);
        }
    });
});

router.delete("/leaderboard", function (req, res) {
    Leaderboard.find(req.body).remove(function (err, leaderboard) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(leaderboard);
            res.send(leaderboard);
        }
    });
});

module.exports = router;