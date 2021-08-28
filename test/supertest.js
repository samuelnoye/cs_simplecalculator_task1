const assert  =  require('assert');
const request = require('supertest');
const app = require('../app.js')

//const requestWithSupertest = supertest(app);

describe('/calculator', () => {
    describe('POST', ()=> {
        it('should return a status code of 200', ()=> {
            const fnum = 2 
            const snum = 3 
            const response = request(app).post('/calculator')
            .send({ fnum, snum })

            assert.equal(response.status, 200)

        })
    })
})

