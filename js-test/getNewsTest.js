var expect = chai.expect;
var assert = chai.assert;

describe('getNews', function(){

  const link = './newsstub.json';

  it('returns a promise', function(){
    expect(getNews(link)).to.be.an.instanceof(Promise);
  });

  it('returns a response which can be parsed into a JSON response', function(){
    return (getNews(link)).then(function(result){
      var obj = JSON.parse(result);
      expect(obj).to.have.property('response')
    }).catch(function(error){
      assert.fail(error);
    });
  });

  it('returns a response which includes a headline string', function(){
    return (getNews(link)).then(function(result){
      var obj = JSON.parse(result);
      return obj.response;
    }).then(function(response){
      return response.results;
    }).then(function(articles){
      return articles[0];
    }).then(function(topArticle){
      expect(topArticle.webTitle).to.equal('Trump and Juncker under fire for hailing Putin election victory');
    }).catch(function(error){
      assert.fail(error);
    });
  });
});
