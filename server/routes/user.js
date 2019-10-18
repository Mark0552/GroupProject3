const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')


router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, todos } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                todos: todos
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/budget/', (req, res) => {
    const singleExpense = req.body
    User.Update(
        // { username: username },
        { $push: { "budget": singleExpense } }, (err, User) => {
            if (err) {
                throw err;
            }
            res.json("Budget update success");
        });
})

router.put('/', (req, res) => {

    var index = -1;
    var filteredObj = req.todos.find(function (item, i) {
        if (item.todo === req.todo) {
            index = i;
            return i;
        }
    });

    User.findOne({ usename: req.username }, (err, thisUser) => {
        if (completed === "Completed") {
            thisUser.Update({ todos: this.todos[index] }, function (err, thistodo) {
                thistodo.completed = "Not Complete";
                thistodo.save(function (err) {
                    console.log("ERROR");
                })
            })
            res.json(thisUser);
        } else {
            thisUser.Update({ todos: this.todos[index] }, function (err, thistodo) {
                thistodo.completed = "Completed";
                thistodo.save(function (err) {
                    console.log("ERROR");
                })
            })
            res.json(thisUser);
        }
    });
});


router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username,
            todos: req.user.todos
        };
        res.json(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    var userInfo = {
        username: req.user.username,
        haveTodos: [],
        doneTodo: [],
        todos: req.user.todos,
        _id: req.user._id
    };
    if (req.user) {
        res.json({ userInfo })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }

})

module.exports = router