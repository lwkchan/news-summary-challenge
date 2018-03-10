var expect = chai.expect;

describe('getNews', function(){
  it('returns a promise', function(){
    expect(getNews('newsStub.json')).to.be.an.instanceof(Promise);
  });
});
