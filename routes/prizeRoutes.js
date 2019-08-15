var express = require("express"),
    router = express.Router(),
    School = require("../models/schoolModel.js"),
    Token = require("../models/tokenModel.js"),
    fcm = require('fcm-notification'),
    FCM = new fcm('private-key.json'),
    Prize = require("../models/prizeModel.js");


router.post("/prize", function (req, res) {
    Prize.create(req.body, function (err, prize) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(prize);
            School.find({}, function (err, schools) {
                if (err) {
                    console.log(err);
                } else {
                    var school;
                    schools.forEach(schl => {
                        if (schl.name == prize.school) school = schl;
                    });
                    school.score += prize.score;
                    school.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            School.find({}, function (err, schls) {
                                schls.sort((a, b) => b.score - a.score);
                                var rank = schls.indexOf(school);

                                var tokens;
                                Token.find({}, function (err, token) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        tokens = token.map(({ token }) => token);
                                        console.log(tokens);

                                        const { scl, event, position, score } = prize;

                                        var message = {
                                            notification: {
                                                title: "${scl} secured ${position} in ${event}",
                                                body: '${scl} now stands at ${rank} with ${school.score}'
                                            }
                                        };

                                        console.log(message);
                                        FCM.sendToMultipleToken(message, tokens, function (err, response) {
                                            if (err) {
                                                console.log('err--', err);
                                            } else {
                                                console.log('response-----', response);
                                            }

                                        });
                                        res.send(school);
                                    }
                                });
                                // console.log(leaderboard);
                                // Leaderboard.find({}).sort({ score: -1 }).exec(function (err, lb) {
                                //     if (err) {
                                //         console.log(err);
                                //     } else {
                                //         console.log(lb);
                                //         var rank = lb.indexOf(leaderboard);
                                //         console.log("Rank ::: ${rank}");


                                //     }


                                // });
                            });
                        }
                    });
                    // console.log(leaderboard);
                }
            });
        }
    });
});

router.get("/prize", function (req, res) {
    Prize.find(req.query, function (err, prize) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(prize);
        }
    });
});

router.put("/prize", function (req, res) {
    console.log(req.body);
    var id = req.body.id;
    var update = req.body.update;
    delete update.id
    // res.send(JSON.stringify(req.body.update));
    Prize.findOneAndUpdate(id, { $set: update }, { new: true }, function (err, newPrize) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newPrize);
            res.send(newPrize);
        }
    });
});

router.delete("/prize", function (req, res) {
    Prize.find(req.body).remove(function (err, prize) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(prize);
            res.send(prize);
        }
    });
});

module.exports = router;