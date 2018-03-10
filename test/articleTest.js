var expect = chai.expect

describe('Article', function(){
  it('is instantiated with a headline attribute', function(){
    var article = new Article('headline');
    expect(article).to.have.property('headline');
  });

  it('headline attribute returns a string', function(){
    var article = new Article('Russian spy attacked');
    expect(article.headline).to.equal('Russian spy attacked');
  });
});
