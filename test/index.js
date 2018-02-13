'use strict'
const app = require('../app')

// Attach Chai APIs to global scope
const chai = require('chai')
const request = require('supertest')

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

global.expect = chai.expect
global.should = chai.should
global.assert = chai.assert
global.request = request(app)

// Require all JS files in `./specs` for Mocha to consume
require('require-dir')('./specs')
