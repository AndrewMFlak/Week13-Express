var path = require("path");

module.exports = function (app) {

    // app.use( function (req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/home.html"));
    // });


    app.get("/Self", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/self.html"));
    });

    app.get("/Survey", function (req, res) {
        res.sendFile(path.join(__dirname,
            "/../public/survey.html"));
    });

    app.get("/View", function (req, res) {
        res.sendFile(path.join(__dirname,
            "/../public/view.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname,
            "/../public/home.html"));
    });

};