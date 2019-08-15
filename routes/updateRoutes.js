var express = require("express"),
    router = express.Router(),
    FCM = require("../fcm.js"),
    Token = require("../models/tokenModel.js"),
    Update = require("../models/updateModel.js");

router.post("/update", function (req, res) {
    Update.create(req.body, function (err, update) {
        if (err) {
            console.log(err);
        } else {
            console.log(update);
            var tokens;
            Token.find({}, function (err, token) {
                if (err) {
                    console.log(err);
                } else {
                    tokens = token.map(({ token }) => token);
                    console.log(tokens);

                    const { title, message } = update;

                    var msg = {
                        notification: {
                            title: `${title}`,
                            body: `${message}`
                        }
                    };

                    console.log(msg);
                    FCM.sendToMultipleToken(msg, tokens, function (err, response) {
                        if (err) {
                            console.log('err--', err);
                        } else {
                            console.log('response-----', response);
                        }
                    });
                    res.send(msg);
                }
            });
            // res.send(update);
        }
    });
});

module.exports = router;