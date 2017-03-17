module.exports = function (app) {
    
    var path = require("path");
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + "./../views/index.html"))
        //res.render('index', { title: 'Home Page.  ' })
    });

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Chat with Me!  ' })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });
}
