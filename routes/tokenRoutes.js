var express = require("express"),
    router = express.Router(),
    Token = require("../models/tokenModel.js");

router.post("/token", function (req, res) {
    Token.create(req.body, function (err, token) {
        if (err) {
            console.log(err);
        } else {
            console.log(token);
            res.send(token);
        }
    });
});



module.exports = router;