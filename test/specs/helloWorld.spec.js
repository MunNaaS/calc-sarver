describe('app', function () {
  beforeEach (() => {
    this.timeout(10000)
  })
  it('hello world', () => {
    return request.get('/').then(function (res) {
      expect(res).to.have.status(200)
    })
    .catch(function (err) {
      throw err;
    })
  })
})
