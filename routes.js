const Author = require('./author');

module.exports = function(app) {
    app.get('/authors', function(req, res){
        Author.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json(data);
            }
        });
    });

    app.post('/authors', function(req, res) {
        var author = new Author({name: req.body.name });
        author.save(function(err, results) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({success: results});
            }
        });
    });

    app.get('/authors/:id', function(req, res){
        Author.findById(req.params.id, function(err, data){
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json(data);
            }
        });
    });

    app.put('/authors/:id', function(req, res){
        var author = {};
        author.name = req.body.name;
        Author.update({_id: req.params.id}, author, function(err, results) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({success: results});
            }
        });
    });

    app.post('/quotes/:id', function(req, res) {
        var newQuote = {text: req.body.text, votes: 0};
        console.log(newQuote);
        console.log("posting new quote:", req.body.text);
        Author.update({_id: req.params.id}, {$push: {quotes: newQuote}}, function(err, results) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({success: results});
            }
        })
    });

    // Delete specific comment
    app.delete('/quotes/:id', function(req, res) {
        var index = req.body.index;
        Author.update({_id: req.params.id}, )
    });

    // Change vote count up
    app.put('/quotes/:id/up', function(req, res) {
        console.log("incrementing votes up!", req.body.index)
        Author.findById(req.params.id, function(err, _author) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                let _updatedQuotes = _author.quotes;
                _updatedQuotes[req.body.index].votes += 1;
                _author.update({quotes: _updatedQuotes}, function(err, results) {
                    if (err) {
                        console.log(err);
                        res.json({error: err});
                    } else {
                        res.json({success: results});
                    }
                });
            }
        });
    });

    // Change vote count down
    app.put('/quotes/:id/down', function(req, res) {
        console.log("incrementing votes down!", req.body.index)
        Author.findById(req.params.id, function(err, _author) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                let _updatedQuotes = _author.quotes;
                _updatedQuotes[req.body.index].votes -= 1;
                _author.update({quotes: _updatedQuotes}, function(err, results) {
                    if (err) {
                        console.log(err);
                        resjson({error:err});
                    } else {
                        res.json({success:results});
                    }
                });
            }
        });
    });

    app.delete('/authors/:id', function(req, res) {
        Author.findByIdAndRemove(req.params.id, function(err, results){
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({success: results});
            }
        });
    });

}
