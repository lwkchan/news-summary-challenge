var expect = chai.expect;

describe('getNews', function(){

  const link = './test/newsstub.json';

  it('returns a promise', function(){
    expect(getNews(link)).to.be.an.instanceof(Promise);
  });

  it('returns a response which can be parsed into JSON', function(){
    return (getNews(link)).then(function(result){
      var obj = JSON.parse(result);
      expect(obj).to.have.property('response')
    }).catch(function(error){
      console.log(Error + error);
    });
  });
});
