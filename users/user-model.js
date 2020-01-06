const knex = require('knex');
const config = require('../knexfile')

const client = knex(config.development);

module.exports.get = () => {
    return client('users')
}

module.exports.getUser = (username) => {
    return client('users')
        .where('username', '=', username)
}

module.exports.create = (user) => {
    return client('users')
        .insert(user)
}