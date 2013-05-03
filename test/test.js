var chai = require('chai')
chai.should()

describe('to-string', function () {
  var toString = require('../')
  
  it('examples', function () {
    toString('sdfsf').should.equal('sdfsf')
    toString(9).should.equal('9')
    toString(undefined).should.equal('')
    toString(null).should.equal('')
    toString([1,2]).should.equal('1,2')
    toString(false).should.equal('false')
    toString(true).should.equal('true')
    toString({}).should.equal('[object Object]')
    toString({toString: function () { return 'foo'}}).should.equal('foo')
  })
})