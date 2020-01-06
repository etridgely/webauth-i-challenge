const { Router } = require('express');
const bcrypt = require('bcryptjs');
const db = require('./user-model.js')

const users = Router();

users.get('/users', protected, (req, res) => {
    db.get()
        .then(users => res.json(users))
        .catch(err => res.json({ message: "database error", error: err.message }))
})

users.post('/register', (req, res) => {
    const { username, password } = req.body;
    db.create({ username, password: bcrypt.hashSync(password, process.env.SALT || 1) })
        .then(id => res.send('user created'))
})

users.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        db.getUser(name)
            .then(user => {
                bcrypt.compareSync(authorization, user.password) 
                ? req.send(`hello ${username}`) 
                : req.status(401).json({ message: "invalid credentials"});
            })
            .catch(err => res.status(500).json({ error: err, message: "error validating user" }))
    } else {
        res.status(400).json({ message: "please provide credentials" })
    }
})

function protected(req, res, next) {
    const { authorization, name } = req.headers;
    if (authorization && name) {
        db.getUser(name)
            .then(user => {
                bcrypt.compareSync(authorization, user.password) 
                ? next() 
                : req.status(401).json({ message: "invalid credentials"});
    })
            .catch(err => res.status(500).json({ error: err, message: "error validating user" }))
} else {
    res.status(400).json({ message: "please provide credentials" })
}
}

module.exports = users;