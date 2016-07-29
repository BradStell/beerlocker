const User = require('../models/user');

exports.postUsers = function (req, res) {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save( (err) => {
        if (err) res.send(err);

        res.json({ message: 'New beer drinker added to the locker room!' });
    });
};

exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if (err) res.send(err);

        res.json(users);
    });
};