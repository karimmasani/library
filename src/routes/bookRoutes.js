var express = require('express');

var bookRouter = express.Router();

var books = [{
        'id': '978-0641723445',
        'title': 'The Lightning Thief',
        'author': 'Rick Riordan',
        'genre': 'fantasy',
        'read': false
    },
    {
        'id': '978-1423103349',
        'title': 'The Sea of Monsters',
        'author': 'Rick Riordan',
        'genre': 'fantasy',
        'read': false
    },
    {
        'id': '978-1857995879',
        'title': 'Sophie\'s World : The Greek Philosophers',
        'author': 'Jostein Gaarder',
        'read': false
    },
    {
        'id': '978-1933988177',
        'title': 'Lucene in Action, Second Edition',
        'author': 'Michael McCandless',
        'genre': 'IT',
        'read': false
    }
];

bookRouter.route('/')
    .get(function(req, res) {
        res.render('bookListView', {
            title: 'Books',
            nav: [{
                    Link: '/Books',
                    Text: 'Books'
                },
                {
                    Link: '/Authors',
                    Text: 'Authors'
                }
            ],
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Book',
            nav: [{
                    Link: '/Books',
                    Text: 'Books'
                },
                {
                    Link: '/Authors',
                    Text: 'Authors'
                }
            ],
            book: books[id]
        });
    });

module.exports = bookRouter;
