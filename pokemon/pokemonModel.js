const db = require('../data/db-config')

module.exports = { 
    insert,
    remove,
    getAll,
}

async function insert(pokemon) {
    return db('pokemon').insert(pokemon)
        .then(ids => {
            return db('pokemon').where({id: ids[0]})
                .first()
        })
}

function remove(id) {
    return db('pokemon').where({id}).del()
        .then(ids => {
            console.log('butt')
            return db('pokemon')
        })
}

function getAll() {
    return db('pokemon')
}