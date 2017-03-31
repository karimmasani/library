var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
<<<<<<< HEAD
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
                Link: '/Books',
                Text: 'Books'
            },
            {
                Link: '/Authors',
                Text: 'Authors'
            }
        ]
    });
});

app.get('/books', function(req, res) {
    res.send('Hello Books!!');
});

app.listen(port, function(err) {
=======
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/books', function (req, res) {
    res.send('Hello Books!!');
});

app.listen(port, function (err) {
>>>>>>> 4bf73c061d99c00c77889bb08d5662f0b2e368bb
    console.log('running server on port ' + port);
});
