var expect = chai.expect;

describe('getNews', function(){
  it('returns a promise', function(){
    var getNews = new getNews(newsStub.json);
    expect(getNews).to.be.an.instanceof(Promise);
  });
});
