var expect = require('chai').expect
var app = require('../lib/morse_code.js')


// SETUP TESTS
describe('MorseCode', function () {
  describe('#decode()', function () {
    it('parses single characters', function () {
      expect(app.decode('.')).to.eq('E')
    })
  })
})
