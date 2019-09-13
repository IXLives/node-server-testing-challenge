const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config')

describe('the server', () => {

    //clear test db before each test
    beforeEach(async () => {
        await db('pokemon').truncate()
    })

    describe('GET /pokemon', () => {
        it('should return list of pokemon', () => {
            return request(server)
                .get('/pokemon')
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toBe('application/json')
                    expect(res.body.length).toBe(0)
                }) 
        })
    })
})