app.get("/Home", function(request, response) {
    response.sendFile(path.join(__dirname,
    "../home.html"))
});

app.get("/self", function(request, response) {
    response.sendFile(path.join(__dirname, "../self.html"))
});

app.get("/Survey", function(request, response) {
    response.sendFile(path.join(__dirname,
    "../survey.html"))
});