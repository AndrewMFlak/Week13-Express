var friendData = require("../app/data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        var userInput = req.body;
       
        var userResponses = userInput.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
        }

        if (diff < totalDifference) {
            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].images;
        }

    });
    app.post("/api/clear", function () {
        friendData = [];
        console.log(friendData);
    });
};