const UserModel = require('../models/user')
const mongoose = require('mongoose')
const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)



describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('test user flow', () => {
  
  // afterAll(async (done) => {
  //   await mongoose.connection.close()
  //   done()
  // })

  it('get status', async (done) => {
    const endpoint = '/users/status'
    const response = await request.get(endpoint)
    expect(response.status).toBe(200)
    expect(response.text).toBe('respond with a resource')
    done()
  })

  it('create user', async (done) => {
    // const endpoint = '/users'
    // const data = {
    //   email: 'thetrieule@gmail.com',
    //   password: '123456',
    //   phoneNumber: '0964614240'
    // }
    // const response = await request.post(endpoint).send(data)
    // expect(response.status).toBe(200)
    // expect(response.body.data.email).toBe(data.email)
    // expect(response.body.data.phone_number).toBe(data.phoneNumber)
    // expect(response.body.data.phone_number).toBeTruthy()
    done()
  })

  it('check error', async (done) => {
    // const response = await request.put('/users').send(data)

    done()
  })
})

